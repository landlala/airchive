import styled from "styled-components";
import transition from "../transition";

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`;

const Bg = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width : 100vw;
    height: 90vh;
`;


function Personal() {
    return (
        <Wrapper>
            <Bg src = "../../Images/bg1.png" />
        </Wrapper>
    );
}

export default transition(Personal);