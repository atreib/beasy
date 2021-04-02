import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { colors } from '../../utils/theme/colors';
import { fadeIn } from './../../helpers/animations';
import { Container } from './LoadingPage.styles';

interface PageProperties {
  children: JSX.Element;
}

export const LoadingPage = ({ children }: PageProperties) => {
  return (
    <>
      <Helmet>
        <style type="text/css">{`
          body { background-color: ${colors.primary}; }
        `}</style>
      </Helmet>
      <Container>
        <motion.h1 {...fadeIn(0.5)}>{children}</motion.h1>
      </Container>
    </>
  );
};

export default LoadingPage;
