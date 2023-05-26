import { FormPage } from "components/layout/FormPage";
import { SignupForm } from "features/auth";
import { FC } from "react";
export type SignupProps = {};
export const SignupPage: FC<SignupProps> = ({}) => {
  return (
    <FormPage>
      <SignupForm />
    </FormPage>
  );
};
