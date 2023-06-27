import { passwordRegex, phoneNumberRegex } from "constants/regex";
import i18n from "lib/i18next";
import z from "lib/zod";
export const nameSchema = z.string().trim().nonempty();

export const phoneNumberSchema = z
  .string()
  .trim()
  .nonempty()
  .regex(phoneNumberRegex, i18n.t(`auth:validation.phoneNumber`));

export const emailSchema = z.string().trim().nonempty().email();

export const passwordSchema = z
  .string()
  .nonempty()
  .trim()
  .regex(passwordRegex, i18n.t(`auth:validation.password`))
  .min(8)
  .max(16);
