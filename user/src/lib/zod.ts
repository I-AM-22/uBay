import * as z from "zod";
import { zodI18nMap } from "zod-i18n-map";
import "./i18next";
import i18n from "./i18next";
z.setErrorMap(zodI18nMap);

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  console.log(issue);
  if (issue.code === z.ZodIssueCode.too_small && issue.minimum == 1) {
    return { message: i18n.t("validation:required") };
  }
  return { message: ctx.defaultError };
};
z.setErrorMap(customErrorMap);
export default z;
