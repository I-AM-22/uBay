import { CssBaseline } from "@mui/material";
import { FC } from "react";
import "../lib/i18next";
import MaterialThemeProvider from "../theme/ThemeContext";
import Direction from "./Direction";
import LanguageProvider from "./LanguageProvider";
import QueryClientContext from "./QueryClient";
import SnackbarProvider from "./SnackbarProvider";
import TopBarProgressProvider from "./TopBarProgressProvider";
const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LanguageProvider>
      <MaterialThemeProvider>
        <QueryClientContext>
          <SnackbarProvider>
            <Direction>
              <TopBarProgressProvider>
                <CssBaseline />
                {children}
              </TopBarProgressProvider>
            </Direction>
          </SnackbarProvider>
        </QueryClientContext>
      </MaterialThemeProvider>
    </LanguageProvider>
  );
};
export default Wrapper;
