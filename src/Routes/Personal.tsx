import styled from "styled-components";
import transition from "../transition";
import { motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
    position: relative;
    margin-top: 10vh;
    width: 100vw;
    height: 75vh;
    overflow: hidden;
`;

const Bg = styled.img`
    position: absolute;
    top: -10vh;
    width: 100vw;
    height: 100vh;
    z-index: -1;
`;

const Word = styled(motion.img)`
    width: 20%;
`;

function Personal() {
    const biggerBoxRef = useRef<HTMLDivElement>(null);
    return (
        <Wrapper ref = {biggerBoxRef}>
            <Bg src = "../../Images/edit11.jpg" />
            <Word 
                src = "../../Images/words/신록.png" 
                drag
                dragConstraints = {biggerBoxRef}
            />
            <Word 
                src = "../../Images/words/자투리.png" 
                drag
                dragConstraints = {biggerBoxRef}
            />
            <Word 
                src = "../../Images/words/우수.png" 
                drag
                dragConstraints = {biggerBoxRef}
            />
            <Word 
                src = "../../Images/words/선연하게.png" 
                drag
                dragConstraints = {biggerBoxRef}
            />
            <Word 
                src = "../../Images/words/무르녹은.png" 
                drag
                dragConstraints = {biggerBoxRef}
            />
            <Word 
                src = "../../Images/words/단편적.png" 
                drag
                dragConstraints = {biggerBoxRef}
            />
            <Word 
                src = "../../Images/words/형이상학.png" 
                drag
                dragConstraints = {biggerBoxRef}
            />

        </Wrapper>
    );
}

export default transition(Personal);