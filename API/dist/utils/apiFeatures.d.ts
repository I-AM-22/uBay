declare class APIFeatures {
    query: any;
    queryString: any;
    constructor(query: any, queryString: any);
    filter(): this;
    sort(): this;
    limitFields(): this;
    paginate(): this;
    search(): this;
}
export default APIFeatures;
