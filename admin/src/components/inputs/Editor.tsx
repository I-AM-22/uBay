/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
//@ts-ignore
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Grid, Paper } from "@mui/material";
import parse from "html-react-parser";
import i18n from "lib/i18next";
import { forwardRef, useImperativeHandle, useState } from "react";
export type EditorRef = { getData: () => string };
export type EditorProps = { initial: string; preview?: boolean };
export const Editor = forwardRef(function Editor({ initial, preview }: EditorProps, ref) {
  const [data, setData] = useState(initial);
  useImperativeHandle(
    ref,
    () => {
      return {
        getData() {
          return data;
        },
      } as EditorRef;
    },
    [data]
  );
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sx={{ ".ck-content": { minHeight: "30vh" } }}>
        <CKEditor
          config={{
            language: {
              content: i18n.language,
              ui: i18n.language,
            },
            toolbar: [
              "heading",
              "Bold",
              "Italic",
              "blockQuote",
              "NumberedList",
              "BulletedList",
              "Link",
              "Outdent",
              "Indent",
            ],
          }}
          editor={ClassicEditor}
          data={initial}
          onChange={(_: any, editor: { getData: () => string }) => {
            setData(editor.getData());
          }}
        />
      </Grid>
      <Grid item xs={12}>
        {preview && (
          <Paper
            sx={{ minHeight: "30vh", overflow: "hidden", p: 1, "*": { wordBreak: "break-all" } }}
          >
            {parse(data)}
          </Paper>
        )}
      </Grid>
    </Grid>
  );
});
export default Editor;
