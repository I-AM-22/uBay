import { Box, IconButton, Stack } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchInput from "components/Inputs/SearchInput";
import { useIsDesktop } from "hooks/useIsDesktop";
import { FC, forwardRef, useEffect, useRef, useState } from "react";

import RouterLink from "components/links/RouterLink";
import { ProfilePhoto } from "features/account";
import { useLocation } from "react-router-dom";
import { AppBarNavigator } from "./AppBarNavigator";
import { HideOnScroll } from "./HideOnScroll";
const SEARCH_ROUTES = [{ href: "/" }];
export type AppBarProps = MuiAppBarProps;
export const AppBar: FC<AppBarProps> = forwardRef(function Fr(
  { children, ...props }: AppBarProps,
  ref
) {
  const appBarRef = useRef<HTMLElement | null>(null);
  const pathname = useLocation().pathname;
  const showSearch = SEARCH_ROUTES.some((route) => route.href === pathname);

  const [appBarHeight, setAppBarHeight] = useState(0);
  const isDesktop = useIsDesktop();
  useEffect(() => {
    setAppBarHeight(appBarRef.current?.offsetHeight ?? 20);
  }, [appBarRef.current?.offsetHeight]);
  return (
    <>
      <HideOnScroll in={!isDesktop} direction="down">
        <MuiAppBar
          elevation={1}
          ref={(el) => {
            appBarRef.current = el;
            return ref;
          }}
          color="transparent"
          position="fixed"
          className="app-bar"
          {...props}
          sx={{
            ...props.sx,
          }}
        >
          <Toolbar
            sx={{
              minHeight: "fit-content !important",
              bgcolor: "white",
              pt: 0.5,
              px: 2,
              display: "flex",
              width: 1,
              justifyContent: "space-between",
            }}
          >
            <RouterLink to="/" height={1}>
              <Box component="img" src="/logo.svg" sx={{ mr: 2, width: 30, height: 1 }}></Box>
            </RouterLink>
            <Box flex={isDesktop ? 1.3 : 10} py={0.5}>
              {showSearch && <SearchInput key={pathname} fullWidth={false} />}
            </Box>
            {children}
            <Stack mx={1} alignSelf={"end"} flex={2}>
              {isDesktop && <AppBarNavigator />}
            </Stack>

            {!isDesktop && (
              <Stack alignItems={"end"} justifyContent={"center"}>
                <RouterLink to="/settings">
                  <IconButton sx={{ svg: { height: 30, width: 30 } }}>
                    <ProfilePhoto />
                  </IconButton>
                </RouterLink>
              </Stack>
            )}
          </Toolbar>
        </MuiAppBar>
      </HideOnScroll>
      <Box sx={{ minHeight: appBarHeight }} />
    </>
  );
});
