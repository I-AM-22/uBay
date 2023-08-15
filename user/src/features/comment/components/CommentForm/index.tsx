import { zodResolver } from "@hookform/resolvers/zod";
import SendIcon from "@mui/icons-material/Send";
import { Box, Divider, IconButton, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import { InfiniteData, useQueryClient } from "@tanstack/react-query";
import TextField from "components/Inputs/TextField";
import Loading from "components/feedback/Loading";
import { useSnackbar } from "context/snackbarContext";
import { Comment, CommentBody, commentQueries } from "features/comment";
import { queryStore } from "features/shared";
import z from "lib/zod";
import { FC, useRef } from "react";
import { useForm } from "react-hook-form";
import { APIList } from "types/api";
import { parseResponseError } from "utils/apiHelpers";
import commentSchema, { commentFormDefault } from "./validation";
export type CommentFormProps = { postId: string; onCommentSubmit: () => void };
export const CommentForm: FC<CommentFormProps> = ({ postId, onCommentSubmit }) => {
  const { control, handleSubmit, setError, setValue } = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: { ...commentFormDefault, product: postId },
  });
  const queryClient = useQueryClient();
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const postComment = commentQueries.usePost();
  const snackbar = useSnackbar();
  const onSubmit = async (form: CommentBody) => {
    if (form.content === "") return;
    postComment.mutate(form, {
      onSuccess: (comment) => {
        onCommentSubmit();
        queryClient.setQueryData(queryStore.comment.detail(comment._id).queryKey, postComment);
        queryClient.setQueryData(
          queryStore.comment.all({ postId }).queryKey,
          (comments: InfiniteData<APIList<Comment>> | undefined) => {
            if (comments) {
              return {
                ...comments,
                pages: [
                  {
                    ...comments.pages[0],
                    data: [comment, ...comments.pages[0].data].filter((element, index, arr) => {
                      return arr.findIndex((find) => find._id === element._id) === index;
                    }),
                  },
                  ...comments.pages.slice(1),
                ],
              };
            }
          }
        );
        queryClient.invalidateQueries(queryStore.comment.all({ postId }).queryKey);
        setValue("content", "");
      },
      onError: parseResponseError({ setFormError: setError, snackbar }),
    });
  };

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      sx={{ position: "absolute", bgcolor: "white", bottom: 0, width: 1 }}
    >
      <Divider />
      <Stack
        sx={{
          flexDirection: "row",
          p: 1,
        }}
      >
        <TextField
          name="content"
          sx={{
            ".MuiInputBase-root": { bgcolor: grey["200"], border: "none" },
            fieldset: { border: "none" },
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
        <IconButton
          type="submit"
          sx={{ minWidth: 40 }}
          ref={submitRef}
          disabled={postComment.isLoading}
        >
          {postComment.isLoading ? (
            <Loading size={15} />
          ) : (
            <SendIcon sx={{ scale: (th) => (th.direction === "rtl" ? "-1" : "1") }} />
          )}
        </IconButton>
      </Stack>
    </Box>
  );
};
