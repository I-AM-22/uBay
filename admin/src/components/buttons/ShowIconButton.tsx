import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton, IconButtonProps, Tooltip } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
type Props = IconButtonProps;
const ShowIconButton: FC<Props> = (props) => {
  const { t } = useTranslation("user");
  return (
    <Tooltip title={t("details.title")}>
      <IconButton {...props}>
        <VisibilityIcon sx={{ color: "grey.700" }} />
      </IconButton>
    </Tooltip>
  );
};
export default ShowIconButton;
