import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styled } from 'styled-components';

const Section = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
 margin-top: 100px;
`;

const Titulo = styled.div`


font-size: 55px;
    line-height: 25px;
    padding-bottom: 10px;
 color: black;
 text-align: center;
 @media only screen and (max-width: 768px) {
    font-size: 75px;
  }

`;
const Descricao = styled.div`
margin-top: 30px;
width: 30%;

text-align: center;

 color: black;
 text-align: center;
 @media only screen and (max-width: 768px) {
    width: 300px;
    font-size: 20px;
    margin-top: 50px;
  }
 
`;


const Container = styled.div`

margin-top: 100px;
width: 20%;
@media only screen and (max-width: 768px) {
    width: 300px;
    margin-bottom: 100px;
  }
`;



const Trabalhos1 = () => {
  const images = [
    {
      src: './img/job1.jpeg',
      alt: 'Imagem 1',
      caption: 'Legenda da Imagem 1',
      link: 'https://exemplo.com/imagem1'
    },
    {
      src: './img/job2.jpeg',
      alt: 'Imagem 2',
      caption: 'Legenda da Imagem 2',
      link: 'https://exemplo.com/imagem2'
    },
    {
      src: './img/job3.jpeg',
      alt: 'Imagem 3',
      caption: 'Legenda da Imagem 3',
      link: 'https://exemplo.com/imagem3'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1 ,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000 
  };

  return (
<Section>
<Titulo>
Brasília 50
</Titulo>
<Descricao>
Fifty designers were asked to pay homage to the city of Brasília and the legacy of Brazilian architect Oscar Niemeyer. Posters were inspired by Niemeyer's love of the curve and his forward-thinking architecture which can be seen throughout the city.
</Descricao>

    <Container>
    <Slider {...settings}>
        
      {images.map((image, index) => (
        <div key={index}>
          <a href={image.link} target="_blank" rel="noopener noreferrer">
            <img src={image.src} alt={image.alt} width={500} height={500}/>
          </a>
          <div className="caption">{image.caption}</div>
        </div>
      ))}
    </Slider>
    </Container>
    </Section>
  );
};

export default Trabalhos1;
