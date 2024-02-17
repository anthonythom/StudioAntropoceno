import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Sobre from "../Sobre/Sobre"
import "../Home/Home.css"

const Section = styled.div`
`;

const Container = styled.div`


  color: #000000;
`;

const Work = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    justify-content: center;
  }
`;

const Container1 = styled.div`
  display: block;

  margin-top: 212px;
`;

const PhotoContainer = styled.div`
  position: relative;
  margin: 10px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 50px;
  margin-bottom: 100px;
`;

const PhotoImage = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
  border-radius: 50px;
  transition: transform 0.3s ease;

  ${PhotoContainer}:hover & {
    transform: scale(1.1);
  }
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
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

const Intro = styled.div`
background-image: url('./public/img/bg-home.png');
  background-size: cover;
  height: 100vh;
  width: 100vw;
 display: flex;
 padding: 50px;
  align-items: start;
  text-align: center;
justify-content: end;
  flex-direction: column;
  

  



  p {
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    margin-bottom: 50px;
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    font-style: normal;
    font-size: 45px;
    color: #d1c4c0 !important;

   
    @media only screen and (max-width: 768px) {
      font-size: 11px;
    }
  }
`;


const Logo = styled.img`
  height: 70px;

  cursor: pointer;
`;

const Home = () => {
  return (
    <Section id="inicio" className="header_link">

      <Container>
        <Intro>
        <Logo src="./public/img/bg-home.svg" />
          <p>visualização arquitetônica</p>
        </Intro>

        <Work>
          <Container1>
            <div className="fileira1">
              <PhotoContainer>
                <PhotoImage
                  src="./img/foto1.jpeg"
                  alt="Foto 1"
                  width={500}
                  height={500}
                />
                <PhotoOverlay></PhotoOverlay>
                <PhotoProtection></PhotoProtection>
              </PhotoContainer>

              <PhotoContainer>
                <PhotoImage
                  src="./img/test1.png"
                  alt="Foto 1"
                  width={400}
                  height={400}
                />
                <PhotoOverlay></PhotoOverlay>
                <PhotoProtection></PhotoProtection>
              </PhotoContainer>
            </div>
          </Container1>

          <div className="fileira2">
            <PhotoContainer>
              <PhotoImage src="./img/foto2.jpeg" alt="Foto 1" />
              <PhotoOverlay></PhotoOverlay>
              <PhotoProtection></PhotoProtection>
            </PhotoContainer>
            <PhotoContainer>
              <PhotoImage src="./img/test2.png" alt="Foto 2" />
              <PhotoOverlay></PhotoOverlay>
              <PhotoProtection></PhotoProtection>
            </PhotoContainer>
          </div>

          <div className="fileira3">
            <PhotoContainer>
              <PhotoImage src="./img/foto3.jpeg" alt="Foto 1" />
              <PhotoOverlay></PhotoOverlay>
              <PhotoProtection></PhotoProtection>
            </PhotoContainer>
            <PhotoContainer>
              <PhotoImage src="./img/test3.png" alt="Foto 3" />
              <PhotoOverlay></PhotoOverlay>
              <PhotoProtection></PhotoProtection>
            </PhotoContainer>
          </div>
        </Work>
        
      </Container>


      <Container>

     

      </Container>
      
    </Section>
    
  );
};

export default Home;
