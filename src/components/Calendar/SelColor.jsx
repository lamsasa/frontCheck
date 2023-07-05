import React from "react";
import styled from "styled-components";
import contentList from "../../styles/contentColor";

const SelColor = ({ isBasic }) => {
  // const [selectedContentId, setSelectedContentId] = useState(1);

  // 컨텐츠 이름을 받아오고, 콘텐츠별 설정된 색 코드를 contentList에서 해당하는 색 코드 찾아오기
  // const setColor = contentList.find((item) => item.contentId === color);
  const colorSc = contentList.schedule.map((content) => content.Color);
  const colorWork = contentList.work.map((content) => content.Color);

  // const ColorScId = contentList.schedule.map((content) => content.contentId);
  // const ColorWorkId = contentList.work.map((content) => content.contentId);

  const handleColorBoxClick = {};

  return (
    <SelBoxContainer>
      {isBasic ? (
        <div>
          {colorSc.map((color, index) => (
            <div
              className="color-box"
              key={index}
              style={{ backgroundColor: color }}
              onClick={() =>
                handleColorBoxClick(contentList.schedule[index].contentId)
              }
            ></div>
          ))}
        </div>
      ) : (
        <div>
          {colorWork.map((color, index) => (
            <div
              className="color-box"
              key={index}
              style={{ backgroundColor: color }}
              onClick={() =>
                handleColorBoxClick(contentList.work[index].contentId)
              }
            ></div>
          ))}
        </div>
      )}
    </SelBoxContainer>
  );
};
export default SelColor;

const SelBoxContainer = styled.div`
  .color-box {
    width: 25px;
    height: 25px;
    background: ${(props) => props.backgroundColor};
    border-radius: 100%;
  }
`;
