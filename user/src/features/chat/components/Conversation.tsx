import SendIcon from "@mui/icons-material/Send";
import { Box, Divider, IconButton, Stack, TextField, useMediaQuery, useTheme } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import Loading from "components/feedback/Loading";
import { SERVER_BASE_URL } from "constants/domain";
import { useSnackbar } from "context/snackbarContext";
import { accountQueries } from "features/account";
import { BOTTOM_NAVIGATOR_HEIGHT_IN_SPACINGS } from "features/layout";
import { queryStore } from "features/shared";
import { ElementRef, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import { parseResponseError } from "utils/apiHelpers";
import { Message, chatQueries } from "..";
import AppBarChat from "./AppBar";
import MessagesList from "./MessagesList";
import UserInformation from "./UserInformation";

const socket = io(SERVER_BASE_URL);
function Conversation() {
  const submitRef = useRef<HTMLButtonElement | null>(null);

  const theme = useTheme();
  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));
  const [message, setMessage] = useState("");
  const { id: chatId = "" } = useParams();
  const query = accountQueries.useProfile();
  const messagesRef = useRef<ElementRef<typeof MessagesList>>();
  const postMessage = chatQueries.usePostMessage();
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();
  useEffect(() => {
    setMessage("");
  }, [chatId]);
  useEffect(() => {
    socket.emit("join chat", chatId);
  }, [chatId]);
  useEffect(() => {
    if (query.data) {
      socket.emit("setup", query.data);
    }
  }, [query]);
  useEffect(() => {
    const listener = ({ newMessageReceived }: { newMessageReceived: Message }) => {
      const queryKey = queryStore.chat.messages(chatId).queryKey;
      const prevData: Message[] = queryClient.getQueryData(queryKey) ?? [];
      const state = queryClient.getQueryState(queryKey);
      const isStillLoading = state?.status === "loading";
      queryClient.setQueryData(queryKey, [...prevData, newMessageReceived]);
      if (isStillLoading) {
        queryClient.invalidateQueries(queryKey);
      }
      messagesRef.current?.scrollToEnd();
    };

    socket.on("message received", listener);

    return () => {
      socket.off("message received", listener);
    };
  }, [chatId, queryClient]);
  const sendMessage = () => {
    if (postMessage.isLoading) return;
    if (message.trim().length == 0) return;
    postMessage.mutate(
      {
        chat: chatId,
        content: message,
        user: query.data?._id ?? "",
      },
      {
        onSuccess: (message) => {
          socket.emit("new message", { message: message, chatId });
          const queryKey = queryStore.chat.messages(chatId).queryKey;
          const prevData: Message[] = queryClient.getQueryData(queryKey) ?? [];
          const state = queryClient.getQueryState(queryKey);
          const isStillLoading = state?.status === "loading";
          queryClient.setQueryData(queryKey, [...prevData, message]);
          if (isStillLoading) {
            queryClient.invalidateQueries(queryKey);
          }
          messagesRef.current?.scrollToEnd();
          setMessage("");
        },
        onError: parseResponseError({ snackbar }),
      }
    );
  };

  return (
    <Stack direction={"row"} flex={1}>
      {isMdOrLarger && <AppBarChat />}
      <Stack
        width={1}
        flex={2.5}
        sx={{
          maxHeight: {
            xs: `calc(100vh - ${theme.spacing(BOTTOM_NAVIGATOR_HEIGHT_IN_SPACINGS)} - 52px)`,
            sm: `calc(100vh  - 52px)`,
          },
        }}
      >
        <Box p={1} bgcolor={"white"}>
          <UserInformation userData={query.data?._id} />
        </Box>
        <Divider />
        <MessagesList ref={messagesRef} userData={query.data?._id} />
        <Box
          component={"form"}
          sx={{
            bgcolor: "white",
            width: 1,
          }}
        >
          <Divider />
          <Stack
            sx={{
              flexDirection: "row",
              p: 1,
              justifyContent: "space-between",
            }}
          >
            <TextField
              name="content"
              sx={{
                ".MuiInputBase-root": { bgcolor: "white", border: "none" },
                fieldset: { border: "none" },
                width: "88%",
              }}
              size="small"
              onKeyDown={(event) => {
                if (event.key == "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  submitRef.current?.click();
                }
              }}
              onChange={(e) => !postMessage.isLoading && setMessage(e.target.value)}
              value={message}
              multiline
              maxRows={10}
            />
            <IconButton type="button" sx={{ minWidth: 40 }} ref={submitRef} onClick={sendMessage}>
              {postMessage.isLoading ? (
                <Loading size={15} />
              ) : (
                <SendIcon sx={{ scale: (th) => (th.direction === "rtl" ? "-1" : "1") }} />
              )}
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}
export default Conversation;
