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
import dayjs from "dayjs";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { priceFormatter } from "utils/transforms";
import type { DeliveryStatusEnum } from "..";
import { PostMine, ProductMine, postQueries } from "..";
import { ProductQr } from "./ProductQr";
const priority = {
  seller: {
    wait: 0,
    unpaid: 1,
    seller: 2,
    customer: 3,
  },
  customer: {
    seller: 0,
    wait: 1,
    customer: 2,
    unpaid: 3,
  },
} as const;
export type PostMineListProps = { isBuy: boolean };
export const PostMineList: FC<PostMineListProps> = ({ isBuy }) => {
  const { t: tPost } = useTranslation("post");
  const [qrOpen, setQrOpen] = useState(false);
  const [postToScan, setToScanPost] = useState<ProductMine | null>(null);
  const query = postQueries.useMine({ isBuy });
  const tab = isBuy ? "customer" : "seller";
  const noData = query.isSuccess && Object.values(query.data).flat().length === 0;
  query.isSuccess && console.log(Object.entries(query.data));

  return (
    <>
      <Stack gap={1} p={1} maxWidth={600} width="min(500px,100%)" mx="auto" alignItems={"center"}>
        {query.isSuccess &&
          Object.entries(query.data)
            .sort(
              (a, b) =>
                priority[tab][a[0] as DeliveryStatusEnum] -
                priority[tab][b[0] as DeliveryStatusEnum]
            )
            .map(([status, list]) =>
              list.map((product) => (
                <PostMineCard
                  onQrClick={() => {
                    setToScanPost(product);
                    setQrOpen(true);
                  }}
                  isBuy={isBuy}
                  deliveryStatus={status as keyof PostMine<typeof isBuy>}
                  key={product._id}
                  data={product}
                />
              ))
            )}
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
        title={`${isBuy ? tPost("qrBuyer") : tPost("qrSeller")}: ${postToScan?.product.title}`}
      />
    </>
  );
};

export type PostMineCardProps<IsBuy extends boolean = boolean> =
  | {
      data: ProductMine;
      isBuy: IsBuy;
      skeleton?: false;
      onQrClick: () => void;
      deliveryStatus: keyof PostMine<IsBuy>;
    }
  | {
      data?: undefined;
      isBuy?: undefined;
      skeleton: true;
      onQrClick?: undefined;
      deliveryStatus?: undefined;
    };
export const PostMineCard: FC<PostMineCardProps> = ({
  isBuy,
  data,
  skeleton,
  onQrClick,
  deliveryStatus,
}) => {
  const { t } = useTranslation("post");
  return (
    <Card sx={{ width: 1 }}>
      {data && <DeliveryStatus isBuy={isBuy} status={deliveryStatus} />}
      <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            {data && (
              <>
                <Typography component="div" variant="h6">
                  {data.product.title}
                </Typography>
                <LabelValue
                  sx={{ my: 1, fontSize: 12, ".label": { color: "text.secondary" } }}
                  label={t("price")}
                >
                  {!data.payment.is_discount && (
                    <Stack direction={"row"} flexWrap={"wrap"} alignItems={"end"}>
                      <Box
                        component={"span"}
                        sx={{ fontSize: 10, mr: 1, opacity: 0.5, textDecoration: "line-through" }}
                      >
                        {priceFormatter.format(data.product.price)}
                      </Box>
                      <Box component={"span"} minWidth={"max-content"}>
                        {priceFormatter.format(data.payment.price_after)}
                      </Box>
                    </Stack>
                  )}
                  {data.payment.is_discount && priceFormatter.format(data.product.price)}
                </LabelValue>
                {data.seller_date && (
                  <LabelValue
                    sx={{ my: 1, fontSize: 12, ".label": { color: "text.secondary" } }}
                    label={t("seller_date")}
                  >
                    {dayjs(data.seller_date).format("YYYY/MM/DD")}
                  </LabelValue>
                )}
                {data.customer_date && (
                  <LabelValue
                    sx={{ my: 1, fontSize: 12, ".label": { color: "text.secondary" } }}
                    label={t("customer_date")}
                  >
                    {dayjs(data.customer_date).format("YYYY/MM/DD")}
                  </LabelValue>
                )}
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
                color="secondary"
                component={Link}
                to={`/posts/${data?.product._id}`}
              >
                {t("details")}
              </Button>
              {((isBuy === true && deliveryStatus === "seller") ||
                (isBuy === false && deliveryStatus === "wait")) && (
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
    unpaid: "info",
  },
  customer: {
    seller: "warning",
    customer: "success",
    wait: "info",
    unpaid: "info",
  },
} as const;
export type DeliveryStatusProps<IsBuy extends boolean = boolean> = {
  status: keyof PostMine<IsBuy>;
  isBuy: IsBuy;
};
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
