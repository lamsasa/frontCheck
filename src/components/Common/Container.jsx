import styled from "styled-components";
import useViewport from "../../hooks/viewportHook";
const Container = ({ children }) => {
  const { isMobile } = useViewport();
  return <ContainerStyle isMobile={isMobile}>{children}</ContainerStyle>;
};

export default Container;

const ContainerStyle = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  padding-left: ${(props) => (props.isMobile ? "0px" : "180px")};
  padding-top: 100px;
  padding-bottom: ${(props) => (props.isMobile ? "50px" : "0px")};
`;
