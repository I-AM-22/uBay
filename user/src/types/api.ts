export interface Pagination<T> {
  pageNumber: number;
  totalPages: number;
  totalDataCount: number;
  data: T[];
}

export interface Page<T> {
  data: Pagination<T>;
  pageParam: number;
}

export type PaginationParams = {
  pageNumber?: number;
  query?: string;
};
