import React from "react";
import styled from "styled-components";
import useViewport from "../../hooks/viewportHook";

const Container = () => {
    const { isMobile } = useViewport();
    return <ContainerStyled isMobile={isMobile}/>
}
export default Container;

const ContainerStyled = styled.div`
    width:100%;
    height:100vh;
    padding-left:${(props) => (props.isMobile ? '0px' : '180px')};
    padding-top:100px;
`