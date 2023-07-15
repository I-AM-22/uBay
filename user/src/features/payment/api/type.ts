export type PaymentPostBody = {
  product: string;
  note: string;
};
export type PaymentDetails = {};
export type PaymentGenerateQrBody = {
  product: string;
};
export type PaymentGenerateQr = {
  payment: string;
  status: 0 | 1;
};
