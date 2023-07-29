import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { Divider, IconButton, SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useIsDesktop } from "hooks/useIsDesktop";
import * as React from "react";
const drawerBleeding = 0;

export type EdgeDrawerProps = {
  children: React.ReactNode;
  id?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose?: () => void;
  title?: React.ReactNode;
  sx?: SxProps;
  keepMounted?: boolean;
  puller?: boolean;
  closeIcon?: boolean;
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

export function EdgeDrawer({
  children,
  open,
  setOpen,
  onClose,
  id,
  title,
  keepMounted = true,
  puller = true,
  closeIcon = true,
  ...props
}: EdgeDrawerProps) {
  const isDesktop = useIsDesktop();
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
    if (!newOpen) {
      onClose?.();
    }
  };

  return (
    <SwipeableDrawer
      anchor={isDesktop ? "right" : "bottom"}
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      swipeAreaWidth={drawerBleeding}
      ModalProps={{
        keepMounted,
      }}
      {...props}
    >
      {title && (
        <Box
          className=""
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            right: 0,
            bgcolor: "white",
            left: 0,
            zIndex: 2,
            pt: isDesktop || !puller ? 1 : 2.5,
          }}
        >
          {!isDesktop && puller && <Puller />}

          <Box position={"relative"}>
            {title}
            {closeIcon && (
              <IconButton
                onClick={toggleDrawer(false)}
                sx={{ position: "absolute", top: -4, left: 3 }}
              >
                <CancelRoundedIcon sx={{ color: grey[400], borderRadius: "50%" }} />
              </IconButton>
            )}
          </Box>
          <Divider sx={{ mt: 1 }} />
        </Box>
      )}
      <Box
        sx={{
          pt: title ? 6 : 0,
          pb: 1,
          overflow: "auto",
          height: "100%",
        }}
        id={id}
      >
        {children}
      </Box>
    </SwipeableDrawer>
  );
}
