export type Statics = {
  users: number;
  employees: number;
  stores: number;
  products: number;
  soldProducts: number;
  salesPercentage: number;
  salesPerCategory: SalesPerCategory[];
};

export type SalesPerCategory = {
  categoryCount: number;
  avgPrice: number;
  minPrice: number;
  maxPrice: number;
  categoryName: string;
  categoryPercentage: number;
};
