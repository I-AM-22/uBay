import { Box, Slide } from "@mui/material";
import BottomRightWavesIcon from "components/icons/BottomRightWavesIcon";
import { LoginForm } from "features/admin";

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
        bgcolor: "secondary.50",
        "&>svg:nth-of-type(1)": {
          position: "fixed",
          minHeight: "100vh",
          top: 0,
          right: 0,
          zIndex: 0,
        },
      }}
    >
      <BottomRightWavesIcon />
      <Slide in={true} direction="up" timeout={300}>
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: "min(80%,530px)",
            mx: "auto",
            mt: "32vh",
            ml: { xs: "auto", md: 44 },
          }}
        >
          <LoginForm />
        </Box>
      </Slide>
    </Box>
  );
};
