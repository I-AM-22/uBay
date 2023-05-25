export type ResponseError =
  | {
      type: "default";
      message: string;
    }
  | {
      type: "form";
      errors: { message: string; path: string[] }[];
      message: string;
    };
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
