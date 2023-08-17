import { Box, Stack, Typography, useTheme } from "@mui/material";
import axios from "axios";
import Loading from "components/feedback/Loading";
import { ForwardedRef, forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
type user = {
  userData: string | undefined;
  messageReal: any[];
};
const Message = forwardRef(function FC(
  { userData, messageReal }: user,
  componentRef: ForwardedRef<{ scrollToEnd: () => void } | undefined>
) {
  const { t } = useTranslation("chat");
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const [messages, setMessages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const isEmpty = !isLoading && messages.length === 0;
  const theme = useTheme();
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const fetchMessages = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/chats/${id}/messages`, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setMessages(response.data.data.reverse());
      } catch (error) {
        console.error("Error:", error);
      }
      scrollToEnd();
      setIsLoading(false);
    };

    fetchMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const scrollToEnd = () => {
    setTimeout(() => ref.current && (ref.current.scrollTop = ref.current.scrollHeight), 0);
  };
  useImperativeHandle(componentRef, () => ({
    scrollToEnd,
  }));

  return (
    <Stack gap={1} py={1} px={1} height={1} ref={ref} flex={1} overflow={"auto"}>
      {isEmpty && (
        <Typography mx="auto" my={"auto"} variant="h4" color="text.secondary">
          {t("noMessages")}
        </Typography>
      )}
      {isLoading && messages.length === 0 && <Loading mt={10} />}
      {[...messages, ...messageReal]
        .filter((value, index, self) => index === self.findIndex((t) => t._id === value._id))
        .map((message: any) => {
          const time = message.createdAt;
          const isMe = message.user == userData;
          return (
            <Box
              key={message._id}
              sx={{
                display: "flex",
                flexDirection: isMe ? "row" : "row-reverse",
              }}
            >
              <Box
                bgcolor={isMe ? theme.palette.primary.main : "white"}
                sx={{
                  maxWidth: "90%",

                  p: 1,
                  borderRadius: isMe ? "0 10px 10px 10px" : "10px 0px 10px 10px",
                  display: "flex",
                  position: "relative",
                }}
              >
                <Typography pr={5} color={isMe ? "white" : "text.primary"}>
                  {message.content}
                </Typography>
                <Typography
                  variant="body2"
                  color={isMe ? "#fff7" : "text.secondary"}
                  sx={{
                    position: "absolute",
                    bottom: 2,
                    right: 6,
                  }}
                >
                  {time.slice(11, 16)}
                </Typography>
              </Box>
            </Box>
          );
        })}
    </Stack>
  );
});
export default Message;
