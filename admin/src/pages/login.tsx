import { Box, Paper, Slide } from "@mui/material";
import logo from "assets/img/logo.svg";
import { LoginForm } from "features/auth";

import { FC } from "react";
export const LoginPage: FC<{}> = ({}) => {
  return (
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
            <LoginForm />
          </Paper>
        </Slide>
      </Box>
    </Box>
  );
};
