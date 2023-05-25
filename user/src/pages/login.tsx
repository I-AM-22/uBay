import { Box, Paper, Slide } from "@mui/material";
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
        backgroundSize: { xs: 300, md: 1000 },
        position: "relative",
      }}
    >
      <Box
        sx={{
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          bgcolor: "primary.100",
        }}
      >
        <Slide in={true} direction="up" timeout={300}>
          <Paper
            sx={{
              width: { xs: "100vw", sm: "50%" },
              height: { xs: "100vh", sm: "100%" },
              background: { xs: "#fff9", sm: "white" },
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
