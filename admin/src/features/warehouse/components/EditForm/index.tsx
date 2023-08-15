import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, Fade, Grid } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import Submit from "components/buttons/Submit";
import DialogTitle from "components/forms/DialogTitle";
import TextField from "components/inputs/TextField";
import { useSnackbar } from "context/snackbarContext";
import { CityAutocomplete } from "features/city";
import { queryStore } from "features/shared";
import { warehouseQueries } from "features/warehouse";
import useEditSearchParams from "hooks/useEditSearchParams";
import useSuccessSnackbar from "hooks/useSuccessSnackbar";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { parseResponseError } from "utils/apiHelpers";
import { warehouseDefaultForm, warehouseSchema } from "../validation";
import { formToBody } from "./helpers";
import { Form } from "./type";
export type EditFormProps = {};
export const EditForm: FC<EditFormProps> = ({}) => {
  const { isActive, clearEditParams, id = "" } = useEditSearchParams();
  const { t } = useTranslation("warehouse");
  const query = warehouseQueries.useDetails(id);
  const { control, reset, handleSubmit, setError } = useForm<Form>({
    resolver: zodResolver(warehouseSchema),

    defaultValues: query.data ?? warehouseDefaultForm,
  });
  const queryClient = useQueryClient();
  const successSnackbar = useSuccessSnackbar();
  const snackbar = useSnackbar();
  const edit = warehouseQueries.useEdit();
  const handleClose = () => {
    clearEditParams();
    reset(warehouseDefaultForm);
  };
  const onSubmit = async (form: Form) => {
    edit.mutate(
      { _id: id, ...formToBody(form) },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(queryStore.warehouse.all._def);
          queryClient.invalidateQueries(queryStore.warehouse.details(id));
          handleClose();
          successSnackbar(t("message.success.edit"));
        },
        onError: parseResponseError({ snackbar, setError }),
      }
    );
  };
  useEffect(() => {
    if (query.data) reset(query.data);
  }, [query.data, reset]);

  return (
    <Dialog open={isActive} onClose={handleClose} fullWidth maxWidth={"xs"}>
      <Fade in={isActive} timeout={0}>
        <DialogTitle onClose={handleClose} fontSize={22} color="primary" skeleton={query.isLoading}>
          {query.isSuccess && t("edit", { name: query.data.name })}
        </DialogTitle>
      </Fade>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset disabled={query.isLoading}>
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
                <Submit isSubmitting={edit.isLoading} />
              </Grid>
            </Grid>
          </fieldset>
        </form>
      </DialogContent>
    </Dialog>
  );
};
