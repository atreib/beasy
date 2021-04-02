import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../../utils/theme/colors';

export const Section = styled.section`
  height: 100%;
  display: flex;
  jusitfy-content: center;
  align-items: center;
  background-image: linear-gradient(to right bottom, ${colors.primary} 60%, 1%, ${colors.complementary});
  overflow: hidden;
`;

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
`;

export const Button = styled(motion.div)``;
export const ColumnLeft = styled.div`
  display: flex;
  color: ${colors.white};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  z-index: 2;
  max-width: 80%;
  box-sizing: border-box;

  h1 {
    margin: 0.5rem;
    margin-left: 0;
    font-size: 2rem;
  }

  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }

  ${Button} {
    padding: 1rem 3rem;
    font-size: 1rem;
    border: 2px solid ${colors.white};
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    background: transparent;
  }
`;

export const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  overflow: hidden;
`;

export const Image = styled(motion.img)`
  position: absolute;
  max-width: 300px;
  max-height: auto;
  left: 20%;
`;
