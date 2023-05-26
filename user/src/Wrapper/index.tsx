import { CssBaseline } from "@mui/material";
import MaterialThemeProvider from "Wrapper/MaterialThemeProvider";
import "lib/i18next";
import { FC } from "react";
import Direction from "./Direction";
import LanguageProvider from "./LanguageProvider";
import { ProfileProvider } from "./ProfileProvider";
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
                <ProfileProvider>
                  <CssBaseline />
                  {children}
                </ProfileProvider>
              </TopBarProgressProvider>
            </Direction>
          </SnackbarProvider>
        </QueryClientContext>
      </MaterialThemeProvider>
    </LanguageProvider>
  );
};
export default Wrapper;
