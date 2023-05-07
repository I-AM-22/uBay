import NotFound from "components/feedback/NotFound";
import SomethingWentWrong from "components/feedback/SomethingWentWrong";
import { Login } from "features/auth";
import { AppBar, MobileNavigator } from "features/layout";
import {
  Outlet,
  Route,
  ScrollRestoration,
  createBrowserRouter,
  createRoutesFromElements,
  useRouteError,
} from "react-router-dom";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<WithScroll />} errorElement={<ErrorBoundary />}>
      <Route path="/login" element={<Login />} />
      {/* <Route element={<ProtectedRoute />}> */}
      <Route
        element={
          <>
            <AppBar />
            <Outlet />
            <MobileNavigator />
          </>
        }
      >
        <Route path="" element={<NotFound />} />
        <Route path="*" element={<SomethingWentWrong />} />
      </Route>
      {/* </Route> */}
    </Route>
  )
);
function ErrorBoundary() {
  const error = useRouteError() as string;
  return <div>{error}</div>;
}
function WithScroll() {
  return (
    <>
      <Outlet />
      <ScrollRestoration
        getKey={({ pathname, search }) => {
          return pathname + search;
        }}
      />
    </>
  );
}
