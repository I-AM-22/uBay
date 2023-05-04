import i18n from "lib/i18next";
import yup from "lib/yup";
import { AccountLoginBody } from "../../api/type";

export const userNameRegex = /^[a-z0-9_-]*$/i;
export const passwordRegex = /^[^\s]+$/;

export const loginDefault: AccountLoginBody = {
  username: "",
  password: "",
};
const loginSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required()
    .matches(userNameRegex, i18n.t("auth:validation.username")),
  password: yup
    .string()
    .required()
    .matches(passwordRegex, i18n.t(`auth:validation.password`))
    .min(6),
});
export default loginSchema;
