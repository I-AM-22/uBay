import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { useLanguageContext } from "context/languageContext";
import { homeQueries } from "features/home";
import { FC } from "react";
import { useTranslation } from "react-i18next";
export type LineData = {
  id: string;
  color: string;
  data: Datum[];
}[];

export type Datum = {
  x: string;
  y: number;
};
const numberFormatter = new Intl.NumberFormat().format;
export const Line: FC<{}> = () => {
  const { lang } = useLanguageContext();
  const { t } = useTranslation("home", { keyPrefix: "line" });
  const theme = useTheme();
  const profits = (homeQueries.useStatics().data?.profits ?? [])
    .map((profit) => ({
      x: profit.date,
      y: profit.totalValue,
    }))
    .sort((a, b) => (a.x > b.x ? 1 : -1)) satisfies LineData[number]["data"];
  const data = [
    {
      color: theme.palette.secondary.main,
      id: t("profits"),
      data: profits,
    },
  ];

  return (
    <Box
      height="500px"
      width="100%"
      sx={{
        "*": {
          fontFamily: "MontserratArabic !important",
        },
        svg: { width: "100%" },
      }}
    >
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 90 }}
        xScale={{ type: "point" }}
        curve="monotoneX"
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-$.0f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          format: (a: number) => numberFormatter(a),
          tickSize: 5,
          tickPadding: lang == "en" ? -10 : 50, //5
          tickRotation: 0,
          legend: t("y"),
          legendOffset: lang == "en" ? -80 : -70,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-14}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateY: -23,
            translateX: 115,
            symbolSpacing: 2,
            itemsSpacing: 21,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#555",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            itemDirection: "top-to-bottom",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: theme.palette.text.primary,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};
