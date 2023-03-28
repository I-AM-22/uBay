export enum Gender {
  Male,
  Female,
}
//TODO don't use enums

export const GenderObj = { male: 0, female: 1 } as const;

type GenderKeys = keyof typeof GenderObj;
type GenderEnum = typeof GenderObj[GenderKeys];
