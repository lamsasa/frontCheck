import React from 'react';
import styled from 'styled-components';
import categoryList from '../../styles/categoryColor';

const CategoryTotalBar = ({ categoryData, totalData }) => {
    return (
        <TotalBar>
            {categoryData.map((data) => {
                // data에서 카테고리 이름(name)을 받아 카테고리 이름별 색코드 파일(categoryList)에서 해당 카테고리 이름에 해당하는 색 코드를 찾아옴
                const selectedItem = categoryList.find((item) => item.Name === data.Name);
                // data의 Money와 totalData의 총액인 Money를 가져와 퍼센트를 계산함
                const percent = `${(data.Money / totalData[0].Money) * 100}%`;
                // selectedItem이 있다면 해당 컬러코드로, 아니라면 #FF7076로 지정
                const color = selectedItem ? selectedItem.Color : '#FF7076';

                return <Bar key={data.Name} width={percent} color={color} />;
            })}
        </TotalBar>
    );
};

export default CategoryTotalBar;

const Bar = styled.div`
    width: ${(props) => props.width};
    height: 5px;
    background-color: ${(props) => props.color};
    border-radius: 100px;
`;

const TotalBar = styled.div`
    width: 100%;
    height: 5px;
    background-color: #d6d6d6;
    border-radius: 100px;
    margin-bottom: 20px;
    display: flex;
`;
