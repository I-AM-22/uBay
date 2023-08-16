import TelegramIcon from "@mui/icons-material/Telegram";
import { Button } from "@mui/material";
import axios from "axios";
import Loading from "components/feedback/Loading";
import { useSnackbar } from "context/snackbarContext";
import { useIsMe } from "features/account";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { parseResponseError } from "utils/apiHelpers";
import { storage } from "utils/storage";
import { Post } from "../api/type";
export type ChatButtonProps = { post: Post };
export const ChatButton: FC<ChatButtonProps> = ({ post }) => {
  const [isLoadingChat, setIsLoadingChat] = useState(false);
  const navigate = useNavigate();
  const isMe = useIsMe(post.user._id);
  const snackbar = useSnackbar();
  const addToChat = async () => {
    const token = storage.getToken();
    if (isMe) return;
    try {
      setIsLoadingChat(true);
      const response = await axios.post(
        "http://localhost:3000/api/v1/chats",
        {
          name: post?.title,
          product: post?._id,
          user: post?.user._id,
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      {
        response.data.data
          ? navigate(`/chats/${response.data.data._id}`)
          : navigate(`/chats/${response.data.chat._id}`);
      }
      setIsLoadingChat(false);
      return response.data;
    } catch (error) {
      parseResponseError({ snackbar })(error);
    }
  };
  return isMe ? (
    <></>
  ) : (
    <Button onClick={addToChat}>{!isLoadingChat ? <TelegramIcon /> : <Loading size={15} />}</Button>
  );
};
