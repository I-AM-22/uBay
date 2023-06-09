import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, IconButtonProps, Tooltip } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
type Props = IconButtonProps;
const RemoveIconButton: FC<Props> = (props) => {
  const { t } = useTranslation();
  return (
    <Tooltip title={t("remove")}>
      <IconButton {...props}>
        <DeleteIcon sx={{ color: "error.main" }} />
      </IconButton>
    </Tooltip>
  );
};
export default RemoveIconButton;
