export default class AggregateFeatures {
    pipeline: any[];
    queryString: any;
    mongoQuery: any;
    constructor(ReqQuery: any);
    filter(...nest: string[]): this;
    match(matchStage: any): this;
    addFields(addFieldsStage: any): this;
    sort(sortStage: any): this;
    lookup(lookupStage: any): this;
    project(projectStage: any): this;
    unwind(unwindStage: string | Object): this;
    group(groupStage: any): this;
    unset(unsetStage: string | string[]): this;
    replaceRoot(newRoot: any): this;
    facet(): this;
    search(): this;
    build(query: any): Promise<any>;
}
