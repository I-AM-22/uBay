import dayjs from "dayjs";

export const data = [
  {
    day: dayjs().format("MM/DD"),
    products: 342,
    soldProducts: 123,
    comments: 132,
  },
  {
    day: dayjs().subtract(1, "day").format("MM/DD"),
    products: 32,
    soldProducts: 23,
    comments: 312,
  },
  {
    day: dayjs().subtract(2, "day").format("MM/DD"),
    products: 132,
    soldProducts: 43,
    comments: 368,
  },
  {
    day: dayjs().subtract(3, "day").format("MM/DD"),
    products: 245,
    soldProducts: 346,
    comments: 31,
  },
  {
    day: dayjs().subtract(4, "day").format("MM/DD"),
    products: 124,
    soldProducts: 211,
    comments: 74,
  },
  {
    day: dayjs().subtract(5, "day").format("MM/DD"),
    products: 213,
    soldProducts: 223,
    comments: 354,
  },
  {
    day: dayjs().subtract(6, "day").format("MM/DD"),
    products: 243,
    soldProducts: 300,
    comments: 108,
  },
];
