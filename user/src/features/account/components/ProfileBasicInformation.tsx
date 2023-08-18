import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Skeleton from "components/feedback/Skeleton";
import RouterLink from "components/links/RouterLink";
import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { accountQueries } from "..";
import { ProfilePhoto } from "./ProfilePhoto";
export type ProfileBasicInformationProps = {};
export const ProfileBasicInformation: FC<ProfileBasicInformationProps> = ({}) => {
  const query = accountQueries.useProfile();
  const { t } = useTranslation("account", { keyPrefix: "profile" });
  const isSmOrMore = useMediaQuery(useTheme().breakpoints.up("sm"));
  return (
    <Paper
      elevation={isSmOrMore ? 1 : 0}
      sx={{
        mx: "auto",
        width: { xs: 1, sm: 600 },
        mt: { xs: 0, sm: 4 },
        borderRadius: { xs: 0, sm: 4 },
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          height: 200,
          width: "140%",
          position: "absolute",
          right: "50%",
          transform: "translateX(50%)",
          borderRadius: "0 0 100% 100%",
          background: (th) =>
            `linear-gradient(0deg, ${th.palette.primary["700"]}, ${th.palette.primary["500"]})`,
        }}
      />
      <Stack
        sx={{
          width: "fit-content",
          mx: "auto",
          position: "relative",
          alignItems: "center",
          mt: "150px",
          borderRadius: "50%",
        }}
      >
        <ProfilePhoto
          sx={{
            width: 100,
            height: 100,
            border: (th) => `3px solid ${th.palette.background.paper}`,
          }}
        />
      </Stack>
      <Grid container spacing={1} sx={{ m: 2 }}>
        <GridItem label={t("name")} value={query.data?.name} skeleton={query.isInitialLoading} />
        <GridItem label={t("email")} value={query.data?.email} skeleton={query.isInitialLoading} />
        <GridItem
          label={t("createdAt")}
          value={query.isSuccess && new Date(query.data.createdAt).toLocaleDateString("ar")}
          skeleton={query.isInitialLoading}
        />
      </Grid>
      <Divider />
      <Stack sx={{ py: 1, px: 3, alignItems: { xs: "start", sm: "end" } }}>
        <IconButton component={RouterLink} to={"edit"} sx={{}}>
          <EditIcon />
        </IconButton>
      </Stack>
    </Paper>
  );
};

type GridItemProps = { label: ReactNode; value: ReactNode; skeleton: boolean };
const GridItem: FC<GridItemProps> = ({ label, value, skeleton }) => {
  return (
    <Grid component={Stack} sx={{ flexDirection: "column" }} item xs={12} sm={6}>
      <Typography variant="subtitle2" sx={{ color: "primary.main" }}>
        {label}
      </Typography>
      {skeleton ? (
        <Skeleton widthRange={{ min: 60, max: 70 }} />
      ) : (
        <Typography sx={{ fontSize: { xs: 12, sm: 16 } }}>{value}</Typography>
      )}
    </Grid>
  );
};
