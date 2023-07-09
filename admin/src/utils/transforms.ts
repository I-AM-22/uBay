export const objectToFormData = (object: { [k: string]: any }) => {
  const formData = new FormData();
  for (const key in object) {
    Array.isArray(object[key])
      ? object[key].forEach((value: string | Blob) => formData.append(key, value))
      : formData.append(key, object[key]);
  }
  return formData;
};
export const enumToStringArray = (_enum: any) => {
  return Object.values(_enum) as string[];
};
export const enumToNumberArray = (_enum: any) => {
  return Object.values(_enum).filter((e) => !isNaN(e as number)) as number[];
};
const intl = new Intl.DateTimeFormat("ar", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});
const intlWithTime = new Intl.DateTimeFormat("ar", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});
export const DateFormatter = (date: string | Date | undefined, { withTime = false } = {}) =>
  (withTime ? intlWithTime : intl).format(new Date(Date.parse((date ?? new Date()).toString())));

export const mapLink = (latitude: number, longitude: number, zoom?: number) =>
  `https://www.google.com/maps/@${latitude},${longitude},${zoom ?? "9"}z`;
