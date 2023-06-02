import EditIcon from "@mui/icons-material/Edit";
import { IconButton, IconButtonProps, Tooltip } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
type Props = IconButtonProps;
const EditIconButton: FC<Props> = (props) => {
  const { t } = useTranslation();
  return (
    <Tooltip title={t("edit")}>
      <IconButton {...props}>
        <EditIcon sx={{ color: "warning.main" }} />
      </IconButton>
    </Tooltip>
  );
};
export default EditIconButton;
