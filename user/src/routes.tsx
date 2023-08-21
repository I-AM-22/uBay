import SomethingWentWrong from "components/feedback/SomethingWentWrong";
import AuthenticatedRoute from "components/routes/AuthenticatedRoute";
import NotAuthenticatedRoute from "components/routes/NotAuthenticatedRoute";
import { RemoveTrailingSlash } from "components/routes/RemoveTrailingSlash";
import { Chat, Conversation } from "features/chat";
import { AppBar, MobileNavigator } from "features/layout";
import { HomePage } from "pages";
import { ForgotPasswordPage } from "pages/forgot-password";
import { LoginPage } from "pages/login";
import { PostPage } from "pages/posts/[id]";
import { PostEditPage } from "pages/posts/[id]/edit";
import { PostNewPage } from "pages/posts/new";
import { RegistrationPage } from "pages/registration";
import { ResetPasswordPage } from "pages/reset-password";
import { SettingsPage } from "pages/settings";
import { PasswordChangePage } from "pages/settings/password-change";
import { PasswordForgotPage } from "pages/settings/password-forgot";
import { ProfilePage } from "pages/settings/profile";
import { ProfileEditPage } from "pages/settings/profile/edit";
import { SignupPage } from "pages/signup";
import TransactionsPage from "pages/transactions";
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
          <Route path="" element={<HomePage />} />
          <Route path="posts/new" element={<PostNewPage />} />
          <Route path="posts/:id" element={<PostPage />} />
          <Route path="posts/:id/edit" element={<PostEditPage />} />
          <Route path="transactions" element={<TransactionsPage />} />
          <Route path="settings/profile" element={<ProfilePage />} />
          <Route path="settings/profile/edit" element={<ProfileEditPage />} />
          <Route path="settings/password-change" element={<PasswordChangePage />} />
          <Route path="settings/password-forgot" element={<PasswordForgotPage />} />
          <Route path="settings/*" element={<SettingsPage />} />
          <Route path="chats" element={<Chat />} />
          <Route path="chats/:id" element={<Conversation />} />
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
      <RemoveTrailingSlash />
      <Outlet />
      <ScrollRestoration
        getKey={({ pathname, search }) => {
          return pathname + search;
        }}
      />
    </>
  );
}
