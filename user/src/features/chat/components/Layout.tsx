import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { Avatar, Box, Button, Divider, Stack, Typography } from "@mui/material";
import { accountQueries } from "features/account";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { chatQueries } from "..";
import Loading from "./Loading";

type per = {
  person: boolean;
};
function Layout({ person }: per) {
  const profileQuery = accountQueries.useProfile();
  const chatsQuery = chatQueries.useChats(person, profileQuery.data?._id ?? "");
  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useTranslation("chat");
  const isEmpty = chatsQuery.isSuccess && chatsQuery.data.length === 0;

  return (
    <Stack gap={1} flex={1} maxWidth={600} width="min(500px,100%)" mx="auto" alignItems={"center"}>
      {chatsQuery.isLoading && (
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
      <Box width={1}>
        {chatsQuery.isSuccess &&
          chatsQuery.data.map((item) => {
            const isSeller = item.seller._id === profileQuery.data?._id;
            return (
              <Fragment key={item._id}>
                <Button
                  key={item._id}
                  sx={{
                    justifyContent: "unset",
                    width: "100%",
                    borderRadius: 0,
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
                          {item[isSeller ? "customer" : "seller"].name}
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
                          {item?.product?.title}
                        </Typography>
                      </>
                    </Stack>
                  </Stack>
                </Button>
                <Divider />
              </Fragment>
            );
          })}
      </Box>
    </Stack>
  );
}
export default Layout;
