import { Box, Button, List, ListItem, Paper, Slide, Stack, Typography } from "@mui/material";
import RouterLink from "components/links/RouterLink";
import themeConstants from "constants/themeConstants";
import { FC } from "react";
import { useTranslation } from "react-i18next";
export const RegistrationPage: FC<{}> = ({}) => {
  const { t } = useTranslation("auth", { keyPrefix: "registration" });
  return (
    <Box
      sx={{
        minHeight: "100vh",
        boxSizing: "border-box",
        width: "100vw",
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
          overflow: "auto",
        }}
      >
        <Slide in={true} direction="down" timeout={300}>
          <Paper
            elevation={2}
            sx={{
              width: { xs: "100vw", sm: "75%", md: "60%" },
              height: { xs: "100vh", sm: "50vh" },
              bgcolor: { xs: "transparent", sm: "white" },
              mx: "auto",
              borderRadius: { xs: 0, sm: 3 },
              overflow: { xs: "auto", sm: "hidden" },
            }}
          >
            <Stack
              sx={{
                flexDirection: { xs: "column", sm: "row" },
                height: "100%",
                overflow: { xs: "auto", sm: "hidden" },
              }}
            >
              <Box
                component="img"
                src={"images/registration.png"}
                sx={{
                  borderRadius: themeConstants.borderRadius,
                  width: { xs: "100%", sm: "40%" },
                  aspectRatio: { xs: "1", sm: "1" },
                  objectFit: "cover",
                  objectPosition: "30% 40%",
                }}
              />
              <Stack sx={{ alignItems: "center", flex: 1, py: 2, gap: 3 }}>
                <Stack alignItems={"center"}>
                  <Typography variant="h3" color="primary.900">
                    {t("title")}
                  </Typography>
                  <Typography variant="body1">{t("subtitle")}</Typography>
                </Stack>
                <List sx={{ width: "90%", fontSize: 11 }} dense>
                  {[...Array(3)].map((_, index) => (
                    <ListItem sx={{ display: "list-item", listStyle: "inside" }} key={index}>
                      {t(`list.${index}`)}
                    </ListItem>
                  ))}
                </List>
                <Box
                  sx={{
                    borderRadius: themeConstants.borderRadius,
                    bgcolor: "primary.50",
                    mt: "auto",
                    mb: 5,

                    ".MuiLink-root": {
                      fontSize: { xs: 14, sm: 16, md: 17 },
                      textDecoration: "none",
                      py: 1,
                    },
                  }}
                >
                  <Button
                    component={RouterLink}
                    size="large"
                    to="/signup"
                    sx={{
                      bgcolor: "primary.main",
                      color: "white",
                      mr: -2,
                      px: 2,
                      zIndex: 1,
                      "&:hover, &:focus": {
                        bgcolor: "secondary.main",
                        color: "white",
                      },
                    }}
                  >
                    {t("signup")}
                  </Button>
                  <Button
                    component={RouterLink}
                    size="large"
                    to="/login"
                    sx={{
                      color: "primary.900",
                      px: 2,
                      pl: 3,
                      borderRadius: `0 ${themeConstants.borderRadius} ${themeConstants.borderRadius}  0`,
                    }}
                  >
                    {t("login")}
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Paper>
        </Slide>
      </Box>
    </Box>
  );
};
