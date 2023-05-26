import { ArrowBack } from "@mui/icons-material";
import { Divider, Paper, PaperProps, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { FC, Fragment, ReactElement, ReactNode, cloneElement } from "react";
export type SettingsListProps = { title: ReactNode; children: ReactNode } & PaperProps;
export const SettingsList: FC<SettingsListProps> = ({ title, children, ...props }) => {
  return (
    <Paper
      elevation={0}
      {...props}
      sx={{
        p: 3,
        pb: 1,
        borderRadius: 4,
        width: { xs: "100%", sm: 500, md: 600, lg: 800 },
        mx: "auto",
        ".MuiButton-root": {
          color: grey[800],
          p: 1.5,
          fontSize: 16,
          borderRadius: 0,
          "&:first-of-type": {
            borderRadius: "8px 8px 0 0",
          },
          "&:last-of-type": { borderRadius: "0 0 8px 8px" },
          svg: { fill: grey[800] },
        },
        ...props.sx,
      }}
    >
      <Typography variant="h5" mb={2}>
        {title}
      </Typography>
      {Array.isArray(children)
        ? children.map((child: ReactElement, index) => (
            <Fragment key={index}>
              {elementWithArrow(child)}
              {index !== children.length - 1 && <Divider />}
            </Fragment>
          ))
        : elementWithArrow(children as ReactElement)}
    </Paper>
  );
};
function elementWithArrow(element: ReactElement) {
  return cloneElement(element, {
    ...element.props,
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      TextDecoder: "none",
      ...element.props.style,
    },
    children: (
      <>
        {element.props.children} <ArrowBack />
      </>
    ),
  });
}
