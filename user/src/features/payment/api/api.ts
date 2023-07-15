import API_ROUTES from "constants/apiRoutes";
import axios from "lib/axios";
import { PaymentDetails, PaymentGenerateQr, PaymentGenerateQrBody, PaymentPostBody } from "./type";

const API = {
  buy: async (body: PaymentPostBody) => {
    const { data } = await axios.post(API_ROUTES.PAYMENTS.POST, body);
    return data;
  },
  get: async (id: string) => {
    const { data } = await axios.get<PaymentDetails>(API_ROUTES.PAYMENTS.GET(id));
    return data;
  },
  generateQrForSeller: async (body: PaymentGenerateQrBody) => {
    const { data } = await axios.post<PaymentGenerateQr>(
      API_ROUTES.DELIVERIES.GENERATE_QR_FOR_SELLER,
      body
    );
    return data;
  },
  generateQrForCustomer: async (body: PaymentGenerateQrBody) => {
    const { data } = await axios.post<PaymentGenerateQr>(
      API_ROUTES.DELIVERIES.GENERATE_QR_FOR_CUSTOMER,
      body
    );
    return data;
  },
};

export default API;
