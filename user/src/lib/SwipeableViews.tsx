import { useTheme } from "@mui/material/styles";

import { FC } from "react";
import ReactSwipeableViews, {
  SwipeableViewsProps as ReactSwipeableViewsProps,
} from "react-swipeable-views";
export type SwipeableViewsProps = Omit<ReactSwipeableViewsProps, "ref">;
export const SwipeableViews: FC<SwipeableViewsProps> = (props) => {
  const theme = useTheme();
  return (
    <ReactSwipeableViews
      axis={theme.direction === "rtl" ? "x-reverse" : "x"}
      containerStyle={{ height: "100%" }}
      resistance
      enableMouseEvents
      style={{ flex: 1 }}
      {...props}
    />
  );
};
export default SwipeableViews;
