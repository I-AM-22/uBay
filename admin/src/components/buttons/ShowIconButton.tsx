import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton, IconButtonProps, Tooltip } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
type Props = IconButtonProps;
const ShowIconButton: FC<Props> = (props) => {
  const { t } = useTranslation();
  return (
    <Tooltip title={t("details")}>
      <IconButton {...props}>
        <VisibilityIcon sx={{ color: "primary" }} />
      </IconButton>
    </Tooltip>
  );
};
export default ShowIconButton;
