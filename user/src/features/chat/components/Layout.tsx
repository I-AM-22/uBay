import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import axios from "axios";
import { accountQueries } from "features/account";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
type per = {
  person: boolean;
};
function Layout({ person }: per) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const query = accountQueries.useProfile();
  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useTranslation("chat");
  const token = localStorage.getItem("token");
  const isEmpty = !loading && data.length === 0;

  useEffect(() => {
    const getChats = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/chats`, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setData(
          response.data.data.filter(
            (item: any) =>
              (person && item.customer._id === query.data?._id) ||
              (!person && item.seller._id === query.data?._id)
          )
        );
        setLoading(false);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack
      gap={1}
      p={1}
      flex={1}
      maxWidth={600}
      width="min(500px,100%)"
      mx="auto"
      alignItems={"center"}
    >
      {loading && (
        <>
          <Loading />
          <Loading />
          <Loading />
          <Loading />
        </>
      )}
      {isEmpty && (
        <Stack gap={3} py={3} alignItems={"center"}>
          <QuestionAnswerIcon sx={{ color: "primary.400", fontSize: 200 }} />
          <Typography color="#444" fontSize="clamp(17px,4vw,23px)">
            {t("empty")}
          </Typography>
        </Stack>
      )}
      {data.map((item: any) => {
        const isSeller = item.seller._id === query.data?._id;
        return (
          <Button
            key={item._id}
            sx={{
              justifyContent: "unset",
              width: "100%",
              borderRadius: 2,
              "&,&:hover,&:focus": {
                bgcolor: item._id === id ? "primary.100" : "auto",
              },
            }}
            onClick={() => navigate(`/chats/${item._id}`)}
          >
            <Stack direction="row" m="8px 0" width="100%" alignItems="center" p={1}>
              <Avatar src={item[isSeller ? "customer" : "seller"].photo} />

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
                    {item[isSeller ? "customer" : "seller"].name}
                  </Typography>
                </>
              </Stack>
            </Stack>
          </Button>
        );
      })}
    </Stack>
  );
}
export default Layout;
