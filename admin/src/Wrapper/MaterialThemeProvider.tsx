import { ThemeProvider } from "@mui/material";
import theme from "context/themeContext";
import { FC, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
const MaterialThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { i18n } = useTranslation();
  return <ThemeProvider theme={theme(i18n.language)}>{children}</ThemeProvider>;
};
export default MaterialThemeProvider;
