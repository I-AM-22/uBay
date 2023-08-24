import { ArrowBack } from "@mui/icons-material";
import DiscountIcon from "@mui/icons-material/Discount";
import { Avatar, IconButton, Skeleton, Stack, Typography, useTheme } from "@mui/material";
import RouterLink from "components/links/RouterLink";
import { DiscountDialog } from "features/discount";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { chatQueries } from "..";

type user = {
  userData: string | undefined;
};
const UserInformation = ({ userData }: user) => {
  const [isDiscountOpen, setIsDialogOpen] = useState(false);
  const { id: chatId = "" } = useParams();
  const { data, isSuccess, isLoading } = chatQueries.useDetails(chatId);
  const theme = useTheme();

  if (isSuccess && data.customer._id == userData) {
    return (
      <Stack
        key={data.seller._id}
        direction="row"
        sx={{
          alignItems: "center",
        }}
      >
        <IconButton component={Link} to="/chats" sx={{ mr: 1 }}>
          <ArrowBack sx={{ scale: theme.direction === "ltr" ? "1" : "-1" }} />
        </IconButton>
        <Avatar src={data.seller.photo} alt={data.seller.name} />
        <Typography variant="h6" margin="0 12px" width="fit-content" color="text.primary">
          {data.seller.name} |{" "}
          {data.product && (
            <RouterLink noStyle to={`/posts/${data.product._id}`}>
              {data.product.title}
            </RouterLink>
          )}
        </Typography>
      </Stack>
    );
  } else if (isSuccess && data.seller._id == userData) {
    return (
      <Stack
        key={data.customer._id}
        direction="row"
        sx={{
          alignItems: "center",
        }}
      >
        <IconButton component={Link} to="/chats" sx={{ mr: 1 }}>
          <ArrowBack sx={{ scale: theme.direction === "ltr" ? "1" : "-1" }} />
        </IconButton>
        <Avatar src={data.customer.photo} alt={data.customer.name} />
        <Typography variant="h6" margin="0 12px" width="fit-content" color="text.primary">
          {data.customer.name} |{" "}
          {data.product && (
            <RouterLink noStyle to={`/posts/${data.product._id}`}>
              {data.product.title}
            </RouterLink>
          )}
        </Typography>
        <IconButton sx={{ ml: "auto" }} onClick={() => setIsDialogOpen(true)}>
          <DiscountIcon sx={{ color: "secondary.main" }} />
        </IconButton>
        <DiscountDialog
          onClose={() => setIsDialogOpen(false)}
          post={isDiscountOpen ? data.product : null}
          user={isDiscountOpen ? data.customer : null}
        />
      </Stack>
    );
  }
  return (
    <>
      {isLoading && (
        <Stack direction="row" alignItems="center">
          <IconButton component={Link} to="/chats" sx={{ mr: 1 }}>
            <ArrowBack sx={{ scale: theme.direction === "ltr" ? "1" : "-1" }} />
          </IconButton>
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" width={70} height={30} sx={{ ml: 1 }} />
        </Stack>
      )}
    </>
  );
};

export default UserInformation;
