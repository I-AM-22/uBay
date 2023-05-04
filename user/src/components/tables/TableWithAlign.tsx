import { styled, Table as MuiTable } from "@mui/material";

const Table = styled(MuiTable)(({ align = "center" }: { align?: "left" | "center" | "right" }) => ({
  ".MuiTableCell-root": { textAlign: align },
}));
export default Table;
