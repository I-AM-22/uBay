import { styled } from "@mui/material/styles";
import { drawerWidth } from "./Layout";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  }),
  ...(!open && {
    marginLeft: theme.spacing(7),
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  }),

  justifyContent: "flex-end",
}));
export default Main;
