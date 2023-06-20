import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useQueryClient } from "@tanstack/react-query";
import ImageUploadInput from "components/Inputs/ImageUploadInput";
import TextField from "components/Inputs/TextField";
import Submit from "components/buttons/Submit";
import { useSnackbar } from "context/snackbarContext";
import { CategoryAutocomplete } from "features/category";
import { Post, postQueries } from "features/post";
import { queryStore } from "features/shared";
import z from "lib/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { parseResponseError } from "utils/apiHelpers";
import { fromFormToBody } from "./helpers";
import { PostForm } from "./type";
import postSchema, { postFormDefault } from "./validation";
export type PostFormProps = { edit?: Post };
export const PostActionForm: FC<PostFormProps> = ({}) => {
  const {
    control,
    setValue,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<z.infer<typeof postSchema>>({
    resolver: zodResolver(postSchema),
    defaultValues: postFormDefault,
  });
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const post = postQueries.usePost();
  const snackbar = useSnackbar();
  const { t } = useTranslation("post", { keyPrefix: "form" });
  const onSubmit = async (form: PostForm) => {
    console.log(typeof form.price);
    post.mutate(fromFormToBody(form), {
      onSuccess: (post) => {
        queryClient.setQueryData(queryStore.post.detail(post.id).queryKey, post);
        queryClient.invalidateQueries(queryStore.post.all._def);
        navigate(`/posts/${post.id}`);
      },
      onError: parseResponseError({ setFormError: setError, snackbar }),
    });
  };
  const handleImagesClear = () => {
    setValue("photos", []);
  };
  const handleImagesUpload = (files: File[]) => {
    setValue("photos", files);
  };
  return (
    <Box p={2}>
      <Paper sx={{ mx: "auto", py: 3, px: 1, width: { xs: 1, sm: 600 } }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap={3}>
            <Stack gap={1}>
              <Typography color="primary.800" variant="h4" textAlign={"center"}>
                {t("title")}
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
              <TextField
                name="content"
                control={control}
                label={t("content")}
                multiline
                minRows={3}
              />
              <TextField name="price" control={control} label={t("price")} type="number" />
              <CategoryAutocomplete control={control} name="category" label={t("category")} />
              <ImageUploadInput
                multiple
                onRemove={handleImagesClear}
                onUpload={handleImagesUpload}
                label={t("photos")}
                name="photos"
                error={errors.photos?.message}
              />
              <Submit
                sx={{ px: 5, width: "fit-content", mx: "auto" }}
                isSubmitting={post.isLoading}
              >
                {t("create")}
              </Submit>
            </Stack>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};
