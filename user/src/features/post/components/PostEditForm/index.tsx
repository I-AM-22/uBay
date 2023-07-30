import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useQueryClient } from "@tanstack/react-query";
import ImageUploadInput from "components/Inputs/ImageUploadInput";
import TextField from "components/Inputs/TextField";
import Submit from "components/buttons/Submit";
import { useSnackbar } from "context/snackbarContext";
import { CategoryAutocomplete } from "features/category";
import { postQueries } from "features/post";
import { queryStore } from "features/shared";
import { StoreAutocomplete } from "features/store";
import z from "lib/zod";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { parseResponseError } from "utils/apiHelpers";
import { detailsToForm, formToBody } from "./helpers";
import { Form } from "./type";
import postSchema, { postFormDefault } from "./validation";
export type PostEditFormProps = {};
export const PostEditForm: FC<PostEditFormProps> = ({}) => {
  const { id = "" } = useParams();
  const query = postQueries.useDetails(id);
  const {
    control,
    setValue,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<z.infer<typeof postSchema>>({
    resolver: zodResolver(postSchema),
    defaultValues: query.isSuccess ? detailsToForm(query.data) : postFormDefault,
  });
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const edit = postQueries.useEdit();
  const snackbar = useSnackbar();
  const { t } = useTranslation("post", { keyPrefix: "form" });
  const onSubmit = async (form: Form) => {
    edit.mutate(
      { id, ...formToBody(form) },
      {
        onSuccess: (post) => {
          queryClient.setQueryData(queryStore.post.detail(post.id).queryKey, post);
          queryClient.invalidateQueries(queryStore.post.all._def);
          navigate(`/posts/${post.id}`);
        },
        onError: parseResponseError({ setFormError: setError, snackbar }),
      }
    );
  };
  const handleImagesClear = () => {
    setValue("photos", []);
  };
  const handleImagesUpload = (files: File[]) => {
    setValue("photos", files);
  };
  useEffect(() => {
    if (query.data) reset(detailsToForm(query.data));
  }, [query.data, reset]);
  return (
    <Box p={2}>
      <Paper sx={{ mx: "auto", py: 3, px: 1, width: { xs: 1, sm: 600 } }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset disabled={query.isLoading}>
            <Stack gap={3}>
              <Stack gap={1}>
                <Typography color="primary.800" variant="h4" textAlign={"center"}>
                  {t("formEdit")}
                </Typography>
              </Stack>
              <Stack
                gap={2}
                sx={{
                  width: "80%",
                  mt: 5,
                  mx: "auto",
                }}
              >
                <TextField name="title" control={control} label={t("title")} />
                <TextField
                  name="content"
                  control={control}
                  label={t("content")}
                  multiline
                  minRows={3}
                />
                <TextField name="price" control={control} label={t("price")} type="number" />
                <CategoryAutocomplete control={control} name="category" label={t("category")} />
                <StoreAutocomplete control={control} name="store" label={t("store")} />
                <ImageUploadInput
                  initial={query.data?.photos}
                  key={String(query.isSuccess)}
                  multiple
                  onRemove={handleImagesClear}
                  onUpload={handleImagesUpload}
                  label={t("photos")}
                  name="photos"
                  error={errors.photos?.message}
                />
                <Submit
                  sx={{ px: 5, width: "fit-content", mx: "auto" }}
                  isSubmitting={edit.isLoading}
                >
                  {t("save")}
                </Submit>
              </Stack>
            </Stack>
          </fieldset>
        </form>
      </Paper>
    </Box>
  );
};
