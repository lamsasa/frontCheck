import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ResponsivePie } from "@nivo/pie";
import CategoryIcon from "../MyBudget/CategoryIcon";
import categoryList from "../../styles/categoryColor";
import crown from "../../assets/crown.png";

const data = [
  { id: "식비", category: "식비", label: "식비", value: 100 },
  { id: "교통/차량", category: "교통/차량", label: "교통/차량", value: 200 },
  { id: "주유", category: "주유", label: "주유", value: 150 },
  { id: "문화/레저", category: "문화/레저", label: "문화/레저", value: 80 },
  {
    id: "마트/편의점",
    category: "마트/편의점",
    label: "마트/편의점",
    value: 120,
  },
];

//퍼센테이지 반환을 백에서 할지 프론트에서 할지 아직 모르겠음
const formatData = (data) => {
  const sortedData = data.sort((a, b) => b.value - a.value); // value 값을 기준으로 내림차순 정렬
  const total = sortedData.reduce((sum, item) => sum + item.value, 0);
  return sortedData.map((item) => ({
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
        <ul>
          <img
            src={crown}
            alt="Crown"
            style={{
              display: "block",
              width: "20px",
              height: "20px",
              marginLeft: "5px",
            }}
          />
          {formattedData.map((item) => (
            <li key={item.id} className="legendsList">
              <CategoryIcon name={item.category} className={"category-icon"} />

              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  width: "12px",
                  height: "12px",
                  //backgroundColor: "none",//item.color,
                  margin: "15px 0px 15px -3px",
                }}
              />
              <div className="valueList">
                {`${item.label}  ${item.value}  ${item.originalValue}원`}
              </div>
            </li>
          ))}
        </ul>
      </LegendsContainer>
    </>
  );
};

const PieChart = ({ name }) => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const sortedData = data.sort((a, b) => b.value - a.value); // value 값을 기준으로 내림차순 정렬

    const sortedColors = sortedData.map((item) => {
      const foundCategory = categoryList.find(
        (category) => category.Name === item.id
      );
      return foundCategory ? foundCategory.Color : "#FF7076"; // 기본 색상
    });

    setColors(sortedColors);
  }, [name]);

  return (
    <>
      <StyledPieChartContainer>
        <ResponsivePie
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderColor={{
            from: "item.Color",
            modifiers: [["darker", 0.2]],
          }}
          colors={colors}
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
        />
      </StyledPieChartContainer>
      <Legends />
    </>
  );
};

export default PieChart;

const StyledPieChartContainer = styled.div`
  width: 70%;
  padding: 10px;
  @media (max-width: 768px) {
    width: 60%;
  }
`;

const LegendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: none;
  width: 30%;
  font-weight: 700;
  font-size: 1vw;
  justify-content: center;
  align-content: center;
  white-space: pre;

  .legendsList {
    display: flex;
    align-items: center;
    white-space: pre-wrap;
  }

  .valueList {
    width: 200px;
  }

  @media (max-width: 768px) {
    width: 40%;
    font-weight: 700;
    font-size: 10px;

    .valueList {
      width: 80px;
    }
  }
`;