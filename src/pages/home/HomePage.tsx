import React from 'react';
import { motion } from 'framer-motion';
import BackgroundBusImage from './../../images/backgroundBus.png';
import { Section, Container, ColumnLeft, Button, ColumnRight, Image } from './HomePage.styles';
import { slideToWithFadeIn } from './../../helpers/animations';
import { IDirections } from '../../utils/enums/directions';
import { colors } from '../../utils/theme/colors';

/**
 * Start/welcome page component
 * @returns Our app's starter page
 */
export const HomePage = () => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <motion.h1 {...slideToWithFadeIn(IDirections.FromTop)}>Beasy</motion.h1>
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
          <Image {...slideToWithFadeIn(IDirections.FromLeft)} src={BackgroundBusImage} alt="bus" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default HomePage;
