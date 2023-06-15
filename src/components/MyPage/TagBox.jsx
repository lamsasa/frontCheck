import styled from 'styled-components';
import useViewport from '../../hooks/viewportHook';
const TagBox = ({ tag }) => {
    const { isMobile } = useViewport();
    return (
        <TagBoxStyle isMobile={isMobile}>
            <div className="tagTitle">
                {tag === '일정' ? <div className="tagLife">일정</div> : <div className="tagWork">근무</div>}
            </div>
        </TagBoxStyle>
    );
};
export default TagBox;

const TagBoxStyle = styled.div`
    width: ${(props) => (props.isMobile ? '90%' : '46%')};
    margin: 0 auto;
    margin-bottom: 20px;
    margin-top: 50px;
    height: 225.71px;
    background-color: rgba(175, 175, 175, 0.13);
    box-shadow: 0px 5px 2px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-bottom: 30px;

    .tagTitle {
        width: 214.29px;
        height: 71.43px;
        box-shadow: 0px 4.28571px 2.85714px rgba(0, 0, 0, 0.1);
        border-radius: 142.857px;
        background-color: ${({ theme }) => theme.bgColor};
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        bottom: 33px;
        left: 15px;
        font-weight: bolder;
        font-size: 18px;
        color: white;
    }
    .tagLife {
        width: 117.14px;
        height: 50px;
        background: #3fcea5;
        border-radius: 142.857px;
        text-align: center;
    }
    .tagWork {
        width: 117.14px;
        height: 50px;
        background: #9a9a9a;
        border-radius: 142.857px;
        text-align: center;
    }
`;
