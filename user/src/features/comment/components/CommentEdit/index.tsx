import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Stack } from "@mui/material";
import { InfiniteData, useQueryClient } from "@tanstack/react-query";
import TextField from "components/Inputs/TextField";
import Submit from "components/buttons/Submit";
import { useSnackbar } from "context/snackbarContext";
import { Comment, CommentBody, commentQueries } from "features/comment";
import { queryStore } from "features/shared";
import z from "lib/zod";
import { FC, useRef } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { APIList } from "types/api";
import { parseResponseError } from "utils/apiHelpers";
import commentSchema from "../CommentForm/validation";
export type CommentEditProps = { comment: Comment; onDone: () => void };
export const CommentEdit: FC<CommentEditProps> = ({ comment, onDone }) => {
  const { control, handleSubmit, setError } = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: comment,
  });
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const editComment = commentQueries.useEdit();
  const snackbar = useSnackbar();
  const onSubmit = async (form: CommentBody) => {
    if (form.content === "") return;
    editComment.mutate(
      { _id: comment._id, ...form },
      {
        onSuccess: (comment) => {
          onDone();
          queryClient.setQueryData(queryStore.comment.detail(comment._id).queryKey, editComment);
          queryClient.setQueryData(
            queryStore.comment.all({ postId: comment.product }).queryKey,
            (comments: InfiniteData<APIList<Comment>> | undefined) => {
              if (comments) {
                const pages = comments.pages.map((page) => {
                  const data = page.data.map((old) => {
                    if (comment._id === old._id) return comment;
                    return old;
                  });
                  return { ...page, data };
                });

                return {
                  ...comments,
                  pages,
                };
              }
            }
          );
          queryClient.invalidateQueries(
            queryStore.comment.all({ postId: comment.product }).queryKey
          );
        },
        onError: parseResponseError({ setFormError: setError, snackbar }),
      }
    );
  };
  return (
    <Box component={"form"} onSubmit={handleSubmit(onSubmit)} sx={{ bgcolor: "white", width: 1 }}>
      <Stack
        gap={1}
        sx={{
          p: 1,
        }}
      >
        <TextField
          name="content"
          sx={{
            ".MuiInputBase-root": { bgcolor: "transparent", border: "none" },
            fieldset: { borderWidth: 1, borderRadius: 1 },
          }}
          size="small"
          control={control}
          onKeyDown={(event) => {
            if (event.key == "Enter" && !event.shiftKey) {
              event.preventDefault();
              submitRef.current?.click();
            }
          }}
          multiline
          maxRows={10}
        />
        <Stack direction={"row"} gap={1} justifyContent={"end"}>
          <Submit
            sx={{ borderRadius: 2 }}
            loadingSize={14}
            size="small"
            ref={submitRef}
            isSubmitting={editComment.isLoading}
          >
            {t("submit")}
          </Submit>
          <Button
            onClick={onDone}
            variant="outlined"
            sx={{ borderRadius: 2 }}
            color="error"
            type="button"
          >
            {t("cancel")}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
