import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Dialog, Stack } from "@mui/material";
import Submit from "components/buttons/Submit";
import DialogTitle from "components/forms/DialogTitle";
import TextField from "components/inputs/TextField";
import LabelValue from "components/typography/LabelValue";
import { useSnackbar } from "context/snackbarContext";
import z from "lib/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { parseResponseError } from "utils/apiHelpers";
import { getCurrencySign } from "utils/transforms";
import { userQueries } from "..";
import { User, WalletChargeBody } from "../api/type";
const schema: z.ZodType<WalletChargeBody> = z.object({
  amount: z.coerce.number().positive(),
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
  const snackbar = useSnackbar();
  const { control, reset, handleSubmit, setError } = useForm<WalletChargeBody>({
    resolver: zodResolver(schema),
    defaultValues: user ? { userId: user._id, amount: 0 } : defaultForm,
  });
  const onSubmit = (form: WalletChargeBody) => {
    deposit.mutate(form, {
      onSuccess: () => {
        snackbar({ severity: "success", message: t("success") });
        onClose();
        reset(defaultForm);
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
