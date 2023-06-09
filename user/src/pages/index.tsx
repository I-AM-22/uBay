import { Box } from "@mui/material";
import AddFab from "components/buttons/AddFab";
import RouterLink from "components/links/RouterLink";
import { FC } from "react";
export const HomePage: FC<{}> = ({}) => {
  return (
    <>
      <Box sx={{ height: "300vh" }} />
      <RouterLink to="/new-post">
        <AddFab hideOnScroll />
      </RouterLink>
    </>
  );
};
