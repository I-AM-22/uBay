import { Box, Typography, useTheme } from "@mui/material";

const Message = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
        }}
      >
        <Box
          bgcolor={theme.palette.primary.main}
          sx={{
            width: "fit-content",
            margin: "10px",
            padding: "10px",
            borderRadius: "0 10px 10px 10px",
            display: "flex",
            position: "relative",
          }}
        >
          <Typography pr={4}>hello amrs</Typography>
          <Typography
            variant="body2"
            sx={{
              position: "absolute",
              bottom: 0,
              right: 6,
            }}
          >
            11:43
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <Box
          sx={{
            width: "fit-content",
            margin: "10px",
            padding: "10px",
            borderRadius: "10px 0px 10px 10px",
            display: "flex",
            position: "relative",
            bgcolor: "white",
          }}
        >
          <Typography pr={4}>hello amr</Typography>
          <Typography
            variant="body2"
            sx={{
              position: "absolute",
              bottom: 0,
              right: 6,
            }}
          >
            11:43
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default Message;
