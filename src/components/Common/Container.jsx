import styled from "styled-components";
import useViewport from "../../hooks/viewportHook";
const Container = ({children}) => {
    const { isMobile } = useViewport();
        return <ContainerStyle isMobile={isMobile}>{children}</ContainerStyle>;
    };

export default Container;

const ContainerStyle = styled.div`
    width:100%;
    height:100vh;
    padding-left:${(props) => (props.isMobile ? '0px' : '180px')};
    padding-top:100px;
`
