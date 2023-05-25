import { Box, Paper, Slide } from "@mui/material";
import { SignupForm } from "features/auth";
import { FC } from "react";
export type SignupProps = {};
export const SignupPage: FC<SignupProps> = ({}) => {
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
              width: { xs: "100vw", md: "50%" },
              height: { xs: "100vh", md: "100%" },
              background: { xs: "#fff9", md: "white" },
              mx: "auto",
              borderRadius: 2,
              overflow: "hidden",
              p: 3,
            }}
          >
            <SignupForm />
          </Paper>
        </Slide>
      </Box>
    </Box>
  );
};
