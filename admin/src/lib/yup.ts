import { t } from "i18next";
import * as yup from "yup";
import "./i18next";

yup.setLocale({
  mixed: {
    required: () => t("validation:required"),
  },
  string: {
    min: ({ min }) => t("validation:minStr", { value: min }),
    max: ({ max }) => t("validation:maxStr", { value: max }),
  },
  array: {
    min: ({ min }) => t("validation:minArr", { value: min }),
    max: ({ max }) => t("validation:maxArr", { value: max }),
  },
});
export default yup;
