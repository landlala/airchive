import { motion } from "framer-motion";
import styled from "styled-components";

const SlideIn = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: white;
    transform-origin: bottom;
`;

const SlideOut = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: white;
    transform-origin: top;
`;

const transition = (OgComponent: any) => {
    return () => (
        <>
            <OgComponent />
            <SlideIn
                initial = {{scaleY: 0}}
                animate = {{scaleY: 0}}
                exit = {{scale: 1}}
                transition = {{duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
            />
            <SlideOut
                initial = {{scaleY: 1}}
                animate = {{scaleY: 0}}
                exit = {{scale: 0}}
                transition = {{duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
            />
        </>
    );
}

export default transition;