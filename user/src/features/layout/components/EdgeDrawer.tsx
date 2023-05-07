import { Global } from "@emotion/react";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { Divider, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/material/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import * as React from "react";
const drawerBleeding = 0;

export type EdgeDrawerProps = {
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose?: () => void;
  title?: React.ReactNode;
};

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

export function EdgeDrawer({ children, open, setOpen, onClose, title }: EdgeDrawerProps) {
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
    if (!newOpen) {
      onClose?.();
    }
  };

  return (
    <>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `min(calc(70% - ${drawerBleeding}px),80vh)`,
            maxHeight: "80%",
            overflow: "visible",
          },
        }}
      />

      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {title && (
          <Box
            sx={{
              position: "absolute",
              top: -drawerBleeding,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              right: 0,
              left: 0,
              zIndex: 2,
              pt: 2.5,
            }}
          >
            <Puller />

            <Box position={"relative"}>
              {title}
              <IconButton onClick={toggleDrawer(false)} sx={{ position: "absolute", top: -4 }}>
                <CancelRoundedIcon sx={{ color: grey[400], borderRadius: "50%" }} />
              </IconButton>
            </Box>
            <Divider sx={{ mt: 1 }} />
          </Box>
        )}
        <Box
          sx={{
            pt: title ? 9 : 0,
            pb: 1,
            height: "100%",
            overflow: "auto",
          }}
        >
          {children}
        </Box>
      </SwipeableDrawer>
    </>
  );
}
