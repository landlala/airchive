import styled from "styled-components";
import transition from "../transition";

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    background-image : url("../../Images/bg1.png");
    background-size: 100vw 100vh;
`;


function After() {
    return (
        <Wrapper>

        </Wrapper>
    );
}

export default transition(After);