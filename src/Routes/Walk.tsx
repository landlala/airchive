import styled from "styled-components";
import transition from "../transition";
import { Link } from "react-router-dom";

const Nav = styled.div`
    position: fixed;
    width: 100vw;
    height: 10vh;
    top: 0;
    left: 0;
    background-color: white;
`;

const Wrapper = styled.div`
    position: relative;
    margin-top: 10vh;
    width: 100vw;
    height: 185vh;
    overflow: hidden;
`;

const Logo = styled.img`
    position: absolute;
    top: 1vh;
    right: 0;
    left: 0;
    margin: auto;
    height: 7vh;
    z-index: 10;
`;

const Bg = styled.img`
    position: absolute;
    top: -10vh;
    width: 100vw;
    overflow-y: hidden;
    z-index: -1;
`;

function Walk() {
    return (
        <>
            <Nav>
                <Link to = "/">
                    <Logo src = "../../Images/logo/2.png" />
                </Link>
            </Nav>
            <Wrapper>
                <Bg src = "../../Images/edit18.jpg" />
            </Wrapper>
        </>
        
    );
}

export default transition(Walk);