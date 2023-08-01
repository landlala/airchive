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

/* 
const Img = styled.img`
  height: 100vh;
  &: first-child {
    position: absolute;
    clip: rect(0, 570px, 100vh, 0);
  }
  &: nth-child(2) {
    position: absolute;
    clip: rect(0, 960px, 100vh, 570px);
  }
  &: nth-child(3) {
    position: absolute;
    clip: rect(0, 1350px, 100vh, 960px);
  }
  &: last-child {
    position: absolute;
    clip: rect(0, 1920px, 100vh, 1350px);
  }
`;
*/

const Img = styled.img`
  width: 100vw;
  overflow: hidden;
`;

const Container = styled.div`
  &: first-child {
    background-image: url("../../Images/edit1.jpg");
    background-size: 100vw 100vh;
    width: 30vw;
    height: 100vh;
    background-color: white;
  }
  &: nth-child(2) {
    background-image: url("../../Images/edit2.jpg");
    background-size: 100vw 100vh;
    background-position: 35%;
    width: 20vw;
    height: 100vh;
    background-color: green;
  }
  &: nth-child(3) {
    background-image: url("../../Images/edit3.jpg");
    background-size: 100vw 100vh;
    background-position: 65%;
    width: 20vw;
    height: 100vh;
    background-color: yellow;
  }
  &: last-child {
    background-image: url("../../Images/edit4.jpg");
    background-size: 100vw 100vh;
    background-position: 100%;
    width: 30vw;
    height: 100vh;
    background-color: orange;
  }
`;

function Home() {
    return (
      <Wrapper>
        <Container />
        <Container />
        <Container />
        <Container />
      </Wrapper>
    );
}

export default Home;