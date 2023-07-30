import SomethingWentWrong from "components/feedback/SomethingWentWrong";
import AuthenticatedRoute from "components/routes/AuthenticatedRoute";
import NotAuthenticatedRoute from "components/routes/NotAuthenticatedRoute";
import HomePage from "pages";
import { AdminsPage } from "pages/admins";
import { CategoriesPage } from "pages/categories";
import { CitiesPage } from "pages/cities";
import { EmployeesPage } from "pages/employees";
import { LoginPage } from "pages/login";
import { UsersPage } from "pages/users";
import { WarehousedPage } from "pages/warehouses";
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
      <Route element={<NotAuthenticatedRoute />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route element={<AuthenticatedRoute />}>
        <Route element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="admins" element={<AdminsPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="cities" element={<CitiesPage />} />
          <Route path="warehouses" element={<WarehousedPage />} />
          <Route path="employees" element={<EmployeesPage />} />
          <Route path="*" element={<SomethingWentWrong />} />
        </Route>
      </Route>
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
