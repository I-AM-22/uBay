import AddIcon from "@mui/icons-material/Add";
import { Box, Fab, FabProps, Tooltip } from "@mui/material";
import { OptionalWrap } from "components/layout/OptionalWrap";
import { HideOnScroll } from "features/layout";
import { FC } from "react";
import { useTranslation } from "react-i18next";
type Props = FabProps & { hideOnScroll?: boolean };
const AddFab: FC<Props> = ({ hideOnScroll = false, ...props }) => {
  const { t } = useTranslation();
  return (
    <Tooltip title={t("add")}>
      <Box>
        <OptionalWrap Element={HideOnScroll} wrap={hideOnScroll} ElementProps={{}}>
          <Fab
            color="primary"
            sx={{
              position: "fixed",
              bottom: (th) => ({ xs: th.spacing(8), sm: 16 }),
              left: 16,
              zIndex: 1,
            }}
            {...props}
          >
            <AddIcon sx={{ color: "white" }} />
          </Fab>
        </OptionalWrap>
      </Box>
    </Tooltip>
  );
};
export default AddFab;
