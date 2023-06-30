import useViewport from '../../hooks/viewportHook';
import CategoryIcon from '../MyBudget/CategoryIcon';
import styled from 'styled-components';
import React from 'react';

const CategoryInput = ({ categoryList, categoryId, onCategoryIdChange }) => {
    const { isMobile } = useViewport();

    const handleIconClick = (categoryId) => {
        const category = categoryList.find((item) => item.categoryId === categoryId);
        if (category) {
            onCategoryIdChange(category.categoryId);
        }
    };

    return (
        <>
            <TitleMemoized categoryList={categoryList} categoryId={categoryId} />
            <IconBox isMobile={isMobile}>
                {categoryList.map((data, index) => (
                    <div className="icon" key={index}>
                        <CategoryIcon
                            name={data.Name}
                            color={data.Color}
                            onClick={() => handleIconClick(data.categoryId)}
                        />
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
    margin: ${(props) => (props.isMobile ? '100px' : '20px')};
    margin-bottom: ${(props) => (props.isMobile ? '40px' : '20px')};
    margin-top: 0px;

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

const TitleMemoized = React.memo(({ categoryList, categoryId }) => {
    const category = categoryList.find((item) => item.categoryId === categoryId);
    const iconName = category ? category.Name : '';
    return <Title>{iconName}</Title>;
});
