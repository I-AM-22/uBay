import NotFound from "components/feedback/NotFound";
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
const Layout = lazy(() => import("features/layout/components/Layout"));
const Test = lazy(() => import("components/feedback/SomethingWentWrong"));

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<WithScroll />} errorElement={<ErrorBoundary />}>
      <Route path="/login" element={<Login />} />
      {/* <Route element={<ProtectedRoute />}> */}
      <Route element={<Layout />}>
        <Route path="" element={<NotFound />} />
        <Route path="*" element={<Test />} />
      </Route>
      {/* </Route> */}
    </Route>
  )
);
function ErrorBoundary() {
  const error = useRouteError() as any;
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
