import { CircularProgress, Stack } from "@mui/material";
import { StackProps } from "@mui/system";
import { FC } from "react";
type Props = StackProps & { size?: number | string };
const Loading: FC<Props> = ({ size = 40, ...props }) => {
  return (
    <Stack alignItems={"center"} justifyContent="center" {...props}>
      <CircularProgress size={size} />
    </Stack>
  );
};
export default Loading;
