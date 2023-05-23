import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Checkbox, FormControlLabel, Paper, Slide, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import logo from "assets/img/logo.svg";
import Submit from "components/buttons/Submit";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { UserLoginBody } from "../../api/type";
import loginSchema, { loginDefault } from "./validation";
import EmailInput from "features/auth/EmailInput";
import PasswordInput from "components/Inputs/PasswordInput";
import { authQueries } from "features/auth";
import { storage } from "utils/storage";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const {
    control,
    handleSubmit,
  } = useForm<UserLoginBody>({
    resolver: zodResolver(loginSchema),
    defaultValues: loginDefault,
  });

  const { t } = useTranslation("auth");
  const navigate = useNavigate()
  const login = authQueries.useLogin()
  const onSubmit = async (data: UserLoginBody) => {
    login.mutate(data, {
      onSuccess: (data) => {
        storage.setToken(data.token);
        navigate("/");
      },
      onError: (err) => {
        console.log(err);
      },
    })
  };
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
                  <EmailInput control={control} name="email" />
                  <PasswordInput control={control} name="password" />
                  <Box m="auto" width="fit-content">
                    <Submit sx={{ px: 5 }} isSubmitting={login.isLoading}>{t`login.submit`}</Submit>
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
