import * as z from "zod";
import { zodI18nMap } from "zod-i18n-map";
import "./i18next";
import i18n from "./i18next";
const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  if (issue.code === z.ZodIssueCode.too_small && issue.minimum == 1) {
    return { message: i18n.t("validation:required") };
  }

  return zodI18nMap(issue, ctx);
};
z.setErrorMap(customErrorMap);
export default z;
