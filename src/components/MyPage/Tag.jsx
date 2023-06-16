import styled from 'styled-components';

const Tag = ({ tag, detail }) => {
    // 임시로 랜덤으로 태그 색이 변하게 만듬, 백엔드 개발 시 태그 추가 할때 색을 저장하게 만드는게 필요해 보임
    let backgroundColor;
    if (tag === '일정') {
        const colors = ['#205072', '#329D9C', '#56C596'];
        backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    } else if (tag === '근무') {
        const colors = ['#484848', '#808080', '#A8A8A8', '#cacaca'];
        backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }

    return <TagStyled backgroundColor={backgroundColor}>{detail}</TagStyled>;
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
