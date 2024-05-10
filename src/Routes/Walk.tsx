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
    z-index: 5;
`;

const Logo = styled.img`
    position: fixed;
    top: 3vh;
    right: 0;
    left: 0;
    margin: auto;
    height: 7vh;
    z-index: 10;
`;

const Bg = styled.div`
    position: relative;
    background-image: url("/airchive/Images/edit18.jpg");
    background-size: cover;
    height: 185vh;
`;

const Poem = styled.img`
    position: absolute;
    opacity: 0.8;
`;

function Walk() {
    return (
        <>
            <Bg> 
                <Link to = "/">
                    <Logo src = "/airchive/Images/logo/0.png" />
                </Link>
                <Poem
                    src = "/airchive/Images/poems/0.png"
                    style = {{
                        width: "17%",
                        top: "25vh",
                        left: "5vw"
                    }} 
                />
                <Poem
                    src = "/airchive/Images/poems/1.png"
                    style = {{
                        width: "12%",
                        top: "95vh",
                        left: "11vw"
                    }} 
                />
                <Poem
                    src = "/airchive/Images/poems/2.png"
                    style = {{
                        width: "15%",
                        top: "132vh",
                        left: "3vw"
                    }} 
                />
                <Poem
                    src = "/airchive/Images/poems/3.png"
                    style = {{
                        width: "10%",
                        top: "50vh",
                        left: "28vw"
                    }} 
                />
                <Poem
                    src = "/airchive/Images/poems/4.png"
                    style = {{
                        width: "11%",
                        top: "116vh",
                        left: "34vw"
                    }} 
                />
                <Poem
                    src = "/airchive/Images/poems/5.png"
                    style = {{
                        width: "12%",
                        top: "32vh",
                        left: "48vw"
                    }} 
                />
                <Poem
                    src = "/airchive/Images/poems/6.png"
                    style = {{
                        width: "12%",
                        top: "90vh",
                        left: "52vw"
                    }} 
                />
                <Poem
                    src = "/airchive/Images/poems/7.png"
                    style = {{
                        width: "8%",
                        top: "145vh",
                        left: "57vw"
                    }} 
                />
                <Poem
                    src = "/airchive/Images/poems/8.png"
                    style = {{
                        width: "14%",
                        top: "20vh",
                        left: "67vw"
                    }} 
                />
                <Poem
                    src = "/airchive/Images/poems/9.png"
                    style = {{
                        width: "12%",
                        top: "100vh",
                        left: "69vw"
                    }} 
                />
                <Poem
                    src = "/airchive/Images/poems/10.png"
                    style = {{
                        width: "13%",
                        top: "50vh",
                        left: "84vw"
                    }} 
                />
                <Poem
                    src = "/airchive/Images/poems/11.png"
                    style = {{
                        width: "14%",
                        top: "133vh",
                        left: "83vw"
                    }} 
                />
            </Bg>
        </>
        
    );
}

export default transition(Walk);