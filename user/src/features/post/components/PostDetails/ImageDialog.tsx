import { Box, Dialog } from "@mui/material";
import { FC } from "react";
import { useSearchParams } from "react-router-dom";
export type ImageDialogProps = {};
export const ImageDialog: FC<ImageDialogProps> = ({}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const imageURL = searchParams.get("img");
  const open = !!imageURL;
  return (
    <Dialog
      maxWidth={"xl"}
      open={open}
      onClose={() =>
        setSearchParams((sp) => {
          sp.delete("img");
          return sp;
        })
      }
    >
      <Box component="img" width={1} flex={1} src={imageURL ?? ""} />
    </Dialog>
  );
};
