import SaveIcon from "@mui/icons-material/Save";
import { Button, ButtonProps } from "@mui/material";
import { Box } from "@mui/system";
import Loading from "components/feedback/Loading";
import { RefObject, forwardRef } from "react";
import { useTranslation } from "react-i18next";
export type SubmitProps = {
  isSubmitting?: boolean;
  error?: boolean;
  loadingSize?: number;
  saveIcon?: boolean;
} & ButtonProps;

const loadingBySize = {
  large: 20,
  medium: 17,
  small: 15,
} as const;
const Submit = forwardRef(function Fr(
  {
    isSubmitting = false,
    error = false,
    disabled,
    loadingSize,
    children,
    sx,
    saveIcon,
    ...props
  }: SubmitProps,
  ref
) {
  const { t } = useTranslation();
  loadingSize = loadingBySize[props.size ?? "medium"];
  return (
    <Button
      ref={ref as RefObject<any>}
      disabled={isSubmitting || error || disabled}
      variant="contained"
      type="submit"
      {...{ endIcon: saveIcon ? <SaveIcon sx={{ color: "#fff" }} /> : props.endIcon }}
      {...props}
      sx={{
        ".MuiButton-endIcon, .MuiButton-startIcon": { opacity: isSubmitting ? 0 : 1 },
        position: "relative",
        bgcolor: error ? "error.main" : "",
        ...sx,
      }}
    >
      {isSubmitting && (
        <Box sx={{ position: "absolute", inset: 0 }}>
          <Loading color={props.color} sx={{ height: "100%" }} size={loadingSize} />
        </Box>
      )}
      <Box sx={{ opacity: isSubmitting ? 0 : 1 }}>{children ?? t("submit")}</Box>
    </Button>
  );
});
export default Submit;
