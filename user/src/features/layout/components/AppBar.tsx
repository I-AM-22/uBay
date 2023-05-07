import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchInput from "components/Inputs/SearchInput";
import RouterLink from "components/links/RouterLink";
import { FC, forwardRef, useEffect, useRef, useState } from "react";
import { AppBarNavigator } from "./AppBarNavigator";
export type AppBarProps = MuiAppBarProps;
export const AppBar: FC<AppBarProps> = forwardRef(function Fr(
  { children, ...props }: AppBarProps,
  ref
) {
  const appBarRef = useRef<HTMLDivElement | null>(null);
  const [appBarHeight, setAppBarHeight] = useState(0);
  const isDesktop = useMediaQuery(useTheme().breakpoints.up("sm"));
  useEffect(() => {
    setAppBarHeight((appBarRef.current?.offsetHeight ?? 20) - 20);
  }, [appBarRef.current?.offsetHeight]);
  return (
    <>
      <MuiAppBar
        elevation={1}
        ref={(el) => {
          appBarRef.current = el;
          return ref;
        }}
        color="transparent"
        position="fixed"
        {...props}
        sx={{
          ...props.sx,
        }}
      >
        <Toolbar
          sx={{
            bgcolor: "white",
            py: 0,
            px: 3,
            display: "flex",
            width: "100%",
            "&>*": { flex: 1 },
            justifyContent: "space-between",
          }}
        >
          <Box>
            <SearchInput fullWidth={false} />
          </Box>
          {children}
          <Stack alignItems={"center"} mx={1}>
            {isDesktop && <AppBarNavigator />}
          </Stack>
          <Stack alignItems={"end"} justifyContent={"center"}>
            <RouterLink href="/profile">
              <AccountCircleRoundedIcon />
            </RouterLink>
          </Stack>
        </Toolbar>
      </MuiAppBar>
      <Box sx={{ height: appBarHeight }} />
    </>
  );
});
