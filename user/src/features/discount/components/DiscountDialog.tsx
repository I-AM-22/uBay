import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, Typography, darken } from "@mui/material";
import { Stack } from "@mui/system";
import { useQueryClient } from "@tanstack/react-query";
import TextField from "components/Inputs/TextField";
import Submit from "components/buttons/Submit";
import DialogTitle from "components/forms/DialogTitle";
import { UserAvatar } from "components/icons/UserAvatar";
import { useSnackbar } from "context/snackbarContext";
import dayjs from "dayjs";
import { User } from "features/account";
import { DiscountCreateBody, discountQueries } from "features/discount";
import { Post } from "features/post";
import { queryStore } from "features/shared";
import i18n from "lib/i18next";
import z from "lib/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { isBackendError, parseResponseError } from "utils/apiHelpers";
import { priceFormatter } from "utils/transforms";
export type Form = {
  product: string;
  user: string;
  expire?: Date | undefined;
  discount: number;
};
const schema: (price: number) => z.ZodType<Form> = (price) =>
  z.object({
    product: z.string(),
    user: z.string(),
    discount: z.coerce
      .number()
      .positive()
      .max(price - 1, i18n.t("discount:form.discountCannotBeEqualToPrice")),
    expire: z.date().min(dayjs().add(1, "day").toDate()).optional(),
  });
export type DiscountFormProps = {
  post: Pick<Post, "_id" | "price" | "title">;
  user: Pick<User, "_id" | "name" | "photo">;
  onSuccess: () => void;
};
export const DiscountForm: FC<DiscountFormProps> = ({ post, user, onSuccess }) => {
  const { watch, setValue, control, handleSubmit, setError } = useForm<Form>({
    resolver: zodResolver(schema(post.price)),
    defaultValues: {
      discount: 0,
      expire: undefined,
      product: post._id,
      user: user._id,
    },
  });
  const queryClient = useQueryClient();
  const createDiscount = discountQueries.useCreate();
  const snackbar = useSnackbar();
  const { t } = useTranslation("discount", { keyPrefix: "form" });
  const onSubmit = async (form: Form) => {
    createDiscount.mutate(fromFormToBody(form), {
      onSuccess: () => {
        queryClient.invalidateQueries(queryStore.discount.byProduct(post._id).queryKey);
        onSuccess();
        snackbar({ severity: "success", message: t("success") });
      },
      onError: (err) => {
        if (isBackendError(err)) {
          if (
            err?.response?.data.type === "form" &&
            err.response.data.errors[0].path[0] === "product"
          ) {
            snackbar({ severity: "error", message: t("productError") });
            return;
          }
        }
        return parseResponseError({ snackbar, setFormError: setError })(err);
      },
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={1} p={3} width={400} minWidth="fit-content" maxWidth={1}>
        <Typography color="primary.800" variant="h6" textAlign={"center"}>
          {t("title", { product: post.title })}
        </Typography>
        <Stack
          gap={2}
          sx={{
            width: "80%",
            mt: 3,
            mx: "auto",
          }}
        >
          <Typography>{t("user")}</Typography>
          <Stack
            alignItems={"center"}
            direction={"row"}
            gap={2}
            sx={{
              p: 1,
              borderRadius: 2,
              bgcolor: darken("#fff", 0.05),
            }}
          >
            <UserAvatar sx={{ width: 50, height: 50 }} src={user.photo} />
            <Typography fontSize={17}>{user.name}</Typography>
          </Stack>
          <TextField
            name="discount"
            control={control}
            label={t("discount")}
            type="number"
            helperText={t("priceWillBecome", {
              price: priceFormatter.format(post.price - watch("discount")),
            })}
          />
          <TextField
            type="date"
            value={watch("expire") && dayjs(watch("expire")).format("YYYY-MM-DD")}
            control={control}
            onChange={(event) =>
              setValue("expire", event.target.value ? new Date(event.target.value) : undefined)
            }
            InputLabelProps={{ shrink: true }}
            label={t("expire")}
            name="expire"
          />
          <Submit
            sx={{ width: "fit-content", mx: "auto" }}
            size="medium"
            isSubmitting={createDiscount.isLoading}
          >
            {t("create")}
          </Submit>
        </Stack>
      </Stack>
    </form>
  );
};
export function fromFormToBody(form: Form): DiscountCreateBody {
  return { ...form, expire: form.expire?.toString() };
}

export type DiscountDialogProps = {
  user: Pick<User, "_id" | "name" | "photo"> | null;
  post: Pick<Post, "_id" | "price" | "title"> | null;
  onClose: () => void;
};
export const DiscountDialog: FC<DiscountDialogProps> = ({ post, user, onClose }) => {
  return (
    <Dialog open={!!user} onClose={onClose}>
      <DialogTitle onClose={onClose} />
      {user && post && <DiscountForm user={user} onSuccess={onClose} post={post} />}
    </Dialog>
  );
};
