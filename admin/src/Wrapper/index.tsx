import { CssBaseline } from "@mui/material";
import "lib/i18next";
import { FC } from "react";
import MaterialThemeProvider from "Wrapper/MaterialThemeProvider";
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
