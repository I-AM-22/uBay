import AddIcon from "@mui/icons-material/Add";
import { Fab, FabProps, Tooltip } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
type Props = FabProps;
const AddFab: FC<Props> = (props) => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const handleClick = () => {
    searchParams.set("mode", "add");
    setSearchParams(searchParams);
  };
  return (
    <Tooltip title={t("add")}>
      <Fab
        color="primary"
        onClick={handleClick}
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        {...props}
      >
        <AddIcon sx={{ color: "white" }} />
      </Fab>
    </Tooltip>
  );
};
export default AddFab;
