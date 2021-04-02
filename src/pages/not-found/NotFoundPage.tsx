import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { colors } from '../../utils/theme/colors';
import { tapEffect, fadeIn } from './../../helpers/animations';
import { Button, Container } from './NotFoundPage.styles';
import { UnstyledLink } from '../../utils/components/UnstyledLink';

export const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <style type="text/css">{`
          body { background-color: ${colors.primary}; }
        `}</style>
      </Helmet>
      <Container>
        <motion.h1 {...fadeIn(0.5)}>Ops</motion.h1>
        <motion.p {...fadeIn(0.5)}>Página não encontrada</motion.p>
        <UnstyledLink to="/">
          <Button {...fadeIn(0.5)} {...tapEffect(colors.primaryDarker)}>
            Voltar
          </Button>
        </UnstyledLink>
      </Container>
    </>
  );
};

export default NotFoundPage;
