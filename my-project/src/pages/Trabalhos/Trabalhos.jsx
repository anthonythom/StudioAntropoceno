import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Section = styled.div``;

const Container = styled.div`
  margin-top: 150px;
  display: flex;
  text-align: center;

  justify-content: space-evenly;
  align-items: baseline;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PhotoContainer = styled.div`
  position: relative;
  margin: 10px;
  overflow: hidden;
  cursor: pointer;
  text-align: center;
`;

const PhotoImage = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${PhotoContainer}:hover & {
    transform: scale(1.1);
    filter: grayscale(1);
  }
`;

const PhotoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  font-weight: bold;
  transition: opacity 0.3s ease;
`;

const PhotoProtection = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;

  ${PhotoContainer}:hover & {
    opacity: 7;
    pointer-events: all;
  }
`;

const PhotoName = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

const Left = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

`;

const Middle = styled.div`

  display: flex;
  justify-content: space-around;
  flex-direction: column;
  gap: 90px;
`;

const Right = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;

`;

const Name = styled.h1`
  margin-top: 25px;
  font-size: 1.5rem;
  text-align: center;

  margin-bottom: 2rem;

  color: #000000;

  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  padding-bottom: 20px;
`;

const Button= styled.div`
display: flex;
position: absolute;
color: black;
background-color: #ffffff;

margin-left: 95%;
margin-top: 70vh;
@media (max-width: 768px) {
 
position: absolute;
margin-left: 45%;
top: 220px;
background-color: transparent;
  }
`;




const Trabalhos = () => {

  const [showName, setShowName] = useState(false);
  const handleMouseEnter = () => {
    setShowName(true);
  };
  const handleMouseLeave = () => {
    setShowName(false);
  };

  return (
    <Section id="trabalhos">
      <Container>
        <Left>

       

          <div>
            <Link to="/trabalhos1">
              <PhotoContainer
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <PhotoImage src="./img/job1.jpeg" />

                <PhotoOverlay> </PhotoOverlay>
                <PhotoProtection></PhotoProtection>

                <Name>Bruno Ferreira Mota</Name>
              </PhotoContainer>
            </Link>
          </div>
          <div>
            {" "}
            <Link to="/trabalhos1">
              <PhotoContainer
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <PhotoImage src="./img/job2.jpeg" />

                <PhotoOverlay> </PhotoOverlay>
                <PhotoProtection></PhotoProtection>

                <Name>Bruno Ferreira Mota</Name>
              </PhotoContainer>
            </Link>
          </div>
        </Left>

        <Middle>
          <div>
            <Link to="/trabalhos2">
              <PhotoContainer
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <PhotoImage src="./img/job2.jpeg" />

                <PhotoOverlay> </PhotoOverlay>
                <PhotoProtection></PhotoProtection>

                <Name>Bruno Ferreira Mota</Name>
              </PhotoContainer>
            </Link>
          </div>

          <div>
            
            <Link to="/trabalhos2">
              <PhotoContainer
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <PhotoImage src="./img/Bruno.jpeg" />

                <PhotoOverlay> </PhotoOverlay>
                <PhotoProtection></PhotoProtection>

                <Name>Bruno Ferreira Mota</Name>
              </PhotoContainer>
            </Link>
          </div>
        </Middle>

        <Right>
          <div>
            <Link to="/trabalhos3">
              <PhotoContainer
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <PhotoImage src="./img/job3.jpeg" />

                <PhotoOverlay> </PhotoOverlay>
                <PhotoProtection></PhotoProtection>

                <Name>Bruno Ferreira Mota</Name>
              </PhotoContainer>
            </Link>
          </div>

          <div>
            <Link to="/trabalhos3">
              <PhotoContainer
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <PhotoImage src="./img/Bruno.jpeg" />

                <PhotoOverlay> </PhotoOverlay>
                <PhotoProtection></PhotoProtection>

                <Name>Bruno Ferreira Mota</Name>
              </PhotoContainer>
            </Link>
          </div>
        </Right>
        
        <Button class="back-to-top" data-hover-hint="backToTop">
                <a class="nav-link" href="./trabalhos"><span class="arrow">&uarr;</span><span class="preserve-whitespace"> Voltar</span></a>
              </Button>
      </Container>
      
    </Section>
  );
};

export default Trabalhos;
