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

export type Payload<Params, Body = undefined> = (Params extends undefined
  ? {}
  : {
      params: Params;
    }) &
  (Body extends undefined ? {} : { body: Body });

export type WithId<T> = {
  id: string;
} & T;
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
