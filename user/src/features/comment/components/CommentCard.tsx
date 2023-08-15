import { Card, CardContent, CardHeader, Fade, Slide, Stack, Typography } from "@mui/material";
import Skeleton from "components/feedback/Skeleton";
import { UserAvatar } from "components/icons/UserAvatar";
import dayjs from "dayjs";
import { useIsMe } from "features/account";
import Timeago from "lib/Timeago";
import { FC, useState } from "react";
import { Comment } from "../api/type";
import { CommentEdit } from "./CommentEdit";
import { CommentOptions } from "./CommentOptions";
export type CommentCardProps =
  | { comment: Comment; skeleton?: undefined; onDiscount: () => void; postAuthorId: string }
  | { skeleton: true; postAuthorId?: undefined; comment?: undefined; onDiscount?: undefined };
export const CommentCard: FC<CommentCardProps> = ({
  comment,
  postAuthorId,
  skeleton,
  onDiscount,
}) => {
  const [open, setOpen] = useState(true);
  const isCommentAuthorMe = useIsMe(comment?.user._id ?? "");
  const isPostAuthorMe = useIsMe(postAuthorId ?? "");
  const [editMode, setEditMode] = useState(false);
  const isNewCard = comment && dayjs(Date.now()).diff(comment.createdAt, "seconds") < 10;
  const handleRemove = () => {
    setOpen(false);
  };
  const handleEditClick = () => {
    setEditMode(true);
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
            action={
              comment && (
                <CommentOptions
                  showDiscount={!isCommentAuthorMe && isPostAuthorMe}
                  onDiscount={onDiscount}
                  onEdit={handleEditClick}
                  onRemove={handleRemove}
                  comment={comment}
                />
              )
            }
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
            {comment && !editMode && <Typography variant="body2">{comment.content}</Typography>}
            {comment && editMode && (
              <CommentEdit comment={comment} onDone={() => setEditMode(false)} />
            )}
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
