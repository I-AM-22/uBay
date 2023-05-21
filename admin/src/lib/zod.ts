import { t } from "i18next";
import "./i18next";
import { z } from "zod";
import { string } from "yup";

z.object<any>({
    // name:z.string().min(1),
    // password:z.string().min(8).max(16),
    mixed: {
        required: () => t("validation:required"),
    },
    string: {
        min: ({ min }: any) => t("validation:minStr", { value: min }),
        max: ({ max }: any) => t("validation:maxStr", { value: max }),
    },
    array: {
        min: ({ min }: any) => t("validation:minArr", { value: min }),
        max: ({ max }: any) => t("validation:maxArr", { value: max }),
    },
});
export default z;
