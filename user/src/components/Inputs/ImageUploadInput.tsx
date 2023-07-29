import CancelIcon from "@mui/icons-material/Cancel";
import UploadIcon from "@mui/icons-material/Upload";
import { Box, FormControl, FormHelperText, IconButton, InputLabel } from "@mui/material";
import Loading from "components/feedback/Loading";
import themeConstants from "constants/themeConstants";
import { ChangeEvent, useState } from "react";

export type ImageUploadProps = {
  name: string;
  label: string;
  onRemove: () => void;
  isLoading?: boolean;
  error: string | undefined;
  required?: boolean;
} & (
  | {
      multiple?: false;
      onUpload: (file: File) => void;
      initial?: string;
    }
  | { multiple: true; onUpload: (file: File[]) => void; initial?: string[] }
);
function ImageUploadInput({
  name,
  initial,
  label,
  onRemove,
  onUpload,
  isLoading = false,
  error,
  required,
  multiple,
}: ImageUploadProps) {
  const initialArray = typeof initial === "string" ? [initial] : initial ?? [];
  const [uploaded, setUploaded] = useState<string[]>(initialArray);

  const handleUploadClick = (e: ChangeEvent<HTMLInputElement>) => {
    if (multiple) {
      const files = Array.from(e.target.files ?? []);
      onUpload(files);
      setUploaded(files.map((file) => URL.createObjectURL(file)));
    } else {
      const file = e.target?.files?.[0];
      if (!file) return;
      onUpload(file);
      setUploaded([URL.createObjectURL(file)]);
    }
  };
  const handleImageRemove = () => {
    setUploaded([]);
    onRemove();
  };
  return (
    <FormControl>
      <InputLabel shrink={uploaded.length !== 0} sx={{ paddingBottom: 0 }} required={required}>
        {label}
      </InputLabel>
      <Box
        sx={{
          border: (theme) =>
            `1px solid ${error ? theme.palette.error.main : theme.palette.primary.main}`,
          borderRadius: themeConstants.borderRadius,
          minHeight: 53,
          overflow: "hidden",
          width: "100%",
          p: uploaded.length == 0 ? 0 : 1,
        }}
      >
        {uploaded.length === 0 && (
          <Box
            component="label"
            htmlFor={name as string}
            sx={{
              height: 53,

              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              pr: 1,
              cursor: "pointer",
            }}
          >
            <UploadIcon />
          </Box>
        )}
        <input
          accept="image/*"
          id={name as string}
          hidden
          type="file"
          onChange={handleUploadClick}
          multiple={multiple}
        />
        {uploaded.length !== 0 && (
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            {!isLoading && (
              <IconButton
                sx={{
                  position: "absolute",
                  top: 1,
                  right: 1,
                  fontSize: 25,
                }}
                disabled={isLoading}
                onClick={handleImageRemove}
              >
                <CancelIcon
                  sx={{
                    color: "error.main",
                  }}
                />
              </IconButton>
            )}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 0.25,
                width: 1,
                img: { objectFit: "cover" },
                "img:first-of-type": { width: 1, flex: "100%" },
                "img:not(:first-of-type)": { width: "30%" },
              }}
            >
              {uploaded.map((src) => (
                <Box key={src} component={"img"} src={src} sx={{ borderRadius: 1 }} />
              ))}
            </Box>
            {isLoading && (
              <Loading sx={{ color: "tertiary.main", position: "absolute", inset: 0 }} size={40} />
            )}
          </Box>
        )}
      </Box>
      <FormHelperText sx={{ color: "error.main" }}>{error}</FormHelperText>
    </FormControl>
  );
}
export default ImageUploadInput;
