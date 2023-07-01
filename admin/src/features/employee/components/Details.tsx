import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import LabelValue from "components/typography/LabelValue";

import { Box, Grid, Stack } from "@mui/material";
import NoData from "components/feedback/NoData";
import DialogTitle from "components/forms/DialogTitle";
import DividedStack, { DividedStackProps } from "components/layout/DividedStack";
import LTR from "components/layout/LTR";
import { LoadingProvider } from "context/loadingContext";
import dayjs from "dayjs";
import useDetailsSearchParams from "hooks/useDetailsSearchParams";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { employeeQueries } from "..";
const dividedStackProps: DividedStackProps = {
  gap: 2,
  sx: {
    "& > * ": {
      flexBasis: { xs: "100%" },
      flexGrow: 1,
    },
    "& .label": {
      width: 0.3,
      minWidth: "fit-content",
    },
  },
};
export const Details: FC<{}> = ({}) => {
  const { t } = useTranslation("employee", { keyPrefix: "details" });
  const { id, isActive, clearDetailsParams } = useDetailsSearchParams();
  const { data, isInitialLoading, isSuccess, isError } = employeeQueries.useDetails(id);
  const handleClose = () => {
    clearDetailsParams();
  };
  return (
    <Dialog open={isActive} onClose={handleClose} fullWidth maxWidth={"sm"}>
      <DialogTitle onClose={handleClose} fontSize={25} color="primary">
        {t("title")}
      </DialogTitle>
      <DialogContent>
        {(isSuccess || isInitialLoading) && (
          <LoadingProvider value={isInitialLoading}>
            <Grid container mt={0} spacing={3} justifyContent={"center"} alignItems={"start"}>
              <Grid item container spacing={2} xs={8}>
                <DividedStack width={1} {...dividedStackProps}>
                  <LabelValue label={t("name")}>{data?.name}</LabelValue>
                  <LabelValue label={t("store")}> {data?.store.name}</LabelValue>
                  <LabelValue label={t("email")}> {data?.email}</LabelValue>
                  <LabelValue label={t("address")}> {data?.address}</LabelValue>
                  <LabelValue label={t("createdAt")} sx={{ flexBasis: { xs: "100%" } }}>
                    <LTR>{data && dayjs(data.createdAt).format("YYYY/MM/DD hh:mm A")}</LTR>
                  </LabelValue>
                </DividedStack>
              </Grid>
              <Grid item xs={12} md={4} sx={{ order: { xs: -1, md: 0 } }}>
                <Stack
                  sx={{
                    position: "relative",
                    width: { xs: 0.5, md: 1 },
                    mx: "auto",
                  }}
                >
                  <Box
                    component={"img"}
                    src={data?.photo}
                    sx={{
                      border: (th) => `3px solid ${th.palette.primary.main}`,
                      borderRadius: 2,
                      width: 1,
                      objectFit: "contain",
                      aspectRatio: "1",
                      path: { color: "grey.500" },
                    }}
                  />
                </Stack>
              </Grid>
            </Grid>
          </LoadingProvider>
        )}
        {isError && <NoData />}
      </DialogContent>
    </Dialog>
  );
};
