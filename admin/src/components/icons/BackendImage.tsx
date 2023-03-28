import { Box, BoxProps, Stack, StackProps } from "@mui/material";
import { SERVER_BASE_URL } from "constants/domain";
import { useLoadingContext } from "context/loadingContext";
import { FC } from "react";
export type BackendImageProps = { url: string | undefined; imgProps?: BoxProps } & StackProps;
const BackendImage: FC<BackendImageProps> = ({ url, imgProps, ...props }) => {
  const isLoading = useLoadingContext();
  const src = `${SERVER_BASE_URL}/${url}`;
  return (
    <Stack {...props}>
      {!isLoading && (
        <a target="_blank" href={src} rel="noreferrer" style={{ width: "100%", height: "100%" }}>
          <Box
            component={"img"}
            src={src}
            width={"100%"}
            height={"100%"}
            {...imgProps}
            sx={{ borderRadius: 1, objectFit: "contain", ...imgProps?.sx }}
          />
        </a>
      )}
    </Stack>
  );
};
export default BackendImage;
