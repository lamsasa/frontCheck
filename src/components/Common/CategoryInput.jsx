import categoryList from '../../styles/categoryColor';
import CategoryIcon from '../MyBudget/CategoryIcon';
import styled from 'styled-components';

const CategoryInput = () => {
    return (
        <>
            <Title>카테고리</Title>
            <IconBox>
                {categoryList.map((data, index) => (
                    <div className="icon">
                        <CategoryIcon key={index} name={data.Name} />
                    </div>
                ))}
            </IconBox>
        </>
    );
};
export default CategoryInput;

const IconBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 20px;
    background-color: lightgray;

    .icon {
        margin: 10px;
    }
`;

const Title = styled.div`
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
`;
