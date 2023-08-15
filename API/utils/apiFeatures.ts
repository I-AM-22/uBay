class APIFeatures {
  query: any;
  queryString: any;
  //we should not  play with query and queryString
  constructor(query: any, queryString: any) {
    this.query = query; //Tour.find
    this.queryString = queryString; //req.query.
  }

  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = [
      'limit',
      'sort',
      'page',
      'fields',
      'search',
      'role',
    ];
    
    excludedFields.forEach((el) => delete queryObj[el]);
    //Advance
    //For find
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b(gt|gte|lt|lte|ne)\b/gi,
      (match) => `$${match}`
    );
    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }
    return this;
  }

  //3)fields limiting
  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('-__v');
    }
    return this;
  }

  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 100;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    //NOTE i deleted if because it does not give an error but give no data
    return this;
  }

  search() {
    if (this.queryString.search) {
      const query = {
        $or: [
          { name: { $regex: this.queryString.search, $options: 'xi' } },
          { email: { $regex: this.queryString.search, $options: 'xi' } },
          { description: { $regex: this.queryString.search, $options: 'xi' } },
          { content: { $regex: this.queryString.search, $options: 'xi' } },
        ],
      };
      this.query = this.query.find(query);
    }
    return this;
  }
}
export default APIFeatures;
