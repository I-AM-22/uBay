import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import DiscountIcon from "@mui/icons-material/Discount";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Chip,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Skeleton from "components/feedback/Skeleton";
import { UserAvatar } from "components/icons/UserAvatar";
import dayjs from "dayjs";
import { useIsMe } from "features/account";
import { CommentsDrawer } from "features/comment";
import { DiscountsDrawer } from "features/discount";
import { PaymentDialog } from "features/payment";
import { Post } from "features/post";
import { useIsDesktop } from "hooks/useIsDesktop";
import Timeago from "lib/Timeago";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollRestoration, useNavigate, useSearchParams } from "react-router-dom";
import { priceFormatter } from "utils/transforms";
import { ChatButton } from "../ChatButton";
import { LikeButton } from "../LikeButton";
import { PostOptions } from "../PostOptions";
import { ImageDialog } from "./ImageDialog";

export type PostCardProps =
  | { post: Post; skeleton?: undefined }
  | { post?: undefined; skeleton: true };
export const PostDetails: FC<PostCardProps> = ({ post, skeleton }) => {
  const [, setSearchParams] = useSearchParams();
  const { t } = useTranslation("post");
  const [paymentDrawerOpen, setPaymentDrawerOpen] = useState(false);
  const [discountsDrawerOpen, setDiscountsDrawerOpen] = useState(false);
  const [commentsDrawerOpen, setCommentsDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const isDesktop = useIsDesktop();

  const sellerIsMe = useIsMe(post?.user._id ?? "");
  const discount = post?.coupons[0]?.discount ?? 0;
  const isDiscountWithExpireDate = discount && post?.coupons[0].expire !== null;
  const discountDaysToExpire =
    (discount !== 0 && dayjs(post?.coupons[0].expire).diff(dayjs(), "day")) || 0;
  const isThereADiscount = discount !== 0 && discountDaysToExpire >= 0 && !post?.is_paid;
  const onCommentClick = () => {
    setCommentsDrawerOpen(true);
  };
  const handleRemove = () => {
    navigate("/");
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={3} display={"flex"} position={"relative"}>
          <Card
            sx={{
              height: { xs: 1, md: "93vh", overflow: "auto" },
              width: 1,
              position: { xs: "relative", md: "absolute" },
              overflow: "auto",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              borderRadius: 0,
            }}
          >
            <CardHeader
              avatar={<UserAvatar src={post?.user.photo} isLoading={skeleton} />}
              action={post && <PostOptions onPostRemove={handleRemove} post={post} />}
              title={
                <Stack
                  pt={0.4}
                  pr={0.25}
                  flexWrap={"wrap"}
                  direction="row"
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  {post && (
                    <>
                      <Typography>{post.user.name}</Typography>
                      <Stack direction="row" gap={0.5} alignItems={"center"}>
                        {post.category && (
                          <Chip
                            label={post.category.name}
                            size="small"
                            color="primary"
                            variant="outlined"
                          />
                        )}
                      </Stack>
                    </>
                  )}
                  {skeleton && <Skeleton widthRange={{ min: 40, max: 50 }} />}
                </Stack>
              }
              subheader={
                post && (
                  <Stack direction={"row"} alignItems={"end"} flexWrap={"wrap"} gap={0.5}>
                    <Timeago date={post.createdAt} />
                    <Typography fontSize={9} variant="caption">
                      |{" "}
                      <LocationOnIcon
                        sx={{ fontSize: 10, mb: -0.2, mr: -0.1, color: "text.secondary" }}
                      />
                      {` ${post.store.name} - ${post.store.city.name}`}
                    </Typography>
                  </Stack>
                )
              }
            />

            <CardContent sx={{ pt: 0 }}>
              {post && (
                <>
                  <Typography variant="h6">{post.title}</Typography>
                  <Typography variant="body1">{post.content}</Typography>
                </>
              )}
              {skeleton && (
                <Stack>
                  <Skeleton widthRange={{ min: 100, max: 170 }} />
                  <Skeleton widthRange={{ min: 100, max: 150 }} />
                  <Skeleton widthRange={{ min: 100, max: 150 }} />
                </Stack>
              )}
            </CardContent>
            {post && (
              <CardContent sx={{ py: 0, mt: 1, display: "flex", justifyContent: "start", gap: 1 }}>
                {!!post.likes && (
                  <Stack
                    direction="row"
                    alignItems={"center"}
                    gap={0.5}
                    sx={{ "&, .MuiBadge-badge": { color: "text.secondary", fontSize: 12 } }}
                  >
                    <Box>{post.likes}</Box>
                    <Box>{t("like")}</Box>
                  </Stack>
                )}
                {!!post.comments && (
                  <Stack
                    direction="row"
                    alignItems={"center"}
                    sx={{ "&, .MuiBadge-badge": { color: "text.secondary", fontSize: 12 } }}
                    gap={0.5}
                  >
                    <Box>{post.comments}</Box>
                    <Box>{t("comment")}</Box>
                  </Stack>
                )}
              </CardContent>
            )}
            {post && <Divider sx={{ mt: 0.2 }} />}
            <CardActions
              disableSpacing
              sx={{
                p: 0,
                gap: 0,
                "> .MuiButton-root": {
                  flex: 1,
                  py: 1,
                  borderRadius: 0,
                },
                ".MuiSkeleton-root": { flex: 1, mx: "10%", my: 0.5, py: 0.5 },
              }}
            >
              {post && (
                <>
                  <LikeButton postId={post._id} isLiked={post.likedByMe} />
                  <Button onClick={onCommentClick}>
                    <ChatBubbleIcon />
                  </Button>
                  <ChatButton post={post} />
                </>
              )}
              {skeleton && (
                <>
                  <Skeleton width={30} />
                  <Skeleton width={30} />
                  <Skeleton width={30} />
                </>
              )}
            </CardActions>
            {post && <Divider sx={{ mb: 0.2, display: { xs: "none", md: "block" } }} />}
            <Box sx={{ zIndex: 2, position: "sticky", mt: "auto", bottom: 0, bgcolor: "white" }}>
              <Divider />
              <CardActions
                sx={{
                  alignItems: "stretch",
                  flexWrap: "wrap",
                  gap: 1,
                  justifyContent: "space-between",
                }}
              >
                {sellerIsMe && (
                  <Button
                    onClick={() => {
                      setDiscountsDrawerOpen(true);
                    }}
                    startIcon={<DiscountIcon sx={{ color: "white" }} />}
                    variant="contained"
                  >
                    {t("discounts")}
                  </Button>
                )}
                {isThereADiscount && isDiscountWithExpireDate && !sellerIsMe && (
                  <Typography
                    color="text.secondary"
                    sx={{ my: "auto", ml: "auto" }}
                    variant="caption"
                  >
                    {t("discountExpires", {
                      days: dayjs(post?.coupons[0].expire).diff(dayjs(), "day"),
                    })}
                  </Typography>
                )}
                <Button
                  disableRipple={sellerIsMe}
                  onClick={() => {
                    if (post && !sellerIsMe) setPaymentDrawerOpen(true);
                  }}
                  sx={{
                    ml: !(isThereADiscount && isDiscountWithExpireDate && !sellerIsMe)
                      ? "auto"
                      : "",
                  }}
                  startIcon={<ShoppingCartRoundedIcon sx={{ color: "white" }} />}
                  variant="contained"
                  disabled={post?.is_paid && !sellerIsMe}
                >
                  {post && !isThereADiscount && !post.is_paid && priceFormatter.format(post.price)}
                  {post &&
                    !isThereADiscount &&
                    post.is_paid &&
                    `${priceFormatter.format(post.price)} (${t("is_paid")})`}
                  {post && isThereADiscount && (
                    <>
                      <Box
                        component={"span"}
                        sx={{ fontSize: 10, mr: 1, opacity: 0.5, textDecoration: "line-through" }}
                      >
                        {priceFormatter.format(post.price)}
                      </Box>
                      {priceFormatter.format(post.price - discount)} {post.is_paid && t("is_paid")}
                    </>
                  )}
                  {skeleton && <Skeleton width={50} variant="text" />}
                </Button>
              </CardActions>
            </Box>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={9}
          sx={{
            height: { xs: 1, md: "93vh", overflow: "auto" },
          }}
        >
          <ImageList
            gap={2}
            sx={{
              m: 1,
              borderRadius: 1,
              overflow: "hidden",
            }}
            variant="quilted"
            cols={2}
          >
            {post &&
              post.photos.map((src, index) => (
                <ImageListItem
                  sx={{
                    position: "relative",
                    borderRadius: 0.5,
                    cursor: "pointer",
                    overflow: "hidden",
                    img: { aspectRatio: index !== 0 ? 3 / 2 : 16 / 9 },
                  }}
                  key={index}
                  cols={
                    !isDesktop || index == 0 || (index == post.photos.length - 1 && index % 2 == 1)
                      ? 2
                      : 1
                  }
                  rows={index == 0 ? 3 : 1}
                >
                  <img
                    src={src}
                    onClick={() =>
                      setSearchParams((sp) => {
                        sp.set("img", src);
                        return sp;
                      })
                    }
                  />
                </ImageListItem>
              ))}
            {skeleton &&
              [...Array(3)].map((_, index) => (
                <ImageListItem
                  sx={{
                    position: "relative",
                    borderRadius: 0.5,
                    overflow: "hidden",
                    img: { aspectRatio: 3 / 2 },
                  }}
                  key={index}
                  cols={index == 0 ? 2 : 1}
                  rows={index == 0 ? 3 : 1}
                >
                  <Skeleton height={300} sx={{ borderRadius: 1 }} variant="rectangular" />
                </ImageListItem>
              ))}
          </ImageList>
        </Grid>
      </Grid>
      <CommentsDrawer
        open={commentsDrawerOpen}
        setOpen={setCommentsDrawerOpen}
        post={post ?? null}
      />
      <ImageDialog />
      {post && (
        <PaymentDialog setOpen={setPaymentDrawerOpen} open={paymentDrawerOpen} post={post} />
      )}
      {sellerIsMe && post && (
        <DiscountsDrawer open={discountsDrawerOpen} setOpen={setDiscountsDrawerOpen} post={post} />
      )}
      <ScrollRestoration
        getKey={({ pathname }) => {
          return pathname;
        }}
      />
    </>
  );
};
