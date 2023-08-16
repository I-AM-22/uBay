import { createQueryKeys } from "@lukemorales/query-key-factory";
import { useMutation, useQuery } from "@tanstack/react-query";
import API from "./api";
import { PaymentGenerateQrBody } from "./type";
export const keys = createQueryKeys("payment", {
  generateQr: (body: PaymentGenerateQrBody, isSeller: boolean) => ({
    queryFn: () => API[isSeller ? "generateQrForSeller" : "generateQrForCustomer"](body),
    queryKey: [body, isSeller],
  }),
});
export const queries = {
  useBuy: () => useMutation(API.buy),
  useGenerateQr: (body: PaymentGenerateQrBody, isSeller: boolean) =>
    useQuery({ ...keys.generateQr(body, isSeller), enabled: !!body.product, retry: false }),
};
