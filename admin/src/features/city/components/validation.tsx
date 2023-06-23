import z from "lib/zod";
import { CityAction } from "../api/type";

export const cityDefaultForm: CityAction = {
  name: "",
};

export const citySchema: z.ZodType<CityAction> = z.object({
  name: z.string().nonempty(),
});
