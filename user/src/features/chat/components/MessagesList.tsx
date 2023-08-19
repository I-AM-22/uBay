import { Box, Stack, Typography, useTheme } from "@mui/material";
import Loading from "components/feedback/Loading";
import { ForwardedRef, forwardRef, useImperativeHandle, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { chatQueries } from "..";
type user = {
  userData: string | undefined;
};
const MessagesList = forwardRef(function FC(
  { userData }: user,
  componentRef: ForwardedRef<{ scrollToEnd: () => void } | undefined>
) {
  const { t } = useTranslation("chat");
  const { id = "" } = useParams();
  const { data: messages, isSuccess, isLoading } = chatQueries.useMessages(id);
  const isEmpty = isSuccess && messages.length === 0;
  const theme = useTheme();
  const ref = useRef<HTMLDivElement | null>(null);

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
      {isLoading && <Loading mt={10} />}
      {isSuccess &&
        messages
          .filter((value, index, self) => index === self.findIndex((t) => t._id === value._id))
          .sort((a, b) => (a.createdAt < b.createdAt ? -1 : 1))
          .map((message) => {
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
export default MessagesList;
