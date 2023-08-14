import { Box, Theme, useMediaQuery, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { homeQueries } from "features/home";
import { useTranslation } from "react-i18next";

export const Pie = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down(500));
  const query = homeQueries.useStatics();
  const { t } = useTranslation("home");
  const theme = useTheme();
  return (
    <>
      <Box
        height="500px"
        width="100%"
        sx={{
          "*": { fontFamily: "MontserratArabic !important" },
          svg: { width: "100%" },
        }}
      >
        <ResponsivePie
          data={
            query.isSuccess
              ? query.data.salesPerCategory.map((category) => ({
                  label: category.categoryName,
                  id: category.categoryName,
                  value: Number(category.categoryPercentage.toPrecision(3)),
                }))
              : [{ label: t("loadingPie"), id: "", value: 100 }]
          }
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
                fill: "#333333",
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
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          enableArcLinkLabels={true}
          enableArcLabels={true}
          arcLinkLabelsDiagonalLength={36}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor={theme.palette.text.primary}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          legends={
            isSmallScreen
              ? []
              : [
                  {
                    anchor: "bottom-right",
                    direction: "row",
                    translateX: 0,
                    symbolSpacing: 4,
                    translateY: 63,
                    itemsSpacing: -20,
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
                ]
          }
        />
      </Box>
    </>
  );
};

// export default Pie;
