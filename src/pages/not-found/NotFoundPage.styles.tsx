import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../../utils/theme/colors';

export const Button = styled(motion.div)``;
export const Container = styled.div`
  display: flex;
  color: ${colors.white};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
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
