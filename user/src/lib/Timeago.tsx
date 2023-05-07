/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box } from "@mui/material";
import { FC } from "react";
import ReactTimeago, { ReactTimeagoProps } from "react-timeago";

//@ts-ignore
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
//@ts-ignore
import arabic from "react-timeago/lib/language-strings/ar";
import { DateFormatter } from "utils/transforms";
const formatter = buildFormatter(arabic);
const today = Date.now();
export const Timeago: FC<ReactTimeagoProps & { maxDaysAgo?: number }> = ({
  maxDaysAgo = 30,
  ...props
}) => {
  const diffTime = Math.abs(today - Date.parse(props.date.toString()));
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return (
    <Box sx={{ "*": { fontFamily: "MontserratArabic", fontSize: 10 } }}>
      {diffDays > maxDaysAgo ? (
        DateFormatter(new Date(props.date))
      ) : (
        <ReactTimeago {...props} formatter={formatter} />
      )}
    </Box>
  );
};
export default Timeago;
