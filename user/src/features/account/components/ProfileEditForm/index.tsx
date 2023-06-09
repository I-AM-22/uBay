import { zodResolver } from "@hookform/resolvers/zod";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Stack, alpha } from "@mui/system";
import { useQueryClient } from "@tanstack/react-query";
import TextField from "components/Inputs/TextField";
import Submit from "components/buttons/Submit";
import { useSnackbar } from "context/snackbarContext";
import { ProfilePhoto, User, UserEditBody, accountQueries } from "features/account";
import { EmailInput } from "features/auth";
import { queryStore } from "features/shared";
import z from "lib/zod";
import { ChangeEvent, FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { parseResponseError } from "utils/apiHelpers";
import profileEditSchema from "./validation";
export type ProfileEditFormProps = { initial: User | undefined };
export const ProfileEditForm: FC<ProfileEditFormProps> = ({ initial }) => {
  const { setValue, control, handleSubmit, setError } = useForm<z.infer<typeof profileEditSchema>>({
    resolver: zodResolver(profileEditSchema),
    defaultValues: { email: initial?.email, name: initial?.name, photo: undefined },
  });
  const navigate = useNavigate();
  const edit = accountQueries.useEdit();
  const [imageUrl, setImageUrl] = useState(initial?.photo);
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();
  const isSmOrMore = useMediaQuery(useTheme().breakpoints.up("sm"));
  const { t } = useTranslation("account", { keyPrefix: "profileEdit" });
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    setValue("photo", file);
    file && setImageUrl(URL.createObjectURL(file));
  };
  const onSubmit = async (body: UserEditBody) => {
    edit.mutate(body, {
      onSuccess: (data) => {
        queryClient.setQueryData(queryStore.account.profile.queryKey, data);
        navigate("/settings/profile");
      },
      onError: parseResponseError({ setFormError: setError, snackbar }),
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Paper
        elevation={isSmOrMore ? 1 : 0}
        sx={{
          width: { xs: 1, sm: 600 },
          mx: "auto",
          mt: { xs: 0, sm: 4 },
          borderRadius: { xs: 0, sm: 4 },
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            height: 200,
            width: "140%",
            position: "absolute",
            right: "50%",
            transform: "translateX(50%)",
            borderRadius: "0 0 100% 100%",
            background: (th) =>
              `linear-gradient(0deg, ${th.palette.primary["700"]}, ${th.palette.primary["500"]})`,
          }}
        />
        <Stack
          sx={{
            width: "fit-content",
            mx: "auto",
            position: "relative",
            alignItems: "center",
            mt: "150px",
            borderRadius: "50%",
          }}
        >
          <ProfilePhoto
            src={imageUrl}
            sx={{
              width: 100,
              height: 100,
              border: (th) => `3px solid ${th.palette.background.paper}`,
            }}
          />
          <IconButton
            sx={{
              position: "absolute",
              bottom: 10,
              left: -3,
              fontSize: 13,
              bgcolor: (th) => alpha(th.palette.primary[300], 0.3),
              p: 0.4,
            }}
            component={"label"}
            htmlFor="photo"
          >
            <EditIcon sx={{ fontSize: 20, color: "primary.900" }} />
          </IconButton>
          <input id={"photo"} accept="image/*" hidden type="file" onChange={handleImageUpload} />
        </Stack>
        <Grid container spacing={1} sx={{ px: 2, my: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              name={"name"}
              control={control}
              label={t("name")}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <EmailInput control={control} name="email" />
          </Grid>
          <Grid component={Stack} item xs={12} sx={{ flexDirection: "column" }}>
            <Divider sx={{ width: 1, mt: 1, mb: 2 }} />
            <Submit
              sx={{ alignSelf: "center" }}
              isSubmitting={edit.isLoading}
              endIcon={<SaveIcon sx={{ color: "white" }} />}
            />
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};
