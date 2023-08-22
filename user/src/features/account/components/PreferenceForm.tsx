import { Box, LinearProgress, Paper } from "@mui/material";
import { Stack } from "@mui/system";
import { useQueryClient } from "@tanstack/react-query";
import Submit from "components/buttons/Submit";
import { useSnackbar } from "context/snackbarContext";
import { CategoryAutocomplete, CategorySelect } from "features/category";
import { CityAutocomplete, CitySelect } from "features/city";
import { queryStore } from "features/shared";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { parseResponseError } from "utils/apiHelpers";
import { FavoriteUpdate, accountQueries } from "..";
export type Form = {
  favoriteCategories: CategorySelect[];
  favoriteCities: CitySelect[];
};
export type PreferenceFormProps = {};
export const PreferenceForm: FC<PreferenceFormProps> = ({}) => {
  const query = accountQueries.useProfile();
  const [isLoaded, setIsLoaded] = useState(false);
  const { control, reset, handleSubmit, setError } = useForm<Form>({
    defaultValues: {
      favoriteCategories: [],
      favoriteCities: [],
    },
  });
  const queryClient = useQueryClient();
  const post = accountQueries.useUpdateFavorite();
  const snackbar = useSnackbar();
  const { t } = useTranslation("account", { keyPrefix: "favorites" });
  const onSubmit = async (form: Form) => {
    post.mutate(formToBody(form), {
      onSuccess: () => {
        queryClient.invalidateQueries(queryStore.account.profile);
        queryClient.invalidateQueries(queryStore.post.all._def);
        snackbar({ message: t("success"), severity: "success" });
      },
      onError: parseResponseError({ setFormError: setError, snackbar }),
    });
  };
  useEffect(() => {
    if (query.isSuccess && !isLoaded) {
      setIsLoaded(true);
      reset({
        favoriteCategories: query.data.favoriteCategories,
        favoriteCities: query.data.favoriteCities,
      });
    }
  }, [isLoaded, query, reset, setIsLoaded]);
  return (
    <Box p={2}>
      <Paper
        sx={{
          position: "relative",
          overflow: "hidden",
          mx: "auto",
          py: 3,
          px: 1,
          width: { xs: 1, sm: 600 },
        }}
      >
        {query.isLoading && (
          <LinearProgress
            variant="indeterminate"
            sx={{ position: "absolute", top: 0, left: 0, right: 0, padding: 0.2 }}
            color="primary"
          />
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap={3}>
            <Stack
              gap={2}
              sx={{
                width: "80%",
                mt: 5,
                mx: "auto",
                ".MuiChip-root": {
                  bgcolor: "secondary.main",
                  color: "white",
                  ".MuiSvgIcon-root": {
                    color: "#fff",
                  },
                },
              }}
            >
              <CategoryAutocomplete
                disabled={query.isLoading}
                multiple
                control={control}
                name="favoriteCategories"
                label={t("favoriteCategories")}
              />
              <CityAutocomplete
                disabled={query.isLoading}
                multiple
                control={control}
                name="favoriteCities"
                label={t("favoriteCities")}
              />
              <Submit
                saveIcon
                size="large"
                sx={{ width: "fit-content", mx: "auto" }}
                isSubmitting={post.isLoading}
              >
                {t("save")}
              </Submit>
            </Stack>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};
export function formToBody(form: Form): FavoriteUpdate {
  return {
    favoriteCategories: form.favoriteCategories.map((category) => category._id),
    favoriteCities: form.favoriteCities.map((city) => city._id),
  };
}
