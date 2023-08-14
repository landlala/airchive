import styled from "styled-components";
import transition from "../transition";

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-image : url("../../Images/edit1.jpg");
    background-size: 100vw 100vh;
`;


function Personal() {
    return (
        <Wrapper>

        </Wrapper>
    );
}

export default transition(Personal);