import React, { Fragment } from "react";
import styled from "styled-components";
import { createRoot } from "react-dom/client";
import { ResponsiveBar } from "@nivo/bar";
import { Axes } from "@nivo/axes";
import { line } from "d3-shape";
import { computeXYScalesForSeries } from "@nivo/scales";
import { useTooltip, TableTooltip } from "@nivo/tooltip";


const barColor = "#3fdaae";
const lineColor = "#ffa947";

// `v` and `v1` are used for bars
// `l` is used for line
const data = [
  { x: "1월", v: 1200, v1: 300, l: 500 },
  { x: "2월", v: -100.5, v1: 20.9, l: 300.1 },
  { x: "3월", v: 300.8, v1: 300.2, l: 200.3 },
  { x: "4월", v: 400.1, v1: 500.0, l: 300.1 },
  { x: "5월", v: 400.4, v1: 300.8, l: 550.0 },
  { x: "6월", v: 400.7, v1: 400.1, l: 300.9 },
  { x: "7월", v: 400.9, v1: 400.3, l: 405.9 },
  { x: "8월", v: 300.0, v1: 400.6, l: 230.3 },
  { x: "9월", v: 3000.0, v1: 400.6, l: 203.3 },
  { x: "10월", v: 300.0, v1: 400.6, l: 203.3 },
  { x: "11월", v: 300.0, v1: 400.6, l: 203.3 },
  { x: "12월", v: 300.0, v1: 400.6, l: 203.3 },
];

// scale 최댓값 입력
const maxValue = Math.max(...data.map((item) => Math.max(item.v, item.v1)));

const Line = ({ bars, xScale, yScale, innerWidth, innerHeight }) => {
  computeXYScalesForSeries(
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
          barValue={barData["수입"]}
          barValue1={barData["지출"]}
          lineValue={barData.l}
        />,
        e
      );
    }
  }
  
  

  return (
    <Fragment>
      {/* y좌표 전부 안 보이게! 
      <div className="AxesWrapper" style={{ display: "none" }}>
  <Axes
    yScale={yScale}
    xScale={xScale}
    width={innerWidth}
    height={innerHeight}
    right={{
      ticksPosition: "after"
    }}
  />
</div> */}

      <Axes
        yScale={yScale}
        xScale={xScale}
        width={innerWidth}
        height={innerHeight}
        right={{
          ticksPosition: "after",
        }}
      />

      <text
        x={innerWidth + 10} // 오른쪽 끝에 위치
        y={yScale(maxValue) - 12} // yScale의 최댓값에 해당하는 y 좌표에서 약간 위로 이동
        textAnchor="start" // 시작 부분에 정렬
        style={{ fontSize: "10px" }}>
        (원)
      </text>
      <path
        d={linePath}
        fill="none"
        stroke={lineColor}
        style={{ pointerEvents: "none" }}
      />
      {bars.map((bar) => (
        <circle
          key={`circle-${bar.key}`}
          cx={xScale(bar.data.data.x) + xScale.bandwidth() / 2}
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
            x={xScale(bar.data.data.x) + xScale.bandwidth() / 2 - bar.width / 2}
            y={yScale(bar.data.data["수입"])} // v 값 텍스트의 y 좌표 수정
            textAnchor="middle"
            style={{ fontSize: "12px" }}>
            {bar.data.data["수입"]}
          </text>
          <text
            x={xScale(bar.data.data.x) + xScale.bandwidth() / 2 + bar.width / 2}
            y={yScale(bar.data.data["지출"])} // v1 값 텍스트의 y 좌표 수정
            textAnchor="middle"
            style={{ fontSize: "12px" }}>
            {bar.data.data["지출"]}
          </text>
          <text
            x={xScale(bar.data.data.x) + xScale.bandwidth() / 2}
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
        ["수입", `${barValue}`],
        ["지출", `${barValue1}`],
        ["합계", `${lineValue}`],
      ]}
    />
  );
}


const transformedData = data.map((item) => ({
  x: item.x,
  "수입": item.v,
  "지출": item.v1,
  l: item.l,
}));

const LineBarChart = () => (
  <LineBarChartContainer>
    <div className="lineBarChart">
      <ResponsiveBar
        data={transformedData}
        keys={["수입", "지출"]}
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
        colors={[barColor, "#ff3e85"]}
        borderRadius={2}
        axisLeft={false} // 왼쪽 y좌표
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
  </LineBarChartContainer>
);

const root = createRoot(document.getElementById("root"));
root.render(<LineBarChart />);

export default LineBarChart;

const LineBarChartContainer = styled.div`
  width: 800px;
  height: 100%;
  display: flex;

  .lineBarChart{
    margin-top: 10px;
    width: 100%;
    height: 90%;
  }
`;
