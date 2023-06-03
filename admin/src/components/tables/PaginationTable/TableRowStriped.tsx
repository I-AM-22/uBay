import { alpha, styled } from "@mui/material";

const TableRowStriped = styled("tr")(({ theme }) => ({
  "&:nth-of-type(2n+1)": {
    backgroundColor: "transparent",
  },
  "&:nth-of-type(2n)": {
    backgroundColor: alpha(theme.palette.primary[50], 0.8),
  },
}));
export default TableRowStriped;
