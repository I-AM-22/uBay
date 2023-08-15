import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, Fade, Grid } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import Submit from "components/buttons/Submit";
import DialogTitle from "components/forms/DialogTitle";
import TextField from "components/inputs/TextField";
import { useSnackbar } from "context/snackbarContext";
import { CategoryAction, categoryQueries } from "features/category";
import { queryStore } from "features/shared";
import useEditSearchParams from "hooks/useEditSearchParams";
import useSuccessSnackbar from "hooks/useSuccessSnackbar";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { parseResponseError } from "utils/apiHelpers";
import { categoryDefaultForm, categorySchema } from "./validation";
export type EditFormProps = {};
export const EditForm: FC<EditFormProps> = ({}) => {
  const { isActive, clearEditParams, id = "" } = useEditSearchParams();
  const { t } = useTranslation("category");
  const query = categoryQueries.useDetails(id);
  const { control, reset, handleSubmit, setError } = useForm<CategoryAction>({
    resolver: zodResolver(categorySchema),

    defaultValues: query.data ?? categoryDefaultForm,
  });
  const queryClient = useQueryClient();
  const successSnackbar = useSuccessSnackbar();
  const snackbar = useSnackbar();
  const mutation = categoryQueries.useEdit();
  const handleClose = () => {
    clearEditParams();
    reset(categoryDefaultForm);
  };
  const onSubmit = async (body: CategoryAction) => {
    mutation.mutate(
      { _id: id, ...body },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(queryStore.category.all._def);
          queryClient.invalidateQueries(queryStore.category.details(id));
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
                <TextField control={control} name="name" label={t(`form.name`)} required />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  control={control}
                  name="description"
                  label={t(`form.description`)}
                  required
                />
              </Grid>
              <Grid item xs={12} justifyContent="center" display="flex" mt={3}>
                <Submit isSubmitting={mutation.isLoading} />
              </Grid>
            </Grid>
          </fieldset>
        </form>
      </DialogContent>
    </Dialog>
  );
};
