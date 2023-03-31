import NotFound from "components/feedback/NotFound";
import SomethingWentWrong from "components/feedback/SomethingWentWrong";
import { Login } from "features/auth";
import { lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  ScrollRestoration,
  useRouteError,
} from "react-router-dom";
const Layout = lazy(() => import("features/layout"));

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<WithScroll />} errorElement={<ErrorBoundary />}>
      <Route path="/login" element={<Login />} />
      {/* <Route element={<ProtectedRoute />}> */}
      <Route element={<Layout />}>
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
