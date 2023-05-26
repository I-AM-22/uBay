import { FormPage } from "components/layout/FormPage";
import { ResetPasswordForm } from "features/auth";
import { FC } from "react";

export const ResetPasswordPage: FC<{}> = ({}) => {
  return (
    <FormPage>
      <ResetPasswordForm />
    </FormPage>
  );
};
