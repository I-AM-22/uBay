import {
  Avatar,
  Box,
  Button,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Layout() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  return (
    <Button
      sx={{
        justifyContent: "unset",
        width: "100%",
      }}
      onClick={() => navigate("1")}
    >
      <Stack direction="row" m="8px 0" width="100%" alignItems="center" p={1}>
        {loading ? (
          <Avatar>A</Avatar>
        ) : (
          <Skeleton variant="circular" width={40} height={40} />
        )}
        <Stack>
          {loading ? (
            <>
              <Typography
                variant="h6"
                margin="0 12px"
                width="fit-content"
                color="black"
              >
                عمرو
              </Typography>
              <Typography variant="body1" margin="0 12px" color="darkslategray">
                عمرو كلاس
              </Typography>
            </>
          ) : (
            <Box mx={1}>
              <Skeleton variant="text" width={70} />
              <Skeleton variant="text" width={100} />
            </Box>
          )}
        </Stack>
      </Stack>
    </Button>
  );
}
