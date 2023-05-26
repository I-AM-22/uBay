import { passwordRegex } from "constants/regex";
import i18n from "lib/i18next";
import z from "lib/zod";

export const emailSchema = z.string().trim().nonempty().email();
export const passwordSchema = z
  .string()
  .nonempty()
  .regex(passwordRegex, i18n.t(`auth:validation.password`))
  .min(6);
