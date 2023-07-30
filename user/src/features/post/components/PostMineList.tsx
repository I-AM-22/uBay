import { Alert, Chip, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Skeleton from "components/feedback/Skeleton";
import OptionalLink from "components/links/OptionalLink";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { priceFormatter } from "utils/transforms";
import { PostMine, postQueries } from "..";
export type PostMineListProps = { isBuy: boolean };
export const PostMineList: FC<PostMineListProps> = ({ isBuy }) => {
  const query = postQueries.useMine({ isBuy });
  return (
    <Stack gap={1} p={1} maxWidth={600} width="min(500px,100%)" mx="auto" alignItems={"center"}>
      {query.isSuccess &&
        query.data.map((product) => <PostMineCard key={product.product._id} data={product} />)}{" "}
      {query.isInitialLoading && (
        <>
          <PostMineCard skeleton />
          <PostMineCard skeleton />
          <PostMineCard skeleton />
        </>
      )}
    </Stack>
  );
};

export type PostMineCardProps =
  | { data: PostMine; skeleton?: false }
  | { data?: undefined; skeleton: true };
export const PostMineCard: FC<PostMineCardProps> = ({ data, skeleton }) => {
  return (
    <Card sx={{ width: 1 }}>
      <OptionalLink noStyle to={`/posts/${data?.product._id}`} withLink={!!data}>
        {data && <DeliveryStatus status={data.delivery_status} />}
        <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              {data && (
                <>
                  <Typography component="div" variant="h6">
                    {data?.product.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {data.product.content.slice(0, 100)}
                    {data.product.content.length > 100 ? "..." : ""}
                  </Typography>
                </>
              )}
              {skeleton && (
                <>
                  <Skeleton widthRange={{ min: 70, max: 100 }} height={30} />
                  <Skeleton widthRange={{ min: 70, max: 100 }} />
                </>
              )}
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <Chip
                variant="outlined"
                color="primary"
                label={
                  data ? (
                    priceFormatter.format(data.product.price)
                  ) : (
                    <Skeleton widthRange={{ min: 30, max: 40 }} />
                  )
                }
              />
            </Box>
          </Box>
          {skeleton && <Skeleton variant="rectangular" sx={{ width: 151, height: 120 }} />}
          {data && (
            <Box position={"relative"}>
              {data.product.photos.length !== 1 && (
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    bgcolor: "#0007",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 40,
                  }}
                >{`${data.product.photos.length - 1}+`}</Box>
              )}

              <CardMedia
                component="img"
                sx={{ width: 151, height: 1 }}
                image={data?.product.photos[0]}
              />
            </Box>
          )}
        </Stack>
      </OptionalLink>
    </Card>
  );
};
export type DeliveryStatusProps = { status: PostMine["delivery_status"] };
export const DeliveryStatus: FC<DeliveryStatusProps> = ({ status }) => {
  const { t } = useTranslation("post", { keyPrefix: "deliveryStatus" });

  return (
    <Alert
      sx={{ ".MuiSvgIcon-root": { color: "inherit" }, py: 0 }}
      severity={status == "wait" ? "info" : "warning"}
    >
      {t(status)}
    </Alert>
  );
};
