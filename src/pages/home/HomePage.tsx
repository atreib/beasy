import React from 'react';
import { motion } from 'framer-motion';
import BackgroundBusImage from './../../images/backgroundBus.png';
import { Section, Container, ColumnLeft, Button, ColumnRight, Image, colors } from './HomePage.styles';

interface NumberDictionary {
  [key: string]: number;
}

enum IDirections {
  FromTop = 1,
  FromRight = 2,
  FromBottom = 3,
  FromLeft = 4,
}

export const HomePage = () => {
  const slideAndFade = (direction: IDirections) => {
    const hidden: NumberDictionary = { opacity: 0 };
    const visible: NumberDictionary = { opacity: 1 };

    switch (direction) {
      case IDirections.FromTop:
        hidden['y'] = -100;
        visible['y'] = 0;
        break;
      case IDirections.FromRight:
        hidden['x'] = 100;
        visible['x'] = 0;
        break;
      case IDirections.FromBottom:
        hidden['y'] = 100;
        visible['y'] = 0;
        break;
      case IDirections.FromLeft:
        hidden['x'] = -100;
        visible['x'] = 0;
        break;
    }

    const options = {
      variants: {
        hidden,
        visible,
      },
      initial: 'hidden',
      animate: 'visible',
      transition: { duration: 1 },
    };

    return options;
  };

  return (
    <Section>
      <Container>
        <ColumnLeft>
          <motion.h1 {...slideAndFade(IDirections.FromTop)}>Beasy</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            Encontre o seu caminho
          </motion.p>
          <Button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, backgroundColor: colors.primaryDarker }}
          >
            Acessar
          </Button>
        </ColumnLeft>
        <ColumnRight>
          <Image {...slideAndFade(IDirections.FromLeft)} src={BackgroundBusImage} alt="bus" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default HomePage;
