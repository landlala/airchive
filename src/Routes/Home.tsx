import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence} from "framer-motion";
import { useNavigate, useMatch, PathMatch, Link } from "react-router-dom";
import transition from "../transition";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const Container = styled(motion.div)`
  &: first-child {
    position: relative;
    background-image: url("../../Images/edit11.jpg");
    background-size: 100vw 100vh;
    background-position: left;
    width: 30vw;
    height: 100vh;
  }
  &: nth-child(2) {
    position: relative;
    background-image: url("../../Images/edit19.jpg");
    background-size: cover;
    background-position-x: 60%;
    background-attachment: fixed;
    width: 20vw;
    height: 100vh;
  }
  &: nth-child(3) {
    position: relative;
    background-image: url("../../Images/edit10.jpg");
    background-size: cover;
    background-position: 40%;
    background-attachment: fixed;
    width: 20vw;
    height: 100vh;
  }
  &: last-child {
    position: relative;
    background-image: url("../../Images/edit7.jpg");
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
`;

const Nav1 = styled(motion.img)`
  position: absolute;
  top: 10%;
  left: 80%;
  transform: translate(-50%, -50%);
  height: 7vh;
  opacity: 0.5;
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
`;

const Nav2 = styled(motion.img)`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 7vh;
  opacity: 0.5;
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
`;

const Nav3 = styled(motion.img)`
  position: absolute;
  top: 10%;
  left: 20%;
  transform: translate(-50%, -50%);
  height: 7vh;
  opacity: 0.5;
`;

const Svg = styled(motion.svg)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 35%;
    opacity: 0.6;
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
  hover: {
    opacity: 1
  }
};

const textTwo = {
  hover: {
    opacity: 0.2,
  }
}

const svg = {
  start: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  end: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
    transition: {
      pathLength: {delay: 1, type: "spring", duration: 7},
      fill: {delay: 4.2, duration: 0.3}
    }
  }
};

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
              initial = {{x: "-50%", y: "calc(-50% + 50px)", opacity: 0}}
              animate = {{y: "-50%", opacity: 0.6}}
              transition = {{y: {type: "spring", duration: 1, delay: 1}}}
              src = "../../Images/Air.png" 
            />
            <Img1 src = "../../Images/departure.png" />
            <Link to = "personalword">
              <Nav1
                variants = {textOne}
                src = "../../Images/personalword.png" 
              />
            </Link>
          </Container>
          <Container
            variants = {boxTwo}
            initial = "normal"
            whileHover = "hover"
          >
            <Img2
              variants = {textTwo} 
              initial = {{x: "-50%", y: "calc(-50% + 50px)", opacity: 0}}
              animate = {{y: "-50%", opacity: 0.6}}
              transition = {{y: {type: "spring", duration: 1, delay: 1.6}}}
              src = "../../Images/ch.png" 
            />
            <Link to = "walkabout">
              <Nav2
                variants = {textOne}
                src = "../../Images/walkabout.png" 
              />
            </Link>
          </Container>
          <Container
            variants = {boxTwo}
            initial = "normal"
            whileHover = "hover"
          >
            <Img3 
              variants = {textTwo} 
              initial = {{x: "-50%", y: "calc(-50% + 50px)", opacity: 0}}
              animate = {{y: "-50%", opacity: 0.6}}
              transition = {{y: {type: "spring", duration: 1, delay: 2.2}}}
              src = "../../Images/ive.png" 
            />
            <Link to = "readingrecord">
              <Nav2 
                variants = {textOne}
                src = "../../Images/readingrecord.png" 
              />
            </Link>
          </Container>
          <Container
            variants = {boxOne}
            initial = "normal"
            whileHover = "hover"
          >
            <Svg
              version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300.000000 397.000000"
            >
              <g transform="translate(0.000000,397.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none"> 
                <motion.path 
                  variants = {svg}
                  initial = "start"
                  animate = "end"
                  stroke = "white"
                  strokeWidth = "12"
                  d="M1430 3964 c-247 -48 -470 -270 -672 -670 -71 -141 -113 -243 -238 -584 -51 -137 -98 -236 -302 -630 -112 -215 -178 -384 -213 -547 l-6 -32 53 15 c141 42 272 112 606 326 270 173 438 264 572 309 80 27 114 32 218 37 75 3 146 0 183 -7 173 -34 366 -127 669 -322 324 -209 442 -273 594 -325 97 -33 100 -33 92 19 -15 90 -93 296 -171 451 -45 88 -133 262 -196 386 -66 130 -133 278 -158 350 -141 404 -226 593 -351 783 -152 231 -285 351 -457 414 -63 23 -174 36 -223 27z m195 -308 c129 -63 260 -226 388 -481 95 -189 608 -1288 603 -1292 -6 -7 -92 39 -279 148 -439 257 -623 329 -842 329 -215 0 -409 -77 -852 -338 -95 -56 -195 -113 -222 -127 l-50 -25 28 63 c16 34 119 254 229 488 110 234 223 477 252 540 165 361 287 554 411 645 121 89 223 104 334 50z"
                />
                <motion.path 
                  variants = {svg}
                  initial = "start"
                  animate = "end"
                  stroke = "white"
                  strokeWidth = "12"
                  d = "M1390 1714 c-113 -13 -246 -40 -348 -68 -115 -33 -534 -165 -540 -170 -1 -2 -1 -59 0 -128 l3 -125 230 74 c410 132 556 163 755 163 205 0 360 -32 743 -155 111 -36 217 -68 235 -71 l32 -6 0 124 0 124 -242 76 c-282 90 -398 121 -522 143 -92 16 -285 26 -346 19z"
                /> 
                <motion.path 
                  variants = {svg}
                  initial = "start"
                  animate = "end"
                  stroke = "white"
                  strokeWidth = "12"
                  d="M1285 1224 c-129 -20 -269 -56 -520 -135 -121 -38 -271 -82 -332 -97 l-113 -27 0 -162 c0 -94 4 -163 9 -163 23 0 253 64 431 120 409 129 553 156 792 148 205 -7 313 -31 717 -158 181 -56 376 -110 400 -110 7 0 11 54 11 163 l0 162 -98 23 c-53 12 -198 54 -322 93 -401 125 -568 160 -770 158 -63 -1 -155 -7 -205 -15z"
                /> 
                <motion.path 
                  variants = {svg}
                  initial = "start"
                  animate = "end"
                  stroke = "white"
                  strokeWidth = "12"
                  d="M1315 679 c-114 -15 -288 -57 -510 -124 -263 -79 -429 -122 -553-140 -54 -8 -100 -15 -104 -15 -5 0 -8 -90 -8 -200 l0 -200 43 6 c205 29 290 49 618 147 375 113 544 143 754 134 197 -9 300 -31 770 -171 184 -55 374 -98 483 -110 l52 -5 0 199 c0 110 -3 200 -7 200 -5 0 -51 7 -103 14 -135 21 -273 55 -525 131 -267 80 -387 110 -525 130 -114 16 -275 18 -385 4z"
                /> 
              </g>
            </Svg>
            <Img4 src = "../../Images/arrival.png" />
            <Link to = "afterflight">
              <Nav3
                variants = {textOne}
                src = "../../Images/afterflight.png" 
              />
            </Link>
          </Container>
        </AnimatePresence>
      </Wrapper>
    );
}

export default transition(Home);