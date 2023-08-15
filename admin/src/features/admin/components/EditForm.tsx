import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, Fade, Grid } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import Submit from "components/buttons/Submit";
import DialogTitle from "components/forms/DialogTitle";
import TextField from "components/inputs/TextField";
import { useSnackbar } from "context/snackbarContext";
import { EmailInput, PasswordInput, queryStore } from "features/shared";
import useEditSearchParams from "hooks/useEditSearchParams";
import useSuccessSnackbar from "hooks/useSuccessSnackbar";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { parseResponseError } from "utils/apiHelpers";
import { AdminActionBody, adminQueries } from "..";
import { adminAddSchema, adminDefaultForm } from "./validation";
export type EditFormProps = {};
export const EditForm: FC<EditFormProps> = ({}) => {
  const { isActive, clearEditParams, id = "" } = useEditSearchParams();
  const { t } = useTranslation("admin");
  const query = adminQueries.useDetails(id);
  const { control, reset, handleSubmit, setError } = useForm<AdminActionBody>({
    resolver: zodResolver(adminAddSchema),

    defaultValues: query.data ?? adminDefaultForm,
  });
  const queryClient = useQueryClient();
  const successSnackbar = useSuccessSnackbar();
  const snackbar = useSnackbar();
  const edit = adminQueries.useEdit();
  const handleClose = () => {
    clearEditParams();
    reset(adminDefaultForm);
  };
  const onSubmit = async (body: AdminActionBody) => {
    edit.mutate(
      { _id: id, ...body },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(queryStore.admin.all._def);
          queryClient.invalidateQueries(queryStore.admin.details(id));
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
                <EmailInput control={control} name="email" />
              </Grid>
              <Grid item xs={12}>
                <PasswordInput
                  control={control}
                  name="password"
                  InputProps={{ autoComplete: "off" }}
                />
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
