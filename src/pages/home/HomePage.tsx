import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import BackgroundBusImage from './../../images/backgroundBus.png';
import { Section, Container, ColumnLeft, Button, ColumnRight, Image } from './HomePage.styles';
import { slideToWithFadeIn, tapEffect, fadeIn } from './../../helpers/animations';
import { IDirections } from '../../utils/enums/directions';
import { colors } from '../../utils/theme/colors';
import { UnstyledLink } from '../../utils/components/UnstyledLink';

/**
 * Start/welcome page component
 * @returns Our app's starter page
 */
export const HomePage = () => {
  return (
    <>
      <Helmet>
        <style type="text/css">{`
          body { background-color: ${colors.primary}; }
        `}</style>
      </Helmet>
      <Section>
        <Container>
          <ColumnLeft>
            <motion.h1 {...slideToWithFadeIn(IDirections.FromTop, 1)}>Beasy</motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              Encontre o seu caminho
            </motion.p>
            <UnstyledLink to="/dashboard">
              <Button {...fadeIn(1)} {...tapEffect(colors.primaryDarker)}>
                Acessar
              </Button>
            </UnstyledLink>
          </ColumnLeft>
          <ColumnRight>
            <Image {...slideToWithFadeIn(IDirections.FromLeft, 1)} src={BackgroundBusImage} alt="bus" />
          </ColumnRight>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
