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

export interface APIList<T> {
  pageNumber: number;
  totalPages: number;
  totalDataCount: number;
  data: T[];
}

export interface Page<T> {
  data: APIList<T>;
  pageParam: number;
}

export type APIListParams = Partial<{
  page: number;
  limit: number;
  sort: string;
  fields: string;
  search: string;
}>;
export type WithId<T> = {
  _id: string;
} & T;
