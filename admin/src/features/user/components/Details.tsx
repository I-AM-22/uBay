import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DividedStack, { DividedStackProps } from "components/layout/DividedStack";
import LabelValue from "components/typography/LabelValue";

import { Stack } from "@mui/material";
import NoData from "components/feedback/NoData";
import DialogTitle from "components/forms/DialogTitle";
import { UserAvatar } from "components/icons/UserAvatar";
import LTR from "components/layout/LTR";
import { LoadingProvider } from "context/loadingContext";
import dayjs from "dayjs";
import useDetailsSearchParams from "hooks/useDetailsSearchParams";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { userQueries } from "..";
const dividedStackProps: DividedStackProps = {
  gap: 2,
  sx: {
    "& > * ": {
      flexBasis: { xs: "100%" },
      flexGrow: 1,
    },
    "& .label": {
      width: 0.4,
      minWidth: "fit-content",
    },
  },
};
type Props = {};
export const Details: FC<Props> = ({}) => {
  const { t } = useTranslation("user", { keyPrefix: "details" });
  const { id, isActive, clearDetailsParams } = useDetailsSearchParams();
  const { data, isInitialLoading, isSuccess, isError } = userQueries.useDetails(id);
  const handleClose = () => {
    clearDetailsParams();
  };
  return (
    <Dialog open={isActive} onClose={handleClose} fullWidth maxWidth={"xs"}>
      <DialogTitle onClose={handleClose} pb={4} fontSize={25} color="primary">
        {t("title")}
      </DialogTitle>
      <DialogContent>
        {(isSuccess || isInitialLoading) && (
          <LoadingProvider value={isInitialLoading}>
            <Stack gap={2} alignItems={"center"}>
              <UserAvatar src={data?.photo} sx={{ width: 100, height: 100 }} />
              <DividedStack width={1} {...dividedStackProps}>
                <LabelValue label={t("name")} sx={{ flexBasis: { xs: "100%" } }}>
                  {data?.name}
                </LabelValue>
                <LabelValue label={t("email")} sx={{ flexBasis: { xs: "100%" } }}>
                  {data?.email}
                </LabelValue>
                <LabelValue label={t("createdAt")} sx={{ flexBasis: { xs: "100%" } }}>
                  <LTR>{data && dayjs(data.createdAt).format("YYYY/MM/DD hh:mm A")}</LTR>
                </LabelValue>
                <LabelValue label={t("passwordChangedAt")} ltr>
                  <LTR>{data && dayjs(data.passwordChangedAt).format("YYYY/MM/DD hh:mm A")}</LTR>
                </LabelValue>
              </DividedStack>
            </Stack>
          </LoadingProvider>
        )}
        {isError && <NoData />}
      </DialogContent>
    </Dialog>
  );
};
