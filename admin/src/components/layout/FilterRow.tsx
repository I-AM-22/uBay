import { Grid } from "@mui/material";
import { FC, ReactNode } from "react";
type Props = { children: ReactNode };
const FilterRow: FC<Props> = ({ children }) => {
  return (
    <Grid container spacing={1}>
      {children}
    </Grid>
  );
};
export default FilterRow;
