import React, { Fragment } from "react";
import { createRoot } from "react-dom/client";
import { ResponsiveBar } from "@nivo/bar";
import { Axes } from "@nivo/axes";
import { line } from "d3-shape";
import { computeXYScalesForSeries } from "@nivo/scales";
import { useTooltip, TableTooltip } from "@nivo/tooltip";

const barColor = "#0095ff";
const lineColor = "rgba(200, 30, 15, 1)";

// `v` is used for bars
// `v1` is used for line
const data = [
  { x: "0", v: 3.3, v1: 20.0 },
  { x: "1", v: 3.5, v1: 30.1 },
  { x: "2", v: 3.8, v1: 2.3 },
  { x: "3", v: 4.1, v1: 3.1 },
  { x: "4", v: 4.4, v1: 85.0 },
  { x: "5", v: 4.7, v1: 3.9 },
  { x: "6", v: 4.9, v1: 45.9 },
  { x: "7", v: 5.2, v1: 23.3 },
];

const Line = ({ bars, xScale, innerWidth, innerHeight, tooltip }) => {
  const scale = computeXYScalesForSeries(
    [
      {
        id: "only",
        data: data.map((it) => ({ x: it.d, y: it.v1 })),
      },
    ],
    { type: "linear" },
    { type: "linear" },
    innerWidth,
    innerHeight
  );
  const lineGenerator = line()
    .x((bar) => bar.x + bar.width / 2)
    .y((bar) => scale.yScale(bar.data.data.v1));

  const tip = useTooltip();

  function renderTip(e, idx) {
    return tip.showTooltipFromEvent(
      <CustomTooltip barValue={data[idx].v} lineValue={data[idx].v1} />,
      e
    );
  }

  return (
    <Fragment>
      <Axes
        yScale={scale.yScale}
        xScale={xScale}
        width={innerWidth}
        height={innerHeight}
        right={{
          ticksPosition: "after",
        }}
      />
      <path
        d={lineGenerator(bars)}
        fill="none"
        stroke={lineColor}
        style={{ pointerEvents: "none" }}
      />
      {bars.map((bar) => (
        <circle
          key={bar.key}
          cx={xScale(bar.data.index) + bar.width / 2}
          cy={scale.yScale(bar.data.data.v1)}
          r={4}
          fill="white"
          stroke={lineColor}
          style={{ pointerEvents: "none" }}
        />
      ))}
      {bars.map((bar, idx) => (
        <rect
          key={bar.key}
          x={bar.x}
          y={0}
          height={innerHeight}
          width={bar.width}
          fill="transparent"
          onMouseEnter={(e) => renderTip(e, idx)}
          onMouseMove={(e) => renderTip(e, idx)}
          onMouseLeave={tip.hideTooltip}
        />
      ))}
    </Fragment>
  );
};

function CustomTooltip({ barValue, lineValue }) {
  return (
    <TableTooltip
      rows={[
        ["bar", barValue],
        ["line", lineValue],
      ]}
    />
  );
}

const LineBarChart = () => (
  <div className="App" style={{ width: 500, height: 500 }}>
    <ResponsiveBar
      data={data}
      keys={["v"]}
      maxValue={6}
      padding={0.6}
      margin={{
        top: 20,
        right: 36,
        bottom: 36,
        left: 36,
      }}
      indexBy="x"
      enableLabel={false}
      colors={[barColor]}
      borderRadius={2}
      axisLeft={{
        tickValues: 7,
      }}
      enableGridY={false}
      layers={["grid", "axes", "bars", Line, "markers", "legends"]}
    />
  </div>
);

const root = createRoot(document.getElementById("root"));
root.render(<LineBarChart />);

export default LineBarChart;
