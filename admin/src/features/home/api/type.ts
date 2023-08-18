export type Statics = {
  users: number;
  employees: number;
  stores: number;
  products: number;
  soldProducts: number;
  salesPercentage: number;
  salesPerCategory: SalesPerCategory[];
  byDay: ByDay[];
  profits: Profit[];
};

export type ByDay = {
  day: string;
  comments?: number;
  products: number;
  soldProducts?: number;
};

export type Profit = {
  totalValue: number;
  date: string;
};

export type SalesPerCategory = {
  categoryCount: number;
  avgPrice: number;
  minPrice: number;
  maxPrice: number;
  categoryName: string;
  categoryPercentage: number;
};
