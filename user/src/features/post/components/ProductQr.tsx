import { Box, Typography } from "@mui/material";
import { useIsMe } from "features/account";
import { EdgeDrawer, EdgeDrawerProps } from "features/layout";
import { Post } from "features/post";
import { useIsDesktop } from "hooks/useIsDesktop";
import { FC, useId } from "react";
import QRCode from "react-qr-code";
export type ProductQrProps = Omit<EdgeDrawerProps, "children"> & {
  post: Post;
  onClose: () => void;
};
export const ProductQr: FC<ProductQrProps> = ({ post, onClose, ...props }) => {
  const isDesktop = useIsDesktop();
  const isSeller = useIsMe(post.user.id);
  const value = JSON.stringify({ isDeliver: isSeller, product: post.id });
  const scrollId = useId();
  return (
    <EdgeDrawer
      {...props}
      keepMounted
      puller={false}
      id={scrollId}
      onClose={onClose}
      closeIcon={false}
      title={undefined}
      sx={{
        ".MuiDrawer-paper": {
          height: "100vh",
          width: isDesktop ? 400 : 1,
          pb: 5,
          pt: 1,
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "primary.900",
          textAlign: "center",
        }}
      >
        {props.title}
      </Typography>
      <Box width="fit-content" mx="auto" mt={10}>
        <QRCode size={256} value={value} />
      </Box>
    </EdgeDrawer>
  );
};
