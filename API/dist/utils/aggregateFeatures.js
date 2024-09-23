"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const { ObjectId } = mongoose_1.Types;
class AggregateFeatures {
    constructor(ReqQuery) {
        this.pipeline = [];
        this.queryString = ReqQuery;
        this.mongoQuery = {};
    }
    filter(...nest) {
        const queryObj = Object.assign({}, this.queryString);
        const excludedFields = [
            'limit',
            'sort',
            'page',
            'fields',
            'search',
            'role',
            'q',
        ];
        excludedFields.forEach((el) => delete queryObj[el]);
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte|ne)\b/gi, (match) => `$${match}`);
        const parsedQuery = JSON.parse(queryStr);
        for (const field in parsedQuery) {
            const value = parsedQuery[field];
            if (typeof value === 'object') {
                Object.keys(value).forEach((operator) => {
                    const numericValue = parseFloat(value[operator]);
                    this.mongoQuery[field] = Object.assign(Object.assign({}, this.mongoQuery[field]), { [operator]: numericValue });
                });
            }
            else if (typeof Boolean(value)) {
                this.mongoQuery[field] = JSON.parse(value);
            }
            else if (ObjectId.isValid(value)) {
                let key = field;
                nest.forEach((el) => {
                    const relation = el.split('.');
                    if (relation[1] === key) {
                        key = el;
                        this.mongoQuery[key] = new ObjectId(value);
                    }
                    else {
                        this.mongoQuery[key.concat('._id')] = new ObjectId(value);
                    }
                });
            }
            else {
                this.mongoQuery[field] = value;
            }
        }
        if (Object.keys(this.mongoQuery).length)
            this.match(this.mongoQuery);
        return this;
    }
    match(matchStage) {
        this.pipeline.push({ $match: matchStage });
        return this;
    }
    addFields(addFieldsStage) {
        this.pipeline.push({ $addFields: addFieldsStage });
        return this;
    }
    sort(sortStage) {
        this.pipeline.push({ $sort: sortStage });
        return this;
    }
    lookup(lookupStage) {
        this.pipeline.push({ $lookup: lookupStage });
        return this;
    }
    project(projectStage) {
        this.pipeline.push({ $project: projectStage });
        return this;
    }
    unwind(unwindStage) {
        this.pipeline.push({ $unwind: unwindStage });
        return this;
    }
    group(groupStage) {
        this.pipeline.push({ $group: groupStage });
        return this;
    }
    unset(unsetStage) {
        this.pipeline.push({ $unset: unsetStage });
        return this;
    }
    replaceRoot(newRoot) {
        this.pipeline.push({ $replaceRoot: newRoot });
        return this;
    }
    facet() {
        const pageNumber = this.queryString.page || 1;
        const limit = this.queryString.limit * 1 || 100;
        const skip = (pageNumber - 1) * limit;
        this.pipeline.push({
            $facet: {
                paginatedResults: [{ $skip: skip }, { $limit: limit }],
                totalCount: [
                    {
                        $group: {
                            _id: null,
                            count: { $sum: 1 },
                        },
                    },
                ],
            },
        });
        return this;
    }
    search() {
        if (this.queryString.q) {
            const query = {
                $or: [
                    { name: { $regex: this.queryString.q, $options: 'xi' } },
                    { email: { $regex: this.queryString.q, $options: 'xi' } },
                    { description: { $regex: this.queryString.q, $options: 'xi' } },
                    { content: { $regex: this.queryString.q, $options: 'xi' } },
                    { 'store.city.name': { $regex: this.queryString.q, $options: 'xi' } },
                    { 'category.name': { $regex: this.queryString.q, $options: 'xi' } },
                    { 'store.name': { $regex: this.queryString.q, $options: 'xi' } },
                    { title: { $regex: this.queryString.q, $options: 'xi' } },
                ],
            };
            this.match(query);
        }
        return this;
    }
    build(query) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const result = yield query.aggregate(this.pipeline);
            const data = result[0].paginatedResults;
            const totalDataCount = ((_a = result[0].totalCount[0]) === null || _a === void 0 ? void 0 : _a.count) || 0;
            let response = { totalDataCount, data };
            if (this.queryString.page) {
                const totalPages = Math.ceil(totalDataCount / Number(this.queryString.limit));
                response = {
                    pageNumber: Number(this.queryString.page),
                    totalPages,
                    totalDataCount,
                    data,
                };
            }
            return response;
        });
    }
}
exports.default = AggregateFeatures;
//# sourceMappingURL=aggregateFeatures.js.map