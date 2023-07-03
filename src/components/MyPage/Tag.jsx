import styled from 'styled-components';
import contentColor from '../../../styles/contentColor';

const Tag = ({ tag, contentName }) => {
    // 임시로 랜덤으로 태그 색이 변하게 만듬, 백엔드 개발 시 태그 추가 할때 색을 저장하게 만드는게 필요해 보임
    // let backgroundColor;
    if (tag === '0') {
        // const colors = ['#205072', '#329D9C', '#56C596'];
        // backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    } else if (tag === '1') {
        // const colors = ['#484848', '#808080', '#A8A8A8', '#cacaca'];
        // backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }

    return <TagStyled backgroundColor={contentColor}>{contentName}</TagStyled>;

        // 카테고리 이름(name)을 받아 카테고리 이름별 색코드 파일(categoryList)에서 해당 카테고리 이름에 해당하는 색 코드를 찾아옴
        // const selectedItem = contentColor.find((item) => item.Name === name);

        // return <Icon color={selectedItem ? selectedItem.Color : '#FF7076'}>{getItemSvg(name)}</Icon>;
};

export default Tag;

const TagStyled = styled.button`
    height: 32px;
    border-radius: 15px;
    color: white;
    font-size: 8px;
    text-align: center;
    background: ${(props) => props.backgroundColor};
    margin: 1%;
    margin-top: 0px;
    box-shadow: 0px 2.04082px 4.08163px rgba(0, 0, 0, 0.05);
    border: none;
    outline: none;
`;
