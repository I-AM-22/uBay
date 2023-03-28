let API_ROUTES = {
  REGISTRATION: {
    root: "Authentication",
    REGISTER: "Register",
    LOGIN: "Login",
    LOGOUT: "Logout",
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
