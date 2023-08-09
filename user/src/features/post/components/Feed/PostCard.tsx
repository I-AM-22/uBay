import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import TelegramIcon from "@mui/icons-material/Telegram";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Chip,
  Divider,
  ImageList,
  ImageListItem,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Skeleton from "components/feedback/Skeleton";
import { UserAvatar } from "components/icons/UserAvatar";
import { OptionalWrap } from "components/layout/OptionalWrap";
import RouterLink from "components/links/RouterLink";
import { Post } from "features/post";
import Timeago from "lib/Timeago";
import i18n from "lib/i18next";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LikeButton } from "../LikeButton";
import { PostOptions } from "../PostOptions";
import axios from "axios";
import { accountQueries } from "features/account";
import { useNavigate } from "react-router-dom";
const priceFormatter = new Intl.NumberFormat(i18n.language, {
  style: "currency",
  currency: "SYP",
});
export type PostCardProps =
  | { post: Post; skeleton?: undefined; onCommentClick: () => void }
  | { post?: undefined; skeleton: true; onCommentClick?: undefined };
export const PostCard: FC<PostCardProps> = ({ post, onCommentClick, skeleton }) => {
  const navigate=useNavigate()
  const query = accountQueries.useProfile();
  const [open, setOpen] = useState(true);
  const [userData, setUserData] = useState("");
  const { t } = useTranslation("post");
  const token=localStorage.getItem("token")
  const handleRemove = () => {
    setOpen(false);
  };
  const addToChat=async()=>{
    if(post?.user.id==query.data?.id) return;
    try {
      const response = await axios.post('http://localhost:3000/api/v1/chats', {
        name: post?.title,
        product: post?.id,
        user: post?.user.id
      }, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${token}`
        }
      });
      console.log(response.data)
      console.log("chat",response.data.chat)
      console.log("data",response.data.data)
      {response.data.data?navigate(`/chats/${response.data.data.id}`):navigate(`/chats/${response.data.chat.id}`)}
      return response.data

    } catch (error) {
      throw error;
    }
  }
  return (
    <Slide direction="right" in={open} mountOnEnter appear={false} unmountOnExit>
      <Card>
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
                        clickable
                        label={post.category.name}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    )}
                    <Chip
                      clickable
                      color="secondary"
                      label={priceFormatter.format(post.price)}
                      size="small"
                    />
                  </Stack>
                </>
              )}
              {skeleton && <Skeleton widthRange={{ min: 40, max: 50 }} />}
            </Stack>
          }
          subheader={post && <Timeago date={post.createdAt} />}
        />
        <OptionalWrap
          Element={RouterLink}
          wrap={!!post}
          ElementProps={{ to: `/posts/${post?.id}`, noStyle: true }}
        >
          <CardContent sx={{ pt: 0 }}>
            {post && (
              <>
                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="body1">{post.content}</Typography>
              </>
            )}
            {skeleton && (
              <Stack>
                <Skeleton widthRange={{ min: 100, max: 170 }} />{" "}
                <Skeleton widthRange={{ min: 100, max: 150 }} />
                <Skeleton widthRange={{ min: 100, max: 150 }} />
              </Stack>
            )}
          </CardContent>
          {post && (
            <ImageList gap={2} sx={{ width: 1, my: 0, px: 0.5 }} variant="quilted" cols={2}>
              {post.photos.slice(0, 5).map((src, index) => (
                <ImageListItem
                  sx={{
                    position: "relative",
                    borderRadius: 0.5,
                    overflow: "hidden",
                    img: { aspectRatio: 3 / 2 },
                  }}
                  key={index}
                  cols={index == 0 || (index == post.photos.length - 1 && index % 2 == 1) ? 2 : 1}
                  rows={index == 0 ? 3 : 1}
                >
                  <img src={src} />
                  {index == 4 && post.photos.length > 5 && (
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
                    >{`${post.photos.length - 5}+`}</Box>
                  )}
                </ImageListItem>
              ))}
            </ImageList>
          )}
          {skeleton && (
            <Skeleton height={300} sx={{ mx: 2, borderRadius: 1 }} variant="rectangular" />
          )}
        </OptionalWrap>
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
        {post && <Divider sx={{ mx: 1, mt: 0.2 }} />}
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
              <Button onClick={addToChat}>
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
      </Card>
    </Slide>
  );
};
