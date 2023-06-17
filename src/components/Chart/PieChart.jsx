import styled from "styled-components";
import { ResponsivePie } from "@nivo/pie";

// 순위 별 나열 방법?
// 범례랑 그래프 위치 조정...

const data = [
  {
    id: "stylus",
    label: "stylus",
    value: 216,
    color: "hsl(96, 70%, 50%)",
  },
  {
    id: "c",
    label: "c",
    value: 412,
    color: "hsl(331, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 31,
    color: "hsl(72, 70%, 50%)",
  },
  {
    id: "javascript",
    label: "javascript",
    value: 401,
    color: "hsl(145, 70%, 50%)",
  },
  {
    id: "php",
    label: "php",
    value: 575,
    color: "hsl(171, 70%, 50%)",
  },
];

//퍼센테이지 반환을 백에서 할지 프론트에서 할지 아직 모르겠음
const formatData = (data) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    return data.map((item) => ({
      ...item,
      value: `${((item.value / total) * 100).toFixed(2)}%`,
      originalValue: item.value,
    }));
  };
  
  const Legends = () => {
    const formattedData = formatData(data);
  
    return (
      <>
        <LegendsContainer>
          <h2>Legends</h2>
          <ul>
            {formattedData.map((item) => (
              <li key={item.id}>
                <span
                  style={{
                    display: "inline-block",
                    width: "12px",
                    height: "12px",
                    backgroundColor: item.color,
                    marginRight: "8px",
                  }}
                />
                {item.label}
                {`${item.value} (${item.originalValue})`}
              </li>
            ))}
          </ul>
        </LegendsContainer>
      </>
    );
  };


const PieChart = () => (
  <>
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 50, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      enableArcLabels={false}
      enableArcLinkLabels={false}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
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
      fill={[
        {
          match: {
            id: "ruby",
          },
          id: "dots",
        },
        {
          match: {
            id: "c",
          },
          id: "dots",
        },
        {
          match: {
            id: "go",
          },
          id: "dots",
        },
        {
          match: {
            id: "python",
          },
          id: "dots",
        },
        {
          match: {
            id: "scala",
          },
          id: "lines",
        },
        {
          match: {
            id: "lisp",
          },
          id: "lines",
        },
        {
          match: {
            id: "elixir",
          },
          id: "lines",
        },
        {
          match: {
            id: "javascript",
          },
          id: "lines",
        },
      ]}
    />
    <Legends />
  </>
);

export default PieChart;

const LegendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: aquamarine;
  width: 30%;
  font-weight: 700;
  font-size: large;
  justify-content: center;
`;
