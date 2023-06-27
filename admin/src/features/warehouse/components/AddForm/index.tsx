import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, Fade, Grid } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import Submit from "components/buttons/Submit";
import DialogTitle from "components/forms/DialogTitle";
import TextField from "components/inputs/TextField";
import { useSnackbar } from "context/snackbarContext";
import { CityAutocomplete } from "features/city";
import { queryStore } from "features/shared";
import useAddSearchParams from "hooks/useAddSearchParams";
import useSuccessSnackbar from "hooks/useSuccessSnackbar";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { parseResponseError } from "utils/apiHelpers";
import { warehouseQueries } from "../..";
import { warehouseDefaultForm, warehouseSchema } from "../validation";
import { formToBody } from "./helpers";
import { Form } from "./type";
export type AddFormProps = {};
export const AddForm: FC<AddFormProps> = ({}) => {
  const { isActive, clearAddParams } = useAddSearchParams();
  const { t } = useTranslation("warehouse");
  const { control, reset, handleSubmit, setError } = useForm<Form>({
    resolver: zodResolver(warehouseSchema),
    defaultValues: warehouseDefaultForm,
  });
  const queryClient = useQueryClient();
  const successSnackbar = useSuccessSnackbar();
  const snackbar = useSnackbar();

  const add = warehouseQueries.useAdd();
  const handleClose = () => {
    clearAddParams();
    reset(warehouseDefaultForm);
  };
  const onSubmit = async (form: Form) => {
    add.mutate(formToBody(form), {
      onSuccess: () => {
        queryClient.invalidateQueries(queryStore.warehouse.all._def);
        handleClose();
        successSnackbar(t("message.success.add"));
      },
      onError: parseResponseError({ snackbar, setError }),
    });
  };

  return (
    <Dialog open={isActive} onClose={handleClose} fullWidth maxWidth={"xs"}>
      <Fade in={isActive} timeout={0}>
        <DialogTitle onClose={handleClose} fontSize={30} color="primary">
          {t("add")}
        </DialogTitle>
      </Fade>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={1} my={1}>
            <Grid item xs={12}>
              <TextField control={control} name="name" label={t(`form.name`)} />
            </Grid>
            <Grid item xs={12}>
              <CityAutocomplete control={control} name="city" label={t(`form.city`)} />
            </Grid>
            <Grid item xs={12}>
              <TextField control={control} name="address" label={t(`form.address`)} />
            </Grid>
            <Grid item xs={12} justifyContent="center" display="flex" mt={3}>
              <Submit isSubmitting={add.isLoading} />
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
};
