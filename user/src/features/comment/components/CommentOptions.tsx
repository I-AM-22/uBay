import DeleteIcon from "@mui/icons-material/Delete";
import DiscountIcon from "@mui/icons-material/Discount";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import { useQueryClient } from "@tanstack/react-query";
import Loading from "components/feedback/Loading";
import { Dropdown } from "components/selects/Dropdown";
import { useSnackbar } from "context/snackbarContext";
import { useIsMe } from "features/account";
import { queryStore } from "features/shared";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { parseResponseError } from "utils/apiHelpers";
import { Comment, commentQueries } from "..";
export type CommentOptionsProps = {
  showDiscount: boolean;
  comment: Comment;
  onRemove?: () => void;
  onEdit: () => void;
  onDiscount: () => void;
};
export const CommentOptions: FC<CommentOptionsProps> = ({
  comment,
  showDiscount,
  onDiscount,
  onRemove,
  onEdit,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMe = useIsMe(comment.user._id);
  const { t } = useTranslation();
  const removeComment = commentQueries.useRemove();
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();
  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleRemove = () => {
    removeComment.mutate(comment._id, {
      onSuccess: () => {
        queryClient.invalidateQueries(queryStore.comment.all._def);
        queryClient.removeQueries(queryStore.comment.detail(comment._id));
        handleClose();
        onRemove?.();
      },
      onError: parseResponseError({ snackbar }),
    });
  };
  const handleEdit = () => {
    onEdit();
    handleClose();
  };
  const handleDiscount = () => {
    onDiscount();
    handleClose();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return isMe || showDiscount ? (
    <>
      <IconButton onClick={handleOpen}>
        <MoreVertIcon />
      </IconButton>
      <Dropdown anchor={anchorEl} onClose={handleClose}>
        {isMe && (
          <MenuItem onClick={handleEdit}>
            <EditIcon />
            {t("edit")}
          </MenuItem>
        )}
        {isMe && (
          <MenuItem onClick={handleRemove}>
            {removeComment.isLoading ? <Loading size={15} mr={2} /> : <DeleteIcon />}
            {t("remove")}
          </MenuItem>
        )}

        <Divider sx={{ "&.MuiDivider-root": { my: 0 } }} />
        {showDiscount && (
          <MenuItem onClick={handleDiscount}>
            <DiscountIcon />
            {t("discount:discountForUser")}
          </MenuItem>
        )}
      </Dropdown>
    </>
  ) : (
    <></>
  );
};
