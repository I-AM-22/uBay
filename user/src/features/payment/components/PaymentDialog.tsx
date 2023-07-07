import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Box, Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Submit from "components/buttons/Submit";
import { useSnackbar } from "context/snackbarContext";
import { EdgeDrawer } from "features/layout";
import { Post } from "features/post";
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
  const isDesktop = useIsDesktop();
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    buy.mutate(
      { product: post.id },
      {
        onSuccess: () => {
          successSnackbar(t("success"));
          setOpen(false);
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
          <Typography color="secondary">{priceFormatter.format(post.price)}</Typography>
        </Stack>
        <Submit
          type="button"
          sx={{ mx: 1, fontSize: 18 }}
          endIcon={<ShoppingCartCheckoutIcon sx={{ color: "white" }} />}
          variant="contained"
          onClick={handleSubmit}
          disabled={buy.isLoading}
        >
          {t("submit")}
        </Submit>
      </Stack>
    </EdgeDrawer>
  );
};
