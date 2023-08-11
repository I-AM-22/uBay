import { Box, Paper, Slide } from "@mui/material";
import { FC, ReactNode } from "react";
export type FormPageProps = { children: ReactNode };
export const FormPage: FC<FormPageProps> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        overflow: "hidden",
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
          overflow: { xs: "hidden", md: "auto" },
          bgcolor: "primary.50",
        }}
      >
        <Slide in={true} direction="up" timeout={300}>
          <Paper
            sx={{
              overflow: { xs: "auto", md: "hidden" },
              width: { xs: "100vw", md: "50%" },
              minHeight: "fit-content",
              height: { xs: "100vh", md: "100%" },
              background: { xs: "#fff9", md: "white" },
              mx: "auto",
              borderRadius: { xs: 0, md: 2 },
              p: 3,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {children}
          </Paper>
        </Slide>
      </Box>
    </Box>
  );
};
