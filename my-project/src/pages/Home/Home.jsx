import React from 'react'
import styled from "styled-components";
import Navbar from '../../components/Navbar';





const Section = styled.div`

  



  
`;

const Container = styled.div`







margin-top: 150px;



  color:  #000000;



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


`;

const PhotoImage = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
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
height: 100px;


  align-items: center;
  text-align: center;
  justify-content: center;

gap: 20px;


  h1{
  font-size: 2.7rem;
   
    text-align: center;
  
    font-weight: 300;
    font-style: normal;

    color: #000000 !important;
    line-height: 40px;

    @font-face {
    font-family: 'Raleway Thin';
    font-style: normal;
    font-weight: normal;
    src: local('Raleway Thin'), url('Raleway Thin.woff') format('woff');
    }
    
  @media only screen and (max-width: 768px) {
    font-size: 40px;
  
  }
}

p{
  
margin-top: 25px;
    font-style: normal;
    font-size: 25px;
    color: #000000 !important;
    line-height: 40px;
    font-weight: bold;
    @media only screen and (max-width: 768px) {
    font-size: 11px;
  
  }
    
    
}


`;








const Home = () => {
  return (
   <Section id="home" className="header_link">
   
    <Container>


<Intro>
  <h1>Representação arquitetônica por Bruno Mota</h1>
  <p>Render | Isométricas | Diagramas | Representação</p>
</Intro>

<Work>


<Container1>
<div className='fileira1'>

<PhotoContainer>
          <PhotoImage src="./img/foto1.jpeg" alt="Foto 1" width={500}  height={500}/>
          <PhotoOverlay></PhotoOverlay>
          <PhotoProtection></PhotoProtection>
         
        </PhotoContainer>

        <PhotoContainer>
          <PhotoImage src="./img/test1.png" alt="Foto 1" width={400}  height={400} />
          <PhotoOverlay></PhotoOverlay>
          <PhotoProtection></PhotoProtection>
        </PhotoContainer>
</div>
</Container1>





<div className='fileira2'>
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

<div className='fileira3'>
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
   </Section>
  )
}

export default Home;