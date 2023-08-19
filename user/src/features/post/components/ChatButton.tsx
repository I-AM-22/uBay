import TelegramIcon from "@mui/icons-material/Telegram";
import { Button } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import Loading from "components/feedback/Loading";
import { useSnackbar } from "context/snackbarContext";
import { useIsMe } from "features/account";
import { ChatDetails, chatQueries } from "features/chat";
import { queryStore } from "features/shared";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { parseResponseError } from "utils/apiHelpers";
import { Post } from "../api/type";
export type ChatButtonProps = { post: Post };
export const ChatButton: FC<ChatButtonProps> = ({ post }) => {
  const navigate = useNavigate();
  const isMe = useIsMe(post.user._id);
  const snackbar = useSnackbar();
  const postChat = chatQueries.usePost();
  const queryClient = useQueryClient();
  const addToChat = async () => {
    if (isMe) return;
    postChat.mutate(
      {
        name: post?.title,
        product: post?._id,
        user: post?.user._id,
      },
      {
        onSuccess: (
          data: { data: ChatDetails; chat?: never } | { chat: ChatDetails; data?: never }
        ) => {
          const chat = data.data ?? data.chat;
          queryClient.setQueryData(queryStore.chat.detail(chat._id).queryKey, chat);
          navigate(`/chats/${chat._id}`);
        },
        onError: parseResponseError({ snackbar }),
      }
    );
  };
  return isMe ? (
    <></>
  ) : (
    <Button onClick={addToChat}>
      {!postChat.isLoading ? <TelegramIcon /> : <Loading size={15} />}
    </Button>
  );
};
