import React, { useState } from "react";
import styled from 'styled-components';
import Navbar from "../../components/Navbar";




const Section = styled.div`

`;


const Container = styled.div`
margin-top: 150px;
display: flex;
text-align: center;
align-items: center;
justify-content: space-evenly;


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
  width: 400px;
  height: 400px;
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



const Left = styled.h1`
 
`;
const Right= styled.h1`

`;


const Description = styled.p`
  font-size: 1.4rem;
  text-align: justify;
  max-width: 800px;
  margin-bottom: 2rem;

  color: #000000;



  font-weight: 400;
  line-height: 26px;
  padding-bottom: 20px;


  @media (max-width: 768px) {
  
    width: 90%;
    margin: auto;
  font-size: 15px;

  text-align: center;



  }

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





const Sobre = () => {
  const [showName, setShowName] = useState(false);
  const handleMouseEnter = () => {
    setShowName(true);
  };
  const handleMouseLeave = () => {
    setShowName(false);
  };



  return (

    <Section>
       
    <Container>
        
      <Left>

      <PhotoContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
          
      <PhotoImage src="./img/Bruno.jpeg"  />
    <PhotoName show={showName}> @brvnomota </PhotoName>
    <PhotoOverlay> </PhotoOverlay>
<PhotoProtection></PhotoProtection>

      <Name>Bruno Ferreira Mota</Name>

      </PhotoContainer>






      </Left>

      <Right>
      <Description>
   
      Bruno Ferreira Mota, aos 23 anos, é um arquiteto e urbanista formado pelo Mackenzie com 100% de bolsa pelo Prouni. Sua paixão pela arquitetura e urbanismo é evidente em sua visão única e compromisso em transformar espaços.

Formado pela Universidade Mackenzie, Bruno se destacou por sua criatividade e habilidades técnicas. Seu trabalho de conclusão abordou a arquitetura sustentável para comunidades de baixa renda, recebendo reconhecimento por sua relevância social e soluções inovadoras.

Além da formação acadêmica, Bruno buscou experiências práticas em estágios em escritórios de arquitetura renomados. Essas oportunidades permitiram que ele aprimorasse suas habilidades e desenvolvesse um estilo próprio.

Movido por sua crença no poder da arquitetura, Bruno se envolve em projetos sociais, levando design de qualidade para comunidades com menos recursos. Seu trabalho voluntário inclui a renovação urbana e a melhoria de espaços públicos em bairros desfavorecidos.

Com uma mente aberta e inovadora, Bruno busca constantemente aprimorar suas habilidades e incorporar ideias modernas em seus projetos. Sua abordagem visa criar espaços inspiradores e funcionais que atendam às necessidades das pessoas.

Para Bruno Ferreira Mota, a arquitetura é uma maneira de deixar um legado duradouro, impactando positivamente a sociedade através de seu trabalho.

      </Description>
      </Right>




      

    </Container>
    </Section>
  );
};

export default Sobre;