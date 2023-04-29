import { styled } from "@mui/material";
import themeConstants from "../../../constants/themeConstants";

const TableRowStriped = styled("tr")(({}) => ({
  "&:nth-of-type(2n+1)": {
    backgroundColor: "transparent",
  },
  "&:nth-of-type(2n)": {
    backgroundColor: themeConstants.primary05,
  },
}));
export default TableRowStriped;
