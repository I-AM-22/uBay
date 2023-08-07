import {
  Box,
  Divider,
  IconButton,
  Stack,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useForm } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import { MouseEvent, useEffect, useRef, useState } from "react";
import Message from "./buy/Message";
import { useLocation } from "react-router-dom";
import axios from "axios";
import UserInformation from "./UserInformation";
function Conversation() {
  const { control, handleSubmit, setError, setValue } = useForm();
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const [userData, setUserData] = useState("");
  const token = localStorage.getItem("token");
  const [message, setMessage] = useState("");
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const pageTitle = useLocation().pathname.split("/")[2];
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/users/me",
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserData(response.data.id);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const sendMessage = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    if (message.trim().length == 0) return;

    let chatId = pageTitle;
    const userId = userData;

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
      setMessage("")
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
        <UserInformation userData={userData} />
      </Box>
      <Divider />
      <Box
        sx={{
          overflowY: "auto",
        }}
      >
        <Message userData={userData} />
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
            <SendIcon
              sx={{ scale: (th) => (th.direction === "rtl" ? "-1" : "1") }}
            />
          </IconButton>
        </Stack>
      </Box>
    </Stack>
  );
}
export default Conversation;
