import { Stack } from "@mui/material";
import { FC, ReactNode } from "react";
import Loading from "../feedback/Loading";
type Props = {
  children: ReactNode;
  loadingComponent?: ReactNode;
  isLoading: boolean;
  isEdit: boolean;
};
const ActionForm: FC<Props> = ({ children, loadingComponent = <Loading />, isLoading, isEdit }) => {
  return (
    <>
      {isLoading && isEdit && <Stack alignItems={"center"}>{loadingComponent}</Stack>}
      {(!isLoading || !isEdit) && children}
    </>
  );
};
export default ActionForm;
