import { Box, Slide, Stack, Typography } from "@mui/material";
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
        "&>svg:nth-of-type(1)": {
          position: "fixed",
          minHeight: "100vh",
          scale: (th) => (th.direction === "rtl" ? "1" : "-1 1"),
          top: 0,
          right: 0,
          zIndex: 0,
        },
      }}
    >
      <BottomRightWavesIcon />
      <Stack
        direction={"row"}
        alignItems={"center"}
        gap={3}
        sx={{
          zIndex: 1,
          position: "absolute",
          top: { xs: 18, md: "3%", lg: "10%" },
          transform: { xs: "translateX(50%)", md: "none" },
          right: { xs: "50%", md: 100 },
        }}
      >
        <Typography color={"primary"} fontSize={72} mt={1} fontFamily={"cursive"}>
          <Typography color="text.primary" component={"span"} fontSize={84} fontFamily={"cursive"}>
            u
          </Typography>
          Bay
        </Typography>
        <Box component="img" src={"/logo.svg"} width={{ xs: 100, md: 200 }} />
      </Stack>
      <Slide in={true} direction="right" timeout={300}>
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            width: "min(80%,530px)",
            mx: "auto",
            mt: "32vh",
            ml: { xs: "auto", md: 10, lg: 44 },
          }}
        >
          <LoginForm />
        </Box>
      </Slide>
    </Box>
  );
};
