import { Avatar, Skeleton, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
type user = {
  userData: string | undefined;
};
const UserInformation = ({ userData }: user) => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState<any>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(true);
  const pageTitle = useLocation().pathname.split("/")[2];

  useEffect(() => {
    const getChat = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/chats/${pageTitle}`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data);
        // setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getChat();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (data.length != 0 && data.customer.id == userData) {
    return (
      <Stack
        key={data.seller.id}
        direction="row"
        sx={{
          alignItems: "center",
        }}
      >
        <Avatar src={data.seller.photo} alt={data.seller.name} />
        <Typography
          variant="h6"
          margin="0 12px"
          width="fit-content"
          color="black"
        >
          {data.seller.name}
        </Typography>
      </Stack>
    );
  } else if (data.length != 0 && data.seller.id == userData) {
    return (
      <Stack
        key={data.customer.id}
        direction="row"
        sx={{
          alignItems: "center",
        }}
      >
        <Avatar src={data.customer.photo} alt={data.customer.name} />
        <Typography
          variant="h6"
          margin="0 12px"
          width="fit-content"
          color="black"
        >
          {data.customer.name}
        </Typography>
      </Stack>
    );
  }
  return (
    <>
      {loading && (
        <Stack direction="row" alignItems="center">
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" width={70} height={30} sx={{ ml: 1 }} />
        </Stack>
      )}
    </>
  );
};

export default UserInformation;
