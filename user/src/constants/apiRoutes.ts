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
  },
  CATEGORIES: {
    root: "categories",
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
