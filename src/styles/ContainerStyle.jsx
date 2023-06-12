import styled from "styled-components";


const ContainerStyle = styled.div`
    width:100%;
    height:100vh;
    padding-left:${(props) => (props.isMobile ? '0px' : '180px')};
    padding-top:100px;
`

export default ContainerStyle;