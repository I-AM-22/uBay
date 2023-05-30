import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import { Paper, Slide, Stack, Typography } from "@mui/material";
import Submit from "components/buttons/Submit";
import { useSnackbar } from "context/snackbarContext";
import { accountQueries } from "features/account";
import { ResetPasswordForm, authQueries } from "features/auth";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { parseResponseError } from "utils/apiHelpers";
export const PasswordForgotPage: FC<{}> = ({}) => {
  const [step, setStep] = useState(1);
  const { t } = useTranslation("auth", { keyPrefix: "forgotPasswordAuthed" });
  const query = accountQueries.useProfile();
  const forgot = authQueries.useForgotPassword();
  const snackbar = useSnackbar();
  const handleForgot = () => {
    if (query.isSuccess) {
      forgot.mutate(
        { email: query.data.email },
        {
          onSuccess: () => {
            setStep(2);
          },
          onError: parseResponseError({ snackbar }),
        }
      );
    }
  };
  return (
    <>
      {step === 1 && (
        <Slide in={true} direction="left">
          <Paper
            sx={{
              flex: { xs: 1, sm: 0 },
              width: { xs: 1, sm: 400, md: 600 },
              mt: { xs: 0, sm: 10 },
              py: 3,
              px: { xs: 1, sm: 5 },
              mx: "auto",
              minHeight: 200,
              gap: 2,
            }}
            component={Stack}
          >
            <Typography
              color="primary.900"
              variant="h5"
              sx={{ textAlign: { xs: "start", sm: "center" } }}
            >
              {t("title1")}
            </Typography>
            {query.isSuccess && (
              <>
                <Typography variant="subtitle1" textAlign={"center"}>
                  {t("subtitle1", { email: query.data?.email })}
                </Typography>
                <Submit
                  onClick={handleForgot}
                  isSubmitting={forgot.isLoading}
                  variant="contained"
                  size="large"
                  sx={{ mt: 3, mx: "auto", alignSelf: "center" }}
                  endIcon={<ForwardToInboxIcon sx={{ color: "white" }} />}
                >
                  {t("send")}
                </Submit>
              </>
            )}
          </Paper>
        </Slide>
      )}
      {step === 2 && (
        <Slide in={true} direction="right">
          <Paper
            sx={{
              flex: { xs: 1, sm: 0 },
              width: { xs: 1, sm: 500, md: 600 },
              mt: { xs: 0, sm: 10 },
              py: 3,
              px: { xs: 1, sm: 5 },
              mx: "auto",
              minHeight: 200,
              gap: 2,
            }}
            component={Stack}
          >
            <ResetPasswordForm navToOnSuccess="/settings" />
          </Paper>
        </Slide>
      )}
    </>
  );
};
