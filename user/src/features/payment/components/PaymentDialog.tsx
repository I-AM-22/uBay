import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Box, Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useQueryClient } from "@tanstack/react-query";
import Submit from "components/buttons/Submit";
import { useSnackbar } from "context/snackbarContext";
import dayjs from "dayjs";
import { EdgeDrawer } from "features/layout";
import { Post } from "features/post";
import { queryStore } from "features/shared";
import { useIsDesktop } from "hooks/useIsDesktop";
import useSuccessSnackbar from "hooks/useSuccessSnackbar";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { parseResponseError } from "utils/apiHelpers";
import { priceFormatter } from "utils/transforms";
import { paymentQueries } from "..";
type Props = {
  open: boolean;
  post: Post;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const PaymentDialog: FC<Props> = ({ setOpen, post, open }) => {
  const buy = paymentQueries.useBuy();
  const { t } = useTranslation("payment", { keyPrefix: "dialog" });
  const snackbar = useSnackbar();
  const successSnackbar = useSuccessSnackbar();
  const queryClient = useQueryClient();
  const isDesktop = useIsDesktop();
  const discount = post?.coupons[0]?.discount ?? 0;
  const discountDaysToExpire =
    (discount !== 0 && dayjs(post?.coupons[0].expire).diff(dayjs(), "day")) || 0;
  const isThereADiscount = discount !== 0 && discountDaysToExpire >= 0;
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    buy.mutate(
      { product: post._id, note: "." },
      {
        onSuccess: () => {
          successSnackbar(t("success"));
          setOpen(false);
          queryClient.invalidateQueries(queryStore.post.detail(post._id).queryKey);
          queryClient.invalidateQueries(queryStore.account.profile.queryKey);
        },
        onError: parseResponseError({ snackbar }),
      }
    );
  };
  return (
    <EdgeDrawer
      open={open}
      setOpen={setOpen}
      onClose={handleClose}
      sx={{
        ".MuiDrawer-paper": {
          borderTopLeftRadius: 20,
          [isDesktop ? "borderBottomLeftRadius" : "borderTopRightRadius"]: 20,
          width: isDesktop ? 400 : 1,
          pt: 1,
        },
      }}
    >
      <Stack gap={1} height={1} p={1} minHeight={400} maxWidth="100%">
        <Typography pl={2} color="primary" variant="h6">
          {t("title")}
        </Typography>
        <Divider />
        <Box component={"ul"} sx={{ pl: 2, listStyleType: '"- "' }}>
          <li>{t("list1")}</li>
          <li>{t("list2")}</li>
        </Box>
        <Stack direction={"row"} mx={1} mt="auto" justifyContent={"space-between"}>
          <Typography>{t("price")}</Typography>
          {!isThereADiscount && priceFormatter.format(post.price)}
          {post && isThereADiscount && (
            <Stack direction={"row"} flexWrap={"wrap"} sx={{ color: "secondary.main" }}>
              <Box
                component={"span"}
                sx={{ fontSize: 11, mr: 1, opacity: 0.5, textDecoration: "line-through" }}
              >
                {priceFormatter.format(post.price)}
              </Box>
              {priceFormatter.format(post.price - discount)}
            </Stack>
          )}
        </Stack>
        <Submit
          type="button"
          sx={{ mx: 1, fontSize: 18 }}
          endIcon={<ShoppingCartCheckoutIcon sx={{ color: "white" }} />}
          variant="contained"
          onClick={handleSubmit}
          isSubmitting={buy.isLoading}
        >
          {t("submit")}
        </Submit>
      </Stack>
    </EdgeDrawer>
  );
};
