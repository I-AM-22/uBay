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
} as const;

const controllersArr = Object.entries(API_ROUTES).map(([controllerKey, { root, ...routes }]) => {
  const routesArr = Object.entries(routes);
  const routesPrefixed = Object.fromEntries(
    routesArr.map(([routeKey, route]) => [routeKey, `${root}/${route}`])
  );
  return [controllerKey, { ...routesPrefixed, root }];
});
API_ROUTES = Object.fromEntries(controllersArr) as typeof API_ROUTES;

export default API_ROUTES;
