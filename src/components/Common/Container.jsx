import React from "react";
import styled from "styled-components";
import useViewport from "../../hooks/viewportHook";

const Container = () => {
    const { isMobile } = useViewport();
    return <StyledContainer isMobile={isMobile}/>
}
export default Container;

const StyledContainer = styled.div`
    width:100%;
    height:100vh;
    padding-left:${(props) => (props.isMobile ? '0px' : '180px')};
    padding-top:100px;
`