import { Box, Typography, useTheme } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
type user = {
  userData: string | undefined;
};
const Message = ({ userData }: user) => {
  const userID = userData;
  const token = localStorage.getItem("token");
  const pageTitle = useLocation().pathname.split("/")[2];
  const [messages, setMessages] = useState([]);
  const theme = useTheme();
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/chats/${pageTitle}/messages?page=1&limit=11`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setMessages(response.data.data.reverse());
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box>
      {messages.map((message: any, index) => {
        const time = message.createdAt;
        return (
          <>
            <Box
              key={index}
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: message.user._id == userData ? "row" : "row-reverse",
              }}
            >
              <Box
                bgcolor={message.user._id == userData ? theme.palette.primary.main : "white"}
                sx={{
                  width: "fit-content",
                  margin: "10px",
                  padding: "10px",
                  borderRadius:
                    message.user._id == userData ? "0 10px 10px 10px" : "10px 0px 10px 10px",
                  display: "flex",
                  position: "relative",
                }}
              >
                <Typography pr={4}>{message.content}</Typography>
                <Typography
                  variant="body2"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 6,
                  }}
                >
                  {time.slice(11, 16)}
                  
                </Typography>
              </Box>
            </Box>
          </>
        );
      })}
    </Box>
  );
};
export default Message;
