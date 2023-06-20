import AddFab from "components/buttons/AddFab";
import RouterLink from "components/links/RouterLink";
import { Feed } from "features/post";
import { FC } from "react";
export const HomePage: FC<{}> = ({}) => {
  return (
    <>
      <Feed />
      <RouterLink to="/posts/new">
        <AddFab hideOnScroll />
      </RouterLink>
    </>
  );
};
