import { Box, BoxProps } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
type Props = BoxProps;
const LTR: FC<Props> = ({ ...props }) => {
  const { i18n } = useTranslation();

  return <Box {...props} sx={{ direction: i18n.language === "ar" ? "rtl" : "ltr", ...props.sx }} />;
};
export default LTR;
