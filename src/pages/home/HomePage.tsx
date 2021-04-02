import React from 'react';
import BackgroundBusImage from './../../images/backgroundBus.png';
import { Section, Container, ColumnLeft, Button, ColumnRight, Image } from './HomePage.styles';

export const HomePage = () => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>Beasy</h1>
          <p>Encontre o seu caminho</p>
          <Button>Acessar</Button>
        </ColumnLeft>
        <ColumnRight>
          <Image src={BackgroundBusImage} alt="bus" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default HomePage;
