import QrCode2RoundedIcon from "@mui/icons-material/QrCode2Rounded";
import { Alert, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import NoData from "components/feedback/NoData";
import Skeleton from "components/feedback/Skeleton";
import LabelValue from "components/typography/LabelValue";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { priceFormatter } from "utils/transforms";
import { PostMine, postQueries } from "..";
import { ProductQr } from "./ProductQr";
export type PostMineListProps = { isBuy: boolean };
export const PostMineList: FC<PostMineListProps> = ({ isBuy }) => {
  const { t: tPost } = useTranslation("post");
  const [qrOpen, setQrOpen] = useState(false);
  const [postToScan, setToScanPost] = useState<PostMine["product"] | null>(null);
  const query = postQueries.useMine({ isBuy });
  const noData = query.isSuccess && query.data.length === 0;
  return (
    <>
      <Stack gap={1} p={1} maxWidth={600} width="min(500px,100%)" mx="auto" alignItems={"center"}>
        {query.isSuccess &&
          query.data.map((product) => (
            <PostMineCard
              onQrClick={() => {
                setToScanPost(product.product);
                setQrOpen(true);
              }}
              isBuy={isBuy}
              key={product.product._id}
              data={product}
            />
          ))}
        {query.isInitialLoading && (
          <>
            <PostMineCard skeleton />
            <PostMineCard skeleton />
            <PostMineCard skeleton />
          </>
        )}
        {noData && <NoData />}
      </Stack>
      <ProductQr
        onClose={() => setQrOpen(false)}
        open={qrOpen}
        setOpen={setQrOpen}
        post={postToScan}
        keepMounted={false}
        title={`${isBuy ? tPost("qrBuyer") : tPost("qrSeller")}: ${postToScan?.title}`}
      />
    </>
  );
};

export type PostMineCardProps =
  | { data: PostMine; isBuy: boolean; skeleton?: false; onQrClick: () => void }
  | { data?: undefined; isBuy?: undefined; skeleton: true; onQrClick?: undefined };
export const PostMineCard: FC<PostMineCardProps> = ({ isBuy, data, skeleton, onQrClick }) => {
  const { t } = useTranslation("post");
  return (
    <Card sx={{ width: 1 }}>
      {data && <DeliveryStatus isBuy={isBuy} status={data.delivery_status} />}
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
                <LabelValue
                  sx={{ my: 1, fontSize: 12, ".label": { color: "text.secondary" } }}
                  label={t("price")}
                >
                  {priceFormatter.format(data.product.price)}
                </LabelValue>
              </>
            )}
            {skeleton && (
              <>
                <Skeleton widthRange={{ min: 70, max: 100 }} height={30} />
                <Skeleton widthRange={{ min: 70, max: 100 }} />
                <Skeleton widthRange={{ min: 70, max: 100 }} />
              </>
            )}
          </CardContent>
          {!skeleton && (
            <Stack direction="row" sx={{ mx: 1, mb: 2, gap: 1 }}>
              <Button
                size="small"
                variant="outlined"
                component={Link}
                to={`/posts/${data?.product._id}`}
              >
                {t("details")}
              </Button>
              {((isBuy === true && data.delivery_status === "seller") ||
                (isBuy === false && data.delivery_status === "wait")) && (
                <Button
                  size="small"
                  onClick={onQrClick}
                  variant="contained"
                  endIcon={<QrCode2RoundedIcon sx={{ color: "white" }} />}
                >
                  {t("generateQr")}
                </Button>
              )}
            </Stack>
          )}
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
    </Card>
  );
};
const statusColor = {
  seller: {
    seller: "success",
    customer: "success",
    wait: "warning",
  },
  customer: {
    seller: "warning",
    customer: "success",
    wait: "info",
  },
} as const;
export type DeliveryStatusProps = { status: PostMine["delivery_status"]; isBuy: boolean };
export const DeliveryStatus: FC<DeliveryStatusProps> = ({ status, isBuy }) => {
  const { t } = useTranslation("post", { keyPrefix: "deliveryStatus" });

  return (
    <Alert
      sx={{ ".MuiSvgIcon-root": { color: "inherit" }, py: 0 }}
      severity={statusColor[isBuy ? "customer" : "seller"][status]}
    >
      {t(`${isBuy ? "customer" : "seller"}.${status}`)}
    </Alert>
  );
};
