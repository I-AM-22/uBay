import { zodResolver } from "@hookform/resolvers/zod";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BusinessIcon from "@mui/icons-material/Business";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import {
  Box,
  Dialog,
  DialogContent,
  Fade,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  alpha,
} from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import Submit from "components/buttons/Submit";
import DialogTitle from "components/forms/DialogTitle";
import TextField from "components/inputs/TextField";
import { useSnackbar } from "context/snackbarContext";
import { employeeQueries } from "features/employee";
import { EmailInput, PasswordInput, queryStore } from "features/shared";
import { WarehouseAutocomplete } from "features/warehouse";
import useEditSearchParams from "hooks/useEditSearchParams";
import useSuccessSnackbar from "hooks/useSuccessSnackbar";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { parseResponseError } from "utils/apiHelpers";
import { detailsToForm, formToBody } from "./helpers";
import { Form } from "./type";
import { employeeDefaultForm, employeeEditSchema } from "./validation";
export type EditFormProps = {};
export const EditForm: FC<EditFormProps> = ({}) => {
  const { isActive, clearEditParams, id = "" } = useEditSearchParams();
  const { t } = useTranslation("employee");
  const query = employeeQueries.useDetails(id);
  const [imageUrl, setImageUrl] = useState<string | undefined>(
    query.data?.photo
  );
  const { control, setValue, reset, handleSubmit, setError } = useForm<Form>({
    resolver: zodResolver(employeeEditSchema),

    defaultValues: query.isSuccess
      ? detailsToForm(query.data)
      : employeeDefaultForm,
  });
  const queryClient = useQueryClient();
  const successSnackbar = useSuccessSnackbar();
  const snackbar = useSnackbar();
  const edit = employeeQueries.useEdit();
  const handleClose = () => {
    clearEditParams();
    setImageUrl(undefined);
    reset(employeeDefaultForm);
  };
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    setValue("photo", file);
    file && setImageUrl(URL.createObjectURL(file));
  };
  const handleImageClear = () => {
    setValue("photo", undefined);
    setImageUrl(undefined);
  };
  const onSubmit = async (form: Form) => {
    edit.mutate(
      { _id: id, ...formToBody(form) },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(queryStore.employee.all._def);
          queryClient.invalidateQueries(queryStore.employee.details(id));
          handleClose();
          successSnackbar(t("message.success.edit"));
        },
        onError: parseResponseError({ snackbar, setError }),
      }
    );
  };
  useEffect(() => {
    if (query.data) {
      reset(detailsToForm(query.data));
      setImageUrl(query.data.photo);
    }
  }, [query.data, reset]);

  return (
    <Dialog open={isActive} onClose={handleClose} fullWidth maxWidth={"sm"}>
      <Fade in={isActive} timeout={0}>
        <DialogTitle
          onClose={handleClose}
          fontSize={22}
          color="primary"
          skeleton={query.isLoading}
        >
          {query.isSuccess && t("edit", { name: query.data.name })}
        </DialogTitle>
      </Fade>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset disabled={query.isLoading}>
            <Grid
              container
              spacing={3}
              justifyContent={"center"}
              alignItems={"start"}
            >
              <Grid item container spacing={1} xs={7}>
                <Grid item xs={12}>
                  <TextField
                    control={control}
                    name="name"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                    label={t(`form.name`)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <WarehouseAutocomplete
                    control={control}
                    name="store"
                    label={t(`form.store`)}
                  />
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
                <Grid item xs={12}>
                  <TextField
                    control={control}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <BusinessIcon />
                        </InputAdornment>
                      ),
                    }}
                    name="address"
                    label={t(`form.address`)}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} md={5} sx={{ order: { xs: -1, md: 0 } }}>
                <Stack
                  sx={{
                    position: "relative",
                    width: { xs: 0.5, md: 1 },
                    mx: "auto",
                  }}
                >
                  <Box
                    component={imageUrl ? "img" : AccountBoxIcon}
                    src={imageUrl}
                    sx={{
                      border: (th) => `3px solid ${th.palette.primary.main}`,
                      borderRadius: 2,
                      width: 1,
                      minHeight: 200,
                      objectFit: "contain",
                      aspectRatio: "1",
                      path: { color: "grey.500" },
                    }}
                  />
                  <IconButton
                    component={"label"}
                    htmlFor="photo"
                    sx={{
                      position: "absolute",
                      bottom: 7,
                      left: 7,
                      bgcolor: (th) => alpha(th.palette.primary[300], 0.3),
                      p: 1,
                    }}
                  >
                    <EditIcon sx={{ color: "secondary.main", fontSize: 30 }} />
                  </IconButton>
                  {imageUrl && (
                    <IconButton
                      onClick={handleImageClear}
                      component={"label"}
                      htmlFor="photo"
                      sx={{
                        position: "absolute",
                        top: 7,
                        right: 7,
                        bgcolor: (th) => alpha(th.palette.secondary[200], 0.3),
                        p: 1,
                      }}
                    >
                      <CloseIcon sx={{ color: "primary.main", fontSize: 20 }} />
                    </IconButton>
                  )}
                  <input
                    id={"photo"}
                    accept="image/*"
                    hidden
                    type="file"
                    onChange={handleImageUpload}
                  />
                </Stack>
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
