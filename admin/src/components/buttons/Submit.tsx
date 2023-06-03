import { Button, ButtonProps, SxProps } from "@mui/material";
import { Box } from "@mui/system";
import Loading from "components/feedback/Loading";
import { RefObject, forwardRef } from "react";
import { useTranslation } from "react-i18next";
export type SubmitProps = {
  isSubmitting?: boolean;
  error?: boolean;
  loadingSize?: number;
} & ButtonProps;
const defaultSx: SxProps = {
  fontSize: { xs: 15, sm: 20 },
  minWidth: 110,
};
const Submit = forwardRef(function Fr(
  {
    isSubmitting = false,
    error = false,
    disabled,
    loadingSize = 30,
    children,
    sx,
    ...props
  }: SubmitProps,
  ref
) {
  const { t } = useTranslation();
  return (
    <Button
      ref={ref as RefObject<any>}
      disabled={isSubmitting || error || disabled}
      variant="contained"
      type="submit"
      {...props}
      sx={{ ...defaultSx, position: "relative", bgcolor: error ? "error.main" : "", ...sx }}
    >
      {isSubmitting && (
        <Box sx={{ position: "absolute", inset: 0 }}>
          <Loading stackProps={{ sx: { height: "100%" } }} size={loadingSize} />
        </Box>
      )}
      <Box sx={{ opacity: isSubmitting ? 0 : 1 }}>{children ?? t("submit")}</Box>
    </Button>
  );
});
export default Submit;
