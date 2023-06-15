import React, { Fragment } from "react";
import { createRoot } from "react-dom/client";
import { ResponsiveBar } from "@nivo/bar";
import { Axes } from "@nivo/axes";
import { line } from "d3-shape";
import { computeXYScalesForSeries } from "@nivo/scales";
import { useTooltip, TableTooltip } from "@nivo/tooltip";

const barColor = "#80ffca";
const lineColor = "#ffa198";

// `v` and `v1` are used for bars
// `l` is used for line
const data = [
  { x: "0", v: 120, v1: 30, l: 50 },
  { x: "1", v: -30.5, v1: 2.9, l: 30.1 },
  { x: "2", v: 3.8, v1: 3.2, l: 2.3 },
  { x: "3", v: 4.1, v1: 5.0, l: 3.1 },
  { x: "4", v: 4.4, v1: 3.8, l: 55.0 },
  { x: "5", v: 4.7, v1: 4.1, l: 3.9 },
  { x: "6", v: 4.9, v1: 4.3, l: 45.9 },
  { x: "7", v: 3.0, v1: 4.6, l: 23.3 },
  { x: "8", v: 3.0, v1: 4.6, l: 23.3 },
  { x: "9", v: 3.0, v1: 4.6, l: 23.3 },
  { x: "10", v: 3.0, v1: 4.6, l: 23.3 },
  { x: "11", v: 3.0, v1: 4.6, l: 23.3 },
];

const Line = ({ bars, xScale, yScale, innerWidth, innerHeight, tooltip }) => {
  const scale = computeXYScalesForSeries(
    [
      {
        id: "only",
        data: data.map((it) => ({ x1: it.d, y: it.l })),
      },
    ],
    { type: "linear" },
    { type: "linear" },
    innerWidth,
    innerHeight
  );

  const lineGenerator = line()
    .x((d) => xScale(d.x) + xScale.bandwidth() / 2)
    .y((d) => yScale(d.y)); // 막대 그래프의 Y축 값으로 변경

  const lineData = data
    .filter((d) => d.l !== undefined)
    .map((d) => ({
      x: d.x,
      y: d.l,
    }));

  const linePath = lineGenerator(lineData);

  const tip = useTooltip();

  function renderTip(e, idx) {
    const barData = bars[idx].data.data;
    if (barData) {
      return tip.showTooltipFromEvent(
        <CustomTooltip
          barValue={barData.v}
          barValue1={barData.v1}
          lineValue={barData.l}
        />,
        e
      );
    }
  }

  return (
    <Fragment>
      <Axes
        yScale={yScale}
        xScale={xScale}
        width={innerWidth}
        height={innerHeight}
        right={{
          ticksPosition: "after",
        }}
      />
      <path
        d={linePath}
        fill="none"
        stroke={lineColor}
        style={{ pointerEvents: "none" }}
      />
      {bars.map((bar) => (
        <circle
          key={`circle-${bar.key}`}
          cx={xScale(bar.data.index) + xScale.bandwidth() / 2}
          cy={yScale(bar.data.data.l)}
          r={4}
          fill="white"
          stroke={lineColor}
          style={{ pointerEvents: "none" }}
        />
      ))}

      {bars.map((bar, idx) => (
        <Fragment key={bar.key}>
          <rect
            key={`rect-${bar.key}`}
            x={bar.x}
            y={0}
            height={innerHeight}
            width={bar.width}
            fill="transparent"
            onMouseEnter={(e) => renderTip(e, idx)}
            onMouseMove={(e) => renderTip(e, idx)}
            onMouseLeave={tip.hideTooltip}
          />
          <text
            x={xScale(bar.data.index) + xScale.bandwidth() / 2 - bar.width / 2}
            y={yScale(bar.data.data.v)} // v 값 텍스트의 y 좌표 수정
            textAnchor="middle"
            style={{ fontSize: "12px" }}>
            {bar.data.data.v}
          </text>
          <text
            x={xScale(bar.data.index) + xScale.bandwidth() / 2 + bar.width / 2}
            y={yScale(bar.data.data.v1)} // v1 값 텍스트의 y 좌표 수정
            textAnchor="middle"
            style={{ fontSize: "12px" }}>
            {bar.data.data.v1}
          </text>
          <text
            x={xScale(bar.data.index) + xScale.bandwidth() / 2}
            y={yScale(bar.data.data.l) - 10}
            textAnchor="middle"
            style={{ fontSize: "12px" }}>
            {bar.data.data.l}
          </text>
        </Fragment>
      ))}
    </Fragment>
  );
};

function CustomTooltip({ barValue, barValue1, lineValue }) {
  return (
    <TableTooltip
      rows={[
        ["수입", barValue],
        ["지출", barValue1],
        ["합계", lineValue],
      ]}
    />
  );
}

const transformedData = data.map((item) => ({
  x: item.x,
  v: item.v,
  v1: item.v1,
  l: item.l,
}));

const maxValue = Math.max(...data.map(item => Math.max(item.v, item.v1)));


const LineBarChart = () => (
  <div className="App" style={{ width: 800, height: 500 }}>
    <ResponsiveBar
      data={transformedData}
      keys={["v", "v1"]}
      groupMode="grouped" // 그룹 모드를 'grouped'로 설정
      maxValue={maxValue}
      padding={0.5} // 각 막대 그래프 사이의 거리
      margin={{
        top: 20,
        right: 36,
        bottom: 36,
        left: 36,
      }}
      indexBy="x"
      enableLabel={false}
      colors={[barColor, "#ffca80"]}
      borderRadius={2}
      axisLeft={{
        tickValues: 7,
      }}
      enableGridY={false}
      layers={["grid", "axes", "bars", Line, "markers", "legends"]}
      //범례
      legends={[
        {
          anchor: "top-right", // 범례 위치 (top-left, top-right, bottom-left, bottom-right 등)
          direction: "row", // 범례 방향 (row, column 등)
          justify: false,
          translateX: 0,
          translateY: -20,
          itemsSpacing: 4,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          itemTextColor: "#000",
          symbolSize: 20,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  </div>
);

const root = createRoot(document.getElementById("root"));
root.render(<LineBarChart />);

export default LineBarChart;
