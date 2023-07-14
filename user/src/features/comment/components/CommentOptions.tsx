import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FlagIcon from "@mui/icons-material/Flag";
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
export type CommentOptionsProps = { comment: Comment; onCommentRemove?: () => void };
export const CommentOptions: FC<CommentOptionsProps> = ({ comment, onCommentRemove }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMe = useIsMe(comment.user.id);
  const { t } = useTranslation();
  const editComment = commentQueries.useEdit();
  const removeComment = commentQueries.useRemove();
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();
  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleRemove = () => {
    removeComment.mutate(comment.id, {
      onSuccess: () => {
        queryClient.invalidateQueries(queryStore.comment.all._def);
        queryClient.removeQueries(queryStore.comment.detail(comment.id));
        handleClose();
        onCommentRemove?.();
      },
      onError: parseResponseError({ snackbar }),
    });
  };
  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/posts/${comment.id}/comments/${comment.id}`)
      .then(
        () => {
          snackbar({ message: t("copyToClipboard.success"), severity: "success" });
        },
        (err) => {
          snackbar({ message: t("copyToClipboard.error"), severity: "error" });
          console.error(err);
        }
      );
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
        {isMe && (
          <MenuItem onClick={handleClose}>
            {editComment.isLoading ? <Loading size={15} /> : <EditIcon />}
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

        <MenuItem onClick={handleCopyToClipboard}>
          <ContentCopyIcon />
          {t("copyLink")}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <FlagIcon />
          {t("report")}
        </MenuItem>
      </Dropdown>
    </>
  );
};
