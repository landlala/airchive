import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence} from "framer-motion";
import { useNavigate, useMatch, PathMatch } from "react-router-dom";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: pink;
  display: flex;
`;

const Container = styled.div`
  &: first-child {
    position: relative;
    background-image: url("../../Images/edit1.jpg");
    background-size: 100vw 100vh;
    width: 30vw;
    height: 100vh;
    background-color: white;
  }
  &: nth-child(2) {
    position: relative;
    background-image: url("../../Images/edit2.jpg");
    background-size: 100vw 100vh;
    background-position: 35%;
    width: 20vw;
    height: 100vh;
    background-color: green;
  }
  &: nth-child(3) {
    position: relative;
    background-image: url("../../Images/edit3.jpg");
    background-size: 100vw 100vh;
    background-position: 65%;
    width: 20vw;
    height: 100vh;
    background-color: yellow;
  }
  &: last-child {
    position: relative;
    background-image: url("../../Images/edit4.jpg");
    background-size: 100vw 100vh;
    background-position: 100%;
    width: 30vw;
    height: 100vh;
    background-color: orange;
  }
`;

const Img1 = styled.img`
  &: nth-child(1) {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 40vh;
    opacity: 0.7;
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
    height: 8vh;
  }
`;

const Img2 = styled.img`
  &: nth-child(1) {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 24vh;
    opacity: 0.7;
  }  
  &: nth-child(2) {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 8vh;
  }  
`;

const Img3 = styled.img`
  &: nth-child(1) {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 32vh;
    opacity: 0.7;
  }  
  &: nth-child(2) {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 8vh;
  }
`;

const Img4 = styled.img`
  &: nth-child(1) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 30vh;
    opacity: 0.7;
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
    height: 8vh;
  }
`;

function Home() {
    return (
      <Wrapper>
        <Container>
          <Img1 src = "../../Images/Air.png" />
          <Img1 src = "../../Images/departure.png" />
          <Img1 src = "../../Images/personalword.png" />
        </Container>
        <Container>
          <Img2 src = "../../Images/ch.png" />
          <Img2 src = "../../Images/walkabout.png" />
        </Container>
        <Container>
          <Img3 src = "../../Images/ive.png" />
          <Img3 src = "../../Images/readingrecord.png" />
        </Container>
        <Container>
          <Img4 src = "../../Images/logo.png" />
          <Img4 src = "../../Images/arrival.png" />
          <Img4 src = "../../Images/afterflight.png" />
        </Container>
      </Wrapper>
    );
}

export default Home;