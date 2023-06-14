import styled from "styled-components";
import "chartjs-plugin-datalabels";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
} from "chart.js";

// 되긴 되는데 수정을 좀 해야 할 거 같아요

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
);

const data = {
  datasets: [
    // 차트 그래프 : y가 값
    {
      type: "line",
      label: "합계",
      borderColor: "#f86090",
      borderWidth: 2,
      data: [
        { x: "1월", y: 5 },
        { x: "2월", y: 2 },
        { x: "3월", y: 3 },
        { x: "4월", y: null },
        { x: "5월", y: 5 },
      ],
      yAxisID: "y_sub",
    },

    //막대 그래프
    {
      type: "bar",
      label: "수입",
      backgroundColor: "#3FCEA5",
      data: [
        { x: "1월", y: 14 },
        { x: "2월", y: 20 },
        { x: "3월", y: 32 },
        { x: "4월", y: 41 },
        { x: "5월", y: 15 },
        { x: "6월", y: 26 },
      ],
      //borderColor: '#3FCEA5',
      //borderWidth: 2,
      datalabels: {
        anchor: "end",
        align: "top",
        offset: 10,
        color: "black",
        font: {
          weight: "bold",
        },
      },
    },
    {
      type: "bar",
      label: "지출",
      backgroundColor: "#8284ff",
      data: [
        { x: "1월", y: 1 },
        { x: "2월", y: 2 },
        { x: "3월", y: 3 },
        { x: "4월", y: 4 },
        { x: "5월", y: 5 },
        { x: "6월", y: 6 },
      ],
      yAxisID: "y_sub",
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  spanGaps: true,
  maxBarThickness: 30,
  grouped: true,
  interaction: {
    mode: "index",
  },
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
        padding: 10,
        font: {
          family: "'Noto Sans KR', 'serif'",
          lineHeight: 1,
        },
      },
    },
    tooltip: {
      backgroundColor: "rgb(74, 214, 156)",
      padding: 10,
      bodySpacing: 5,
      bodyFont: {
        font: {
          family: "'Noto Sans KR', sans-serif",
        },
      },
      usePointStyle: true,
      filter: (item) => item.parsed.y !== null,
      callbacks: {
        title: (context) => context[0].label + "💙",
        label: (context) => {
          let label = context.dataset.label + "" || "";

          return context.parsed.y !== null
            ? label + ": " + context.parsed.y + "배"
            : null;
        },
      },
    },
  },

  // 도표 전반적인 디자인
  scales: {
    x: {
      afterTickToLabelConversion: function (scaleInstance) {
        const ticks = scaleInstance.ticks;

        // x : name
        const newTicks = ticks.map((tick) => {
          return {
            ...tick,
            label: tick.label,
          };
        });
        scaleInstance.ticks = newTicks;
      },

      // x 선
      grid: {
        display: true,
        drawTicks: true,
        tickLength: 4,
        color: "rgb(90, 255, 161)",
      },
      axis: "x",
      position: "bottom",
      ticks: {
        minRotation: 45,
        padding: 5,
      },
    },
    //y 선
    y: {
      type: "linear",
      grid: {
        color: "#2e2e2e39",
      },
      afterDataLimits: (scale) => {
        scale.max = scale.max * 1.2;
      },

      // 단위 디자인
      axis: "y",
      display: true,
      position: "left",
      title: {
        display: true,
        align: "end",
        color: "#828282",
        font: {
          size: 12,
          family: "'Noto Sans KR', sans-serif",
          weight: 300,
        },
        text: "단위: 원",
      },
    },
    y_sub: {
      position: "right",
      title: {
        display: true,
        align: "end",
        color: "#3c0446",
        font: {
          size: 12,
          family: "'Noto Sans KR', sans-serif",
          weight: 300,
        },
        text: "단위: 원",
      },
      afterDataLimits: (scale) => {
        scale.max = scale.max * 1.2;
      },
    },
  },
};

const TotalChart = () => {
  return (
    <>
      <ChartContainer>
        <Line type="line" data={data} options={options} />
      </ChartContainer>
    </>
  );
};

export default TotalChart;

// 반응형 오류... 왜??? -> option 문제였다... 근데 아직도 잘모르겠다...
const ChartContainer = styled.div`
  display: flex;
  position: fixed;
  padding-top: 100px;
  padding-left: 300px;
  width: 1200px;
  height: 500px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    padding-top: 100px;
    padding-left: 5px;
    padding-right: 5px;
  }
`;
