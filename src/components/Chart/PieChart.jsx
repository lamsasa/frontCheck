import React, { useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import { ResponsivePie } from "@nivo/pie";
import CategoryIcon from "../MyBudget/CategoryIcon";
import categoryList from "../../styles/categoryColor";
import crown from "../../assets/crown.png";
import AxiosApi from "../../api/ListAxiosAPI";

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

const Legends = ({ data }) => {
  const formattedData = formatData(data);

  return (
    <>
      <LegendsContainer>
        <ul>
          <>여기 버튼</>
          <img
            src={crown}
            alt="Crown"
            style={{
              display: "block",
              width: "20px",
              height: "20px",
              marginLeft: "2px",
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

const PieChart = () => {
  const [colors, setColors] = useState([]);
  const [data, setData] = useState([]);

  const selectedMonthData = useMemo(() => {
    if (!data || data.length === 0) {
      return [];
    }

    const currentDate = new Date();
    const selectedMonth = currentDate.getMonth() + 1;
    const selectedYear = currentDate.getFullYear();

    return data.filter((item) => {
      const itemDate = new Date(item.date);
      const itemMonth = itemDate.getMonth() + 1;
      const itemYear = itemDate.getFullYear();

      return itemMonth === selectedMonth && itemYear === selectedYear;
    });
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AxiosApi.getPieChart();
        const transformedData = data.map((item) => ({
          value: item.expenseAmount,
          label: item.categoryName,
          id: item.categoryName,
          category: item.categoryName,
        }));
        setData(transformedData);
      } catch (error) {
        console.error("조회 실패", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const sortedData = selectedMonthData.sort((a, b) => b.value - a.value); // 선택된 월 데이터를 기준으로 내림차순 정렬

    const sortedColors = sortedData.map((item) => {
      const foundCategory = categoryList.find(
        (category) => category.Name === item.id
      );
      return foundCategory ? foundCategory.Color : "#FF7076"; // 기본 색상
    });

    setColors(sortedColors);
  }, [selectedMonthData]);


  if (!data.length) {
    return (
      <>
        <>이번 달 사용액이 존재하지 않습니다.😢</>
      </>
    );
  }


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
      <Legends data={data} />
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