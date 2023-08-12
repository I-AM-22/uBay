let API_ROUTES = {
  USERS: {
    root: "users",
    SIGNUP: "signup",
    LOGIN: "login",
    FORGOT_PASSWORD: "forgotPassword",
    RESET_PASSWORD: "resetPassword",
    UPDATE_MY_PASSWORD: "updateMyPassword",
    ME: "me",
  },
  PRODUCTS: {
    root: "products",
    POST: "",
    GET_ALL: "",
    GET: (id: string) => id,
    EDIT: (id: string) => id,
    DELETE: (id: string) => id,
    LIKE: (id: string) => `${id}/likes`,
    UNLIKE: (id: string) => `${id}/likes`,
    COMMENTS: (id: string) => `${id}/comments`,
    MINE: "mine",
  },
  COUPON: {
    root: "coupons",
    CREATE: "",
    BY_PRODUCT: (id: string) => `${id}/coupons`,
    GET_ALL: "myCoupons",
    GET: (id: string) => id,
    EDIT: (id: string) => id,
    DELETE: (id: string) => id,
  },
  COMMENTS: {
    root: "comments",
    POST: "",
    GET_ALL: "",
    GET: (id: string) => id,
    EDIT: (id: string) => id,
    DELETE: (id: string) => id,
  },
  PAYMENTS: {
    root: "payments",
    POST: "",
    GET: (id: string) => id,
  },
  CATEGORIES: {
    root: "categories",
    GET_ALL: "",
  },
  DELIVERIES: {
    root: "deliveries",
    GENERATE_QR_FOR_SELLER: "generateQrForSeller",
    GENERATE_QR_FOR_CUSTOMER: "generateQrForCustomer",
  },
  STORES: {
    root: "/stores",
    GET_ALL: "",
  },
} as const;

const controllersArr = Object.entries(API_ROUTES).map(([controllerKey, { root, ...routes }]) => {
  const routesArr = Object.entries(routes);
  const routesPrefixed = Object.fromEntries(
    routesArr.map(([routeKey, route]) => {
      if (typeof route === "function") {
        return [routeKey, (...params: Parameters<typeof route>) => `${root}/${route(...params)}`];
      }
      return [routeKey, `${root}/${route}`];
    })
  );
  return [controllerKey, { ...routesPrefixed, root }];
});
API_ROUTES = Object.fromEntries(controllersArr) as typeof API_ROUTES;

export default API_ROUTES;
