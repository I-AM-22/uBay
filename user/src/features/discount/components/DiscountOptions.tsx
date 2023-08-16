import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useQueryClient } from "@tanstack/react-query";
import Loading from "components/feedback/Loading";
import { Dropdown } from "components/selects/Dropdown";
import { useSnackbar } from "context/snackbarContext";
import { queryStore } from "features/shared";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { parseResponseError } from "utils/apiHelpers";
import { DiscountProduct, discountQueries } from "..";
export type CommentOptionsProps = {
  discount: DiscountProduct;
  onRemove?: () => void;
};
export const DiscountOptions: FC<CommentOptionsProps> = ({ discount, onRemove }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { t } = useTranslation();
  const removeDiscount = discountQueries.useRemove();
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();
  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleRemove = () => {
    removeDiscount.mutate(discount._id, {
      onSuccess: () => {
        queryClient.invalidateQueries(queryStore.discount.byProduct(discount.product._id));
        handleClose();
        onRemove?.();
      },
      onError: parseResponseError({ snackbar }),
    });
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton onClick={handleOpen}>
        <MoreVertIcon />
      </IconButton>
      <Dropdown anchor={anchorEl} onClose={handleClose}>
        <MenuItem onClick={handleRemove}>
          {removeDiscount.isLoading ? <Loading size={15} mr={2} /> : <DeleteIcon />}
          {t("remove")}
        </MenuItem>
      </Dropdown>
    </>
  );
};
