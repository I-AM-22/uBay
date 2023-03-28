import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Checkbox, FormControlLabel, Paper, Slide, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import logo from "assets/img/logo.svg";
import Submit from "components/buttons/Submit";
import PasswordInput from "components/Inputs/PasswordInput";
import UsernameInput from "components/Inputs/UsernameInput";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { AccountLoginBody } from "../../api/type";
import loginSchema, { loginDefault } from "./validation";
export const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<AccountLoginBody>({
    resolver: yupResolver(loginSchema),
    defaultValues: loginDefault,
  });

  const { t, i18n } = useTranslation("auth");

  const onSubmit = async (data: AccountLoginBody) => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          minHeight: "100vh",
          boxSizing: "border-box",
          width: "100vw",
          overflow: "hidden",
          background: `url(${logo}) no-repeat 100% 90%`,
          backgroundSize: { xs: 300, md: 1000 },
          bgcolor: "primary.50",
        }}
      >
        <Box
          sx={{
            minHeight: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backdropFilter: "blur(10px)",
          }}
        >
          <Box component={"img"} width={200} position="absolute" top={10} left={10} src={logo} />
          <Slide in={true} direction="up" timeout={300}>
            <Paper
              sx={{
                width: { xs: "90vw", sm: "50%" },
                height: { xs: "70vh", sm: "100%" },

                mx: "auto",
                borderRadius: 2,
                overflow: "hidden",
                p: 3,
              }}
            >
              <Stack gap={8}>
                <Typography color="primary" variant="h4" textAlign={"center"}>
                  {t("login.title")}
                </Typography>
                <Stack gap={2} width="80%" mx="auto">
                  <UsernameInput control={control} name="username" />
                  <PasswordInput control={control} name="password" />
                  <FormControlLabel
                    sx={{ mx: 2, width: "fit-content" }}
                    control={<Checkbox />}
                    label={t`login.remember`}
                  />
                  <Box m="auto" width="fit-content">
                    <Submit sx={{ px: 5 }} isSubmitting={isSubmitting}>{t`login.submit`}</Submit>
                  </Box>
                </Stack>
              </Stack>
            </Paper>
          </Slide>
        </Box>
      </Box>
    </form>
  );
};
export default Login;
