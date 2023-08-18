import { Box, useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { homeQueries } from "features/home";
import { useTranslation } from "react-i18next";
export const Bar = () => {
  const theme = useTheme();
  const { t } = useTranslation("home", { keyPrefix: "bar" });
  const query = homeQueries.useStatics();

  return (
    <>
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
        <ResponsiveBar
          data={
            query.data?.byDay
              .sort((a, b) => (a.day > b.day ? 1 : -1))
              .map((value) =>
                Object.fromEntries(Object.entries(value).map(([key, value]) => [t(key), value]))
              ) ?? []
          }
          keys={[t("products"), t("comments"), t("soldProducts")]}
          indexBy={t("day")}
          theme={{
            axis: {
              domain: {
                line: {
                  stroke: "#777777",
                  strokeWidth: 1,
                },
              },
              legend: {
                text: {
                  fontSize: 12,
                  fill: theme.palette.text.primary,
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
              },
              ticks: {
                line: {
                  stroke: "#777777",
                  strokeWidth: 1,
                },
                text: {
                  fontSize: 11,
                  fill: theme.palette.text.primary,
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
              },
            },
            grid: {
              line: {
                stroke: "#dddddd",
                strokeWidth: 1,
              },
            },
            legends: {
              title: {
                text: {
                  fontSize: 11,
                  fill: "#333333",
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
              ticks: {
                line: {},
                text: {
                  fontSize: 10,
                  fill: "#333333",
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
              },
            },
            annotations: {
              text: {
                fontSize: 13,
                fill: "#333333",
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
              },
              link: {
                stroke: "#000000",
                strokeWidth: 1,
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
              },
              outline: {
                stroke: "#000000",
                strokeWidth: 2,
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
              },
              symbol: {
                fill: "#000000",
                outlineWidth: 2,
                outlineColor: "#ffffff",
                outlineOpacity: 1,
              },
            },
            tooltip: {
              container: {
                background: theme.palette.background.paper,
                fontSize: 12,
              },
              basic: {},
              chip: {},
              table: {},
              tableCell: {},
              tableCellValue: {},
            },
          }}
          margin={{ top: 50, right: 90, bottom: 50, left: 40 }}
          padding={0.3}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "pastel1" }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "#38bcb2",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "#eed312",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "fries",
              },
              id: "dots",
            },
            {
              match: {
                id: "sandwich",
              },
              id: "lines",
            },
          ]}
          borderColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: undefined,
            legendPosition: "middle",
            legendOffset: 35,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: undefined,
            legendPosition: "middle",
            legendOffset: -50,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              translateX: 92,
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
    </>
  );
};

// export default Bar;
