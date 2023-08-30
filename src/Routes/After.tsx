import styled from "styled-components";
import transition from "../transition";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Wrapper = styled.div`
    height: 100vh;
    background-image : url("../../Images/edit7.jpg");
    background-size: 100vw 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 5vh;
    justify-content: center;
    align-items: center;
`;

const Nav = styled.div`
    position: fixed;
    width: 100vw;
    height: 10vh;
    top: 0;
    left: 0;
    background-color: white;
    z-index: 5;
    opacity: 0;
`;

const Logo = styled.img`
    position: absolute;
    top: 3vh;
    right: 0;
    left: 0;
    margin: auto;
    height: 7vh;
    z-index: 10;
`;

const BigLogo = styled(motion.img)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    height: 55vh;
    opacity : 0.2;
`;

const AfterOne = styled(motion.img)`
    height: 3.5vh;
`;

const AfterTwo = styled(motion.img)`
    position: absolute;
    bottom: 15vh;
    height: 2.5vh;
`;

function After() {
    return (
        <Wrapper>
            <Link to = "/">
                <Logo src = "../../Images/logo/0.png" />
            </Link>
        <BigLogo 
            initial = {{opacity: 0}}
            animate = {{opacity: 0.2}}
            transition={{delay: 7, duration: 1}}
            src = "../../Images/logo/0.png" 
        />
            <AfterOne
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition={{delay: 1, duration: 1}}
                src = "../../Images/after/0.png" 
            />
            <AfterOne
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition={{delay: 2.2, duration: 1}}
                src = "../../Images/after/1.png" 
            />
            <AfterOne
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition={{delay: 3.4, duration: 1}}
                src = "../../Images/after/2.png" 
            />
            <AfterOne
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition={{delay: 4.6, duration: 1}}
                src = "../../Images/after/3.png" 
            />
            <AfterOne
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition={{delay: 5.8, duration: 1}}
                src = "../../Images/after/4.png" 
            />
            <AfterTwo
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition={{delay: 7, duration: 1}}
                src = "../../Images/after/5.png" 
            /> 
            <AfterTwo
                style = {{
                    bottom: "11vh"
                }}
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition={{delay: 7, duration: 1}}
                src = "../../Images/after/6.png" 
            />
        </Wrapper>
    );
}

export default transition(After);