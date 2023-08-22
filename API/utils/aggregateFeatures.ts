import { Types } from 'mongoose';
const { ObjectId } = Types;
export default class AggregateFeatures {
  pipeline: any[];
  queryString: any;
  mongoQuery: any;
  constructor(ReqQuery: any) {
    this.pipeline = [];
    this.queryString = ReqQuery;
    this.mongoQuery = {};
  }

  filter(...nest: string[]) {
    const queryObj = { ...this.queryString };
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
    //Advance
    //For find
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b(gt|gte|lt|lte|ne)\b/gi,
      (match) => `$${match}`
    );
    const parsedQuery = JSON.parse(queryStr);

    for (const field in parsedQuery) {
      const value = parsedQuery[field];

      if (typeof value === 'object') {
        Object.keys(value).forEach((operator) => {
          const numericValue = parseFloat(value[operator]);
          this.mongoQuery[field] = {
            ...this.mongoQuery[field],
            [operator]: numericValue,
          };
        });
      } else if (typeof Boolean(value)) {
        this.mongoQuery[field] = JSON.parse(value);
      } else if (ObjectId.isValid(value)) {
        let key = field;
        nest.forEach((el) => {
          const relation = el.split('.');
          if (relation[1] === key) {
            key = el;
            this.mongoQuery[key] = new ObjectId(value);
          } else {
            this.mongoQuery[key.concat('._id')] = new ObjectId(value);
          }
        });
      } else {
        this.mongoQuery[field] = value;
      }
    }
    if (Object.keys(this.mongoQuery).length) this.match(this.mongoQuery);
    return this;
  }

  match(matchStage: any) {
    this.pipeline.push({ $match: matchStage });
    return this;
  }

  addFields(addFieldsStage: any) {
    this.pipeline.push({ $addFields: addFieldsStage });
    return this;
  }

  sort(sortStage: any) {
    this.pipeline.push({ $sort: sortStage });
    return this;
  }

  lookup(lookupStage: any) {
    this.pipeline.push({ $lookup: lookupStage });
    return this;
  }

  project(projectStage: any) {
    this.pipeline.push({ $project: projectStage });
    return this;
  }

  unwind(unwindStage: string | Object) {
    this.pipeline.push({ $unwind: unwindStage });
    return this;
  }
  group(groupStage: any) {
    this.pipeline.push({ $group: groupStage });
    return this;
  }

  unset(unsetStage: string | string[]) {
    this.pipeline.push({ $unset: unsetStage });
    return this;
  }
  replaceRoot(newRoot: any) {
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

  async build(query: any) {
    const result = await query.aggregate(this.pipeline);
    const data = result[0].paginatedResults;
    const totalDataCount = result[0].totalCount[0]?.count || 0;
    let response: any = { totalDataCount, data };
    if (this.queryString.page) {
      const totalPages = Math.ceil(
        totalDataCount / Number(this.queryString.limit)
      );
      response = {
        pageNumber: Number(this.queryString.page),
        totalPages,
        totalDataCount,
        data,
      };
    }
    return response;
  }
}
