import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence} from "framer-motion";
import { useNavigate, useMatch, PathMatch } from "react-router-dom";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const Container = styled(motion.div)`
  &: first-child {
    position: relative;
    background-image: url("../../Images/edit1.jpg");
    background-size: 100vw 100vh;
    background-position: left;
    width: 30vw;
    height: 100vh;
  }
  &: nth-child(2) {
    position: relative;
    background-image: url("../../Images/edit2.jpg");
    background-size: 100vw 100vh;
    background-position-x: calc(50% + 10vw);
    background-attachment: fixed;
    width: 20vw;
    height: 100vh;
  }
  &: nth-child(3) {
    position: relative;
    background-image: url("../../Images/edit3.jpg");
    background-size: 100vw 100vh;
    background-position: calc(50% - 10vw);
    background-attachment: fixed;
    width: 20vw;
    height: 100vh;
  }
  &: last-child {
    position: relative;
    background-image: url("../../Images/edit4.jpg");
    background-size: 100vw 100vh;
    background-position: right;
    width: 30vw;
    height: 100vh;
  }
`;

const Img1 = styled(motion.img)`
  &: nth-child(1) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 25%;
    opacity: 0.6;
  }
  &: nth-child(2) {
    position: absolute;
    top: 7%;
    left: 15%;
    transform: translate(-50%, -50%);
    height: 5vh;
  }
  &: nth-child(3) {
    position: absolute;
    top: 10%;
    left: 80%;
    transform: translate(-50%, -50%);
    height: 7vh;
    opacity: 0.5;
  }
`;

const Img2 = styled(motion.img)`
  &: nth-child(1) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 25%;
    opacity: 0.6;
  }  
  &: nth-child(2) {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 7vh;
    opacity: 0.5;
  }  
`;

const Img3 = styled(motion.img)`
  &: nth-child(1) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 25%;
    opacity: 0.6;
  }  
  &: nth-child(2) {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 7vh;
    opacity: 0.5;
  }
`;

const Img4 = styled(motion.img)`
  &: nth-child(1) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 35%;
    opacity: 0.6;
  }
  &: nth-child(2) {
    position: absolute;
    top: 7%;
    left: 85%;
    transform: translate(-50%, -50%);
    height: 5vh;
  }
  &: nth-child(3) {
    position: absolute;
    top: 10%;
    left: 20%;
    transform: translate(-50%, -50%);
    height: 7vh;
    opacity: 0.5;
  }
`;

const boxOne = {
  normal: {
    width: "30vw"
  },
  hover: {
    width: "60vw"
  }
};

const boxTwo = {
  normal: {
    width: "20vw"
  },
  hover: {
    width: "40vw"
  }
};

const textOne = {
  normal: {
    opacity: 0.5
  },
  hover: {
    opacity: 1
  }
};

const textTwo = {
  normal: {
    opacity: 0.6
  },
  hover: {
    opacity: 0.2
  }
}

function Home() {
    return (
      <Wrapper>
        <AnimatePresence>
          <Container
            variants = {boxOne}
            initial = "normal"
            whileHover = "hover"
          >
            <Img1
              variants = {textTwo}
              src = "../../Images/Air.png" 
            />
            <Img1 src = "../../Images/departure.png" />
            <Img1
              variants = {textOne} 
              src = "../../Images/personalword.png" 
            />
          </Container>
          <Container
            variants = {boxTwo}
            initial = "normal"
            whileHover = "hover"
          >
            <Img2
              variants = {textTwo} 
              src = "../../Images/ch.png" 
            />
            <Img2
              variants = {textOne}
              src = "../../Images/walkabout.png" 
            />
          </Container>
          <Container
            variants = {boxTwo}
            initial = "normal"
            whileHover = "hover"
          >
            <Img3 
              variants = {textTwo} 
              src = "../../Images/ive.png" 
            />
            <Img3 
              variants = {textOne}
              src = "../../Images/readingrecord.png" 
            />
          </Container>
          <Container
            variants = {boxOne}
            initial = "normal"
            whileHover = "hover"
          >
            <Img4 src = "../../Images/logo.png" />
            <Img4 src = "../../Images/arrival.png" />
            <Img4
              variants = {textOne}
              src = "../../Images/afterflight.png" 
            />
          </Container>
        </AnimatePresence>
      </Wrapper>
    );
}

export default Home;