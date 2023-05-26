import { FormPage } from "components/layout/FormPage";
import { ForgotPasswordForm } from "features/auth";
import { FC } from "react";

export const ForgotPasswordPage: FC<{}> = ({}) => {
  return (
    <FormPage>
      <ForgotPasswordForm />
    </FormPage>
  );
};
