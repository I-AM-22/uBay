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
import { useRef } from "react";
import { grey } from "@mui/material/colors";
import Layout from "../Layout";
import Message from "./Message";
import UserInformation from "./UserInformation";
export default function Conversation() {
  const { control, handleSubmit, setError, setValue } = useForm();
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack
      // gap={1}
      // p={1}
      maxWidth={600}
      width="min(500px,100%)"
      mx="auto"
      height="calc(100vh - 106px)"
      bgcolor="#ddddf7"
    >
      <Box p={1} bgcolor={theme.palette.primary.main}>
        <UserInformation />
      </Box>
      <Divider />
      <Box
        sx={{
          overflowY: "auto",
        }}
      >
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
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
            multiline
            maxRows={10}
          />
          <IconButton
            type="submit"
            sx={{ minWidth: 40 }}
            ref={submitRef}
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
