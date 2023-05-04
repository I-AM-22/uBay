import { Box, Button, Divider, Theme, Typography } from "@mui/material";
import { Stack, SxProps } from "@mui/system";
import { EdgeDrawer } from "features/layout";
import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
const sx = {
  container: {
    gap: 1,
    height: "100%",
  },
  buttons: {
    pt: 2,
    flexDirection: "row",
    gap: 1,
    justifyContent: "center",
    button: {
      flexBasis: { xs: "40%", sm: "20%" },
    },
  },
} as const satisfies SxProps<Theme>;
export type FilterDrawerProps = {
  title: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: () => void;
  onCancel: () => void;
  onClear: () => void;
  children: ReactNode;
  submitText?: string;
};
export const FilterDrawer: FC<FilterDrawerProps> = ({
  open,
  setOpen,
  onClear,
  onCancel,
  onSubmit,
  title,
  children,
  submitText,
}) => {
  const { t } = useTranslation("layout", { keyPrefix: "filterDrawer" });

  return (
    <EdgeDrawer
      open={open}
      setOpen={setOpen}
      onClose={onCancel}
      title={
        <Typography variant="h6" textAlign={"center"} color="primary.main">
          {title}
        </Typography>
      }
    >
      <Stack sx={sx.container}>
        {children}
        <Box mt="auto">
          <Divider />
          <Stack sx={sx.buttons}>
            <Button variant="contained" onClick={onSubmit}>
              {submitText ?? t("submit")}
            </Button>
            <Button variant="outlined" onClick={onClear}>
              {t("cancel")}
            </Button>
          </Stack>
        </Box>
      </Stack>
    </EdgeDrawer>
  );
};
