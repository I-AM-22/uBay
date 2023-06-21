import z from "lib/zod";
import { AdminActionBody } from "../api/type";

export const adminDefaultForm: AdminActionBody = {
  name: "",
  email: "",
  password: "",
};

export const adminAddSchema: z.ZodType<AdminActionBody> = z.object({
  name: z.string().nonempty(),
  email: z.string().email().nonempty(),
  password: z.string().trim().nonempty().min(8).max(16),
});
export const adminEditSchema: z.ZodType<AdminActionBody> = z.object({
  name: z.string().nonempty(),
  email: z.string().email().nonempty(),
  password: z.string().trim().nonempty().min(8).max(16),
});
