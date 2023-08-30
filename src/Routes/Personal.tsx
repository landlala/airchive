import styled from "styled-components";
import transition from "../transition";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Wrapper = styled(motion.div)`
    position: relative;
    width: 100vw;
    height: 85vh;
    overflow: hidden;
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

const Bg = styled.img`
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: -1;
`;

const Word = styled(motion.img)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 20%;
`;

const Specific = styled(motion.img)`
    position: absolute;
    bottom: 3.5vh;
    right: 0;
    left: 0;
    margin: auto;
    height: 7%;
`;

const wordVariants = {
    original: {
        scale: 0
    },
    next: {
        scale: 1,
        transition: {
            delay: 0.7
        }
    },
};

function Personal() {
    const biggerBoxRef = useRef(null);
    const [clickedWord, setClickedWord] = useState(-1);
    const wordHandler = (id: number) => {
        setClickedWord(id);
    };
    return (
        <>
            <Link to = "/">
                <Logo src = "../../Images/logo/0.png" />
            </Link>
            <Wrapper ref = {biggerBoxRef}>
                <Bg src = "../../Images/edit11.jpg" />
                <Word 
                    variants = {wordVariants}
                    initial = "original"
                    animate = "next"
                    src = "../../Images/words/0.png"
                    onClick = {() => wordHandler(0)}
                    drag
                    dragConstraints = {biggerBoxRef}
                    whileTap={{cursor: "grabbing"}}
                    whileDrag = {{opacity: 0.5}}
                />
                <Word 
                    variants = {wordVariants}
                    initial = "original"
                    animate = "next"
                    src = "../../Images/words/1.png"
                    onClick = {() => wordHandler(1)}
                    drag
                    dragConstraints = {biggerBoxRef}
                    whileTap={{cursor: "grabbing"}}
                    whileDrag = {{opacity: 0.5}}
                />
                <Word 
                    variants = {wordVariants}
                    initial = "original"
                    animate = "next"
                    src = "../../Images/words/2.png"
                    onClick = {() => wordHandler(2)}
                    drag
                    dragConstraints = {biggerBoxRef}
                    whileTap={{cursor: "grabbing"}}
                    whileDrag = {{opacity: 0.5}}
                />
                <Word 
                    variants = {wordVariants}
                    initial = "original"
                    animate = "next"
                    src = "../../Images/words/3.png"
                    onClick = {() => wordHandler(3)}
                    drag
                    dragConstraints = {biggerBoxRef}
                    whileTap={{cursor: "grabbing"}}
                    whileDrag = {{opacity: 0.5}}
                />
                <Word 
                    variants = {wordVariants}
                    initial = "original"
                    animate = "next"
                    src = "../../Images/words/4.png"
                    onClick = {() => wordHandler(4)}
                    drag
                    dragConstraints = {biggerBoxRef}
                    whileTap={{cursor: "grabbing"}}
                    whileDrag = {{opacity: 0.5}}
                />
                <Word 
                    variants = {wordVariants}
                    initial = "original"
                    animate = "next"
                    src = "../../Images/words/5.png"
                    onClick = {() => wordHandler(5)}
                    drag
                    dragConstraints = {biggerBoxRef}
                    whileTap={{cursor: "grabbing"}}
                    whileDrag = {{opacity: 0.5}}
                />
                <Word 
                    variants = {wordVariants}
                    initial = "original"
                    animate = "next"
                    src = "../../Images/words/6.png"
                    onClick = {() => wordHandler(6)}
                    drag
                    dragConstraints = {biggerBoxRef}
                    whileTap={{cursor: "grabbing"}}
                    whileDrag = {{opacity: 0.5}}
                />
                <Word 
                    variants = {wordVariants}
                    initial = "original"
                    animate = "next"
                    src = "../../Images/words/7.png"
                    onClick = {() => wordHandler(7)}
                    drag
                    dragConstraints = {biggerBoxRef}
                    whileTap={{cursor: "grabbing"}}
                    whileDrag = {{opacity: 0.5}}
                />
                <Word 
                    variants = {wordVariants}
                    initial = "original"
                    animate = "next"
                    src = "../../Images/words/8.png"
                    onClick = {() => wordHandler(8)}
                    drag
                    dragConstraints = {biggerBoxRef}
                    whileTap={{cursor: "grabbing"}}
                    whileDrag = {{opacity: 0.5}}
                />
                <Word 
                    variants = {wordVariants}
                    initial = "original"
                    animate = "next"
                    src = "../../Images/words/9.png"
                    onClick = {() => wordHandler(9)}
                    drag
                    dragConstraints = {biggerBoxRef}
                    whileTap={{cursor: "grabbing"}}
                    whileDrag = {{opacity: 0.5}}
                />
                <Word 
                    variants = {wordVariants}
                    initial = "original"
                    animate = "next"
                    src = "../../Images/words/10.png"
                    onClick = {() => wordHandler(10)}
                    drag
                    dragConstraints = {biggerBoxRef}
                    whileTap={{cursor: "grabbing"}}
                    whileDrag = {{opacity: 0.5}}
                />
                <Word 
                    variants = {wordVariants}
                    initial = "original"
                    animate = "next"
                    src = "../../Images/words/11.png"
                    onClick = {() => wordHandler(11)}
                    drag
                    dragConstraints = {biggerBoxRef}
                    whileTap={{cursor: "grabbing"}}
                    whileDrag = {{opacity: 0.5}}
                />
                <Word 
                    variants = {wordVariants}
                    initial = "original"
                    animate = "next"
                    src = "../../Images/words/12.png"
                    onClick = {() => wordHandler(12)}
                    drag
                    dragConstraints = {biggerBoxRef}
                    whileTap={{cursor: "grabbing"}}
                    whileDrag = {{opacity: 0.5}}
                />
            </Wrapper>
            {clickedWord !== -1 ? 
                <Specific src = {`../../Images/words/specific/${clickedWord}.png`} />
                : null
            }
        </>
    );
}

export default transition(Personal);