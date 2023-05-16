import * as z from "zod";
import "./i18next";

//  ({
//   mixed: {
//     required: () => t("validation:required"),
//   },
//   string: {
//     min: ({ min }) => t("validation:minStr", { value: min }),
//     max: ({ max }) => t("validation:maxStr", { value: max }),
//   },
//   array: {
//     min: ({ min }) => t("validation:minArr", { value: min }),
//     max: ({ max }) => t("validation:maxArr", { value: max }),
//   },
// });
export default z;
