import { Card, CardContent, CardHeader, Fade, Slide, Stack, Typography } from "@mui/material";
import Skeleton from "components/feedback/Skeleton";
import { UserAvatar } from "components/icons/UserAvatar";
import dayjs from "dayjs";
import Timeago from "lib/Timeago";
import { FC, useState } from "react";
import { Comment } from "../api/type";
import { CommentOptions } from "./CommentOptions";
export type CommentCardProps =
  | { comment: Comment; skeleton?: undefined }
  | { skeleton: true; comment?: undefined };
export const CommentCard: FC<CommentCardProps> = ({ comment, skeleton }) => {
  const [open, setOpen] = useState(true);
  const isNewCard = comment && dayjs(Date.now()).diff(comment.createdAt, "seconds") < 10;
  const handleRemove = () => {
    setOpen(false);
  };
  return (
    <Slide direction="right" in={open} mountOnEnter appear={false} unmountOnExit>
      <Fade appear={isNewCard} in={true} timeout={isNewCard ? 1000 : 0}>
        <Card
          sx={{
            bgcolor: isNewCard ? "primary.50" : "white",
          }}
        >
          <CardHeader
            avatar={<UserAvatar src={comment?.user.photo} isLoading={skeleton} />}
            action={comment && <CommentOptions onCommentRemove={handleRemove} comment={comment} />}
            title={
              <Stack
                pt={0.4}
                pr={0.25}
                flexWrap={"wrap"}
                direction="row"
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                {comment && <Typography>{comment.user.name}</Typography>}
                {skeleton && <Skeleton widthRange={{ min: 40, max: 50 }} />}
              </Stack>
            }
            subheader={comment && <Timeago date={comment.createdAt} />}
          />

          <CardContent sx={{ pt: 0 }}>
            {comment && <Typography variant="body2">{comment.content}</Typography>}
            {skeleton && (
              <Stack>
                <Skeleton widthRange={{ min: 60, max: 130 }} />
                <Skeleton widthRange={{ min: 70, max: 130 }} />
              </Stack>
            )}
          </CardContent>
        </Card>
      </Fade>
    </Slide>
  );
};
