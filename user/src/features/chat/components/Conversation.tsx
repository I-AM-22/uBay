import SendIcon from "@mui/icons-material/Send";
import { Box, Divider, IconButton, Stack, TextField, useMediaQuery, useTheme } from "@mui/material";
import axios from "axios";
import Loading from "components/feedback/Loading";
import { accountQueries } from "features/account";
import { BOTTOM_NAVIGATOR_HEIGHT_IN_SPACINGS } from "features/layout";
import { ElementRef, MouseEvent, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import Chat from "./Chat";
import Message from "./Message";
import UserInformation from "./UserInformation";
function Conversation() {
  const { id } = useParams();
  return <ConversationById key={id} />;
}
const socket = io("http://localhost:3000");
function ConversationById() {
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const token = localStorage.getItem("token");
  const [message, setMessage] = useState("");
  const [receiveMes, setReceiveMes] = useState<any>([]);
  const theme = useTheme();
  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));
  const [isSending, setIsSending] = useState(false);
  const { id } = useParams();
  const query = accountQueries.useProfile();
  const messagesRef = useRef<ElementRef<typeof Message>>();
  // console.log(query.data);
  useEffect(() => {
    socket.emit("join chat", id);
  }, [id]);
  useEffect(() => {
    if (query.data) {
      socket.emit("setup", query.data);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  console.log(receiveMes);
  useEffect(() => {
    const listener = (data: any) => {
      setReceiveMes((prev: any) => [...prev, data.newMessageReceived]);
      messagesRef.current?.scrollToEnd();
    };

    socket.on("message received", listener);

    return () => {
      socket.off("message received", listener);
    };
  }, []);
  const sendMessage = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    if (message.trim().length == 0) return;
    const chatId = id;
    const userId = query.data?._id;

    const data = {
      content: message,
      chat: chatId,
      user: userId,
    };

    setIsSending(true);
    axios
      .post(`http://localhost:3000/api/v1/chats/${chatId}/messages`, data, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        socket.emit("new message", {message:response.data,chatId});
        setIsSending(false);
        setReceiveMes((prev: any) => [...prev, response.data]);
        setMessage("");
        messagesRef.current?.scrollToEnd();
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <Stack direction={"row"} flex={1}>
      {isMdOrLarger && <Chat />}
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
        <Message ref={messagesRef} userData={query.data?._id} messageReal={receiveMes} />
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
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              multiline
              maxRows={10}
            />
            <IconButton
              type="submit"
              sx={{ minWidth: 40 }}
              ref={submitRef}
              onClick={(e) => sendMessage(e)}
              // disabled={postComment.isLoading}
            >
              {isSending ? (
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
