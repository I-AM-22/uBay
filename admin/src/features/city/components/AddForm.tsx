import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, Fade, Grid } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import Submit from "components/buttons/Submit";
import DialogTitle from "components/forms/DialogTitle";
import TextField from "components/inputs/TextField";
import { useSnackbar } from "context/snackbarContext";
import { queryStore } from "features/shared";
import useAddSearchParams from "hooks/useAddSearchParams";
import useSuccessSnackbar from "hooks/useSuccessSnackbar";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { parseResponseError } from "utils/apiHelpers";
import { cityQueries } from "..";
import { CityAction } from "../api/type";
import { cityDefaultForm, citySchema } from "./validation";
export type AddFormProps = {};
export const AddForm: FC<AddFormProps> = ({}) => {
  const { isActive, clearAddParams } = useAddSearchParams();
  const { t } = useTranslation("city");
  const { control, reset, handleSubmit, setError } = useForm<CityAction>({
    resolver: zodResolver(citySchema),
    defaultValues: cityDefaultForm,
  });
  const queryClient = useQueryClient();
  const successSnackbar = useSuccessSnackbar();
  const snackbar = useSnackbar();

  const add = cityQueries.useAdd();
  const handleClose = () => {
    clearAddParams();
    reset(cityDefaultForm);
  };
  const onSubmit = async (body: CityAction) => {
    add.mutate(body, {
      onSuccess: () => {
        queryClient.invalidateQueries(queryStore.city.all._def);
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
              <TextField control={control} name="name" label={t(`form.name`)} required />
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
