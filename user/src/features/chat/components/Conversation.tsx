import SendIcon from "@mui/icons-material/Send";
import { Box, Divider, IconButton, Stack, TextField, useMediaQuery, useTheme } from "@mui/material";
import axios from "axios";
import { accountQueries } from "features/account";
import { MouseEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import Message from "./Message";
import UserInformation from "./UserInformation";
function Conversation() {
  // const socket=io("http://localhost:3000")
  // console.log(socket)

  const { control, handleSubmit, setError, setValue } = useForm();
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const [userData, setUserData] = useState("");
  const token = localStorage.getItem("token");
  const [message, setMessage] = useState("");
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const pageTitle = useLocation().pathname.split("/")[2];
  const query = accountQueries.useProfile();

  const sendMessage = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    if (message.trim().length == 0) return;

    // socket.emit("join chat","123amrtesting")
    let chatId = pageTitle;
    const userId = query.data?.id;

    const data = {
      content: message,
      chat: chatId,
      user: userId,
    };

    axios
      .post(`http://localhost:3000/api/v1/chats/${chatId}/messages`, data, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Message sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
    setMessage("");
  };
  return (
    <Stack
      maxWidth={600}
      width="min(500px,100%)"
      mx="auto"
      height="calc(100vh - 106px)"
      bgcolor="#ddddf7"
    >
      <Box p={1} bgcolor={theme.palette.primary.main}>
        <UserInformation userData={query.data?.id} />
      </Box>
      <Divider />
      <Box
        sx={{
          overflowY: "auto",
        }}
      >
        <Message userData={query.data?.id} />
      </Box>
      <Box
        component={"form"}
        // onSubmit={handleSubmit(onSubmit)}
        sx={{
          position: "absolute",
          bgcolor: "white",
          bottom: sm ? 56 : 0,
          maxWidth: 600,
          width: "min(500px,100%)",
          background: " #ddddf7",
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
            {/* {postComment.isLoading ? (
            <Loading size={15} />
          ) : (
            <SendIcon sx={{ scale: (th) => (th.direction === "rtl" ? "-1" : "1") }} />
          )} */}
            <SendIcon sx={{ scale: (th) => (th.direction === "rtl" ? "-1" : "1") }} />
          </IconButton>
        </Stack>
      </Box>
    </Stack>
  );
}
export default Conversation;