import NotFound from "components/feedback/NotFound";
import SomethingWentWrong from "components/feedback/SomethingWentWrong";
import AuthenticatedRoute from "components/routes/AuthenticatedRoute";
import NotAuthenticatedRoute from "components/routes/NotAuthenticatedRoute";
import { AppBar, MobileNavigator } from "features/layout";
import { ForgotPasswordPage } from "pages/forgot-password";
import { LoginPage } from "pages/login";
import { RegistrationPage } from "pages/registration";
import { ResetPasswordPage } from "pages/reset-password";
import { SettingsPage } from "pages/settings";
import { ProfilePage } from "pages/settings/profile";
import { ProfileEditPage } from "pages/settings/profile/edit";
import { SignupPage } from "pages/signup";
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
        <Route path="signup" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
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
          <Route path="settings/profile" element={<ProfilePage />} />
          <Route path="settings/profile/edit" element={<ProfileEditPage />} />
          <Route path="settings/*" element={<SettingsPage />} />
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
