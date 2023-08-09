import { Avatar, Box, Button, Skeleton, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { accountQueries } from "features/account";
type per = {
  person: boolean;
};
function Layout({ person }: per) {
  const [data, setData] = useState<any>([]);
  console.log(data);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState("");
  const query = accountQueries.useProfile();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // useEffect(() => {
  //   axios
  //     .delete('http://localhost:3000/api/v1/chats/64cea0fdfc7e8570e20a2866', {
  //       headers: {
  //         accept: "*/*",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => {
  //       // Handle successful response
  //       console.log("Resource deleted successfully.");
  //     })
  //     .catch((error) => {
  //       // Handle error
  //       console.error("Error deleting resource:", error);
  //     });
  // }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:3000/api/v1/users/me",
  //         {
  //           headers: {
  //             accept: "application/json",
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  //       setUserData(response.data.id);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  useEffect(() => {
    const getChats = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/chats?page=${1}&limit=${1}`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data.data);
        setLoading(false);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, []);

  return (
    <>
      {loading && (
        <>
          <Loading />
          <Loading />
          <Loading />
          <Loading />
        </>
      )}
      {data.map((item: any) => {
        if (person && item.customer.id === query.data?.id) {
          return (
            <Button
              key={item.id}
              sx={{
                justifyContent: "unset",
                width: "100%",
              }}
              onClick={() => navigate(`${item.id}`)}
            >
              <Stack direction="row" m="8px 0" width="100%" alignItems="center" p={1}>
                <Avatar src={item.seller.photo} />

                <Stack>
                  <>
                    <Typography
                      variant="h6"
                      margin="0 12px"
                      width="fit-content"
                      color="black"
                      textTransform="none"
                    >
                      {item?.product.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      margin="0 12px"
                      color="darkslategray"
                      sx={{
                        textTransform: "none",
                        width: "fit-content",
                      }}
                    >
                      {item.seller.name}
                    </Typography>
                  </>
                </Stack>
              </Stack>
            </Button>
          );
        } else if (!person && item.seller.id === query.data?.id) {
          return (
            <Button
              key={item.id}
              sx={{
                justifyContent: "unset",
                width: "100%",
              }}
              onClick={() => navigate(`${item.id}`)}
            >
              <Stack direction="row" m="8px 0" width="100%" alignItems="center" p={1}>
                <Avatar src={item.customer.photo} />

                <Stack>
                  <>
                    <Typography
                      variant="h6"
                      margin="0 12px"
                      width="fit-content"
                      color="black"
                      textTransform="none"
                    >
                      {item?.product.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      margin="0 12px"
                      color="darkslategray"
                      sx={{
                        textTransform: "none",
                        width: "fit-content",
                      }}
                    >
                      {item.customer.name}
                    </Typography>
                  </>
                </Stack>
              </Stack>
            </Button>
          );
        }
      })}
    </>
  );
}
export default Layout;
