import NotFound from "components/feedback/NotFound";
import SomethingWentWrong from "components/feedback/SomethingWentWrong";
import AuthenticatedRoute from "components/routes/AuthenticatedRoute";
import NotAuthenticatedRoute from "components/routes/NotAuthenticatedRoute";
import { LoginForm, SignupForm } from "features/auth";
import { AppBar, MobileNavigator } from "features/layout";
import { ProfilePage } from "pages/profile";
import { RegistrationPage } from "pages/registration";
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
      <Route element={<NotAuthenticatedRoute />}>
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignupForm />} />
      </Route>
      <Route element={<AuthenticatedRoute />}>
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
          <Route path="profile/*" element={<ProfilePage />} />
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
