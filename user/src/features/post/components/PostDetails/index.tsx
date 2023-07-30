import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import TelegramIcon from "@mui/icons-material/Telegram";
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
import { useIsMe } from "features/account";
import { CommentsDrawer } from "features/comment";
import { PaymentDialog } from "features/payment";
import { Post } from "features/post";
import { useIsDesktop } from "hooks/useIsDesktop";
import Timeago from "lib/Timeago";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollRestoration, useNavigate, useSearchParams } from "react-router-dom";
import { priceFormatter } from "utils/transforms";
import { LikeButton } from "../LikeButton";
import { PostOptions } from "../PostOptions";
import { ImageDialog } from "./ImageDialog";

export type PostCardProps =
  | { post: Post; skeleton?: undefined }
  | { post?: undefined; skeleton: true };
export const PostDetails: FC<PostCardProps> = ({ post, skeleton }) => {
  const [, setSearchParams] = useSearchParams();
  const { t } = useTranslation("post");
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);
  const [commentsDrawerOpen, setCommentsDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const isDesktop = useIsDesktop();
  const sellerIsMe = useIsMe(post?.user.id ?? "");
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
              subheader={post && <Timeago date={post.createdAt} />}
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
                  <LikeButton postId={post.id} isLiked={post.likedByMe} />
                  <Button onClick={onCommentClick}>
                    <ChatBubbleIcon />
                  </Button>
                  <Button>
                    <TelegramIcon />
                  </Button>
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
              <CardActions>
                <Button
                  onClick={() => {
                    if (post && !sellerIsMe) setPaymentDialogOpen(true);
                  }}
                  startIcon={<ShoppingCartRoundedIcon sx={{ color: "white" }} />}
                  variant="contained"
                  sx={{ ml: "auto" }}
                  disabled={post?.is_paid && !sellerIsMe}
                >
                  {post && !post.is_paid && priceFormatter.format(post.price)}
                  {post && post.is_paid && `${priceFormatter.format(post.price)} (${t("is_paid")})`}
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
        onClose={() => {}}
        open={commentsDrawerOpen}
        setOpen={setCommentsDrawerOpen}
        post={post ?? null}
      />
      <ImageDialog />
      {post && (
        <PaymentDialog setOpen={setPaymentDialogOpen} open={paymentDialogOpen} post={post} />
      )}
      <ScrollRestoration
        getKey={({ pathname }) => {
          return pathname;
        }}
      />
    </>
  );
};