import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Dialog, Stack } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import Submit from "components/buttons/Submit";
import DialogTitle from "components/forms/DialogTitle";
import TextField from "components/inputs/TextField";
import LabelValue from "components/typography/LabelValue";
import { useSnackbar } from "context/snackbarContext";
import { queryStore } from "features/shared";
import i18n from "lib/i18next";
import z from "lib/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { parseResponseError } from "utils/apiHelpers";
import { getCurrencySign } from "utils/transforms";
import { userQueries } from "..";
import { User, WalletChargeBody } from "../api/type";
const schema: (balance: number) => z.ZodType<WalletChargeBody> = (balance) =>
  z.object({
    amount: z.coerce
      .number()
      .refine((amount) => (amount < 0 && amount + balance >= 0) || amount >= 0, {
        message: i18n.t("user:deposit.notEnoughMoney"),
      }),
    userId: z.string().nonempty(),
  });
const defaultForm: WalletChargeBody = {
  amount: 0,
  userId: "",
};
export type DepositDialogProps = { user: User | null; onClose: () => void };
export const DepositDialog: FC<DepositDialogProps> = ({ onClose, user }) => {
  const { t, i18n } = useTranslation("user", { keyPrefix: "deposit" });
  const deposit = userQueries.useDeposit();
  const queryClient = useQueryClient();
  const snackbar = useSnackbar();
  const { control, watch, reset, handleSubmit, setError } = useForm<WalletChargeBody>({
    resolver: zodResolver(schema(user?.wallet.available ?? 0)),
    defaultValues: defaultForm,
  });
  if (watch("userId") === "" && user?.id !== null) {
    setTimeout(() => reset({ userId: user?.id ?? "", amount: 0 }));
  }
  const onSubmit = (form: WalletChargeBody) => {
    deposit.mutate(form, {
      onSuccess: () => {
        snackbar({ severity: "success", message: t("success") });
        onClose();
        reset(defaultForm);
        queryClient.invalidateQueries(queryStore.user.all._def);
      },
      onError: parseResponseError({ snackbar, setError }),
    });
  };
  return (
    <Dialog open={!!user} onClose={onClose}>
      <Stack sx={{ width: 350, maxWidth: 1, px: 2, pb: 3 }}>
        <DialogTitle onClose={onClose}>{t("title")}</DialogTitle>
        <Stack gap={2} component="form" onSubmit={handleSubmit(onSubmit)}>
          <LabelValue label={t("user")}>{user?.name}</LabelValue>
          <TextField
            control={control}
            label={t("amount")}
            name="amount"
            type="number"
            InputProps={{
              endAdornment: <Box sx={{ ml: 1 }}>{getCurrencySign(i18n.language)}</Box>,
            }}
          />
          <Submit sx={{ mx: "auto", width: "fit-content" }} isSubmitting={deposit.isLoading} />
        </Stack>
      </Stack>
    </Dialog>
  );
};
