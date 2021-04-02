import styled from 'styled-components';
import { colors } from '../../utils/theme/colors';

export const Container = styled.div`
  display: flex;
  color: ${colors.white};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 100vh;

  h1 {
    margin: 0;
    font-size: 2rem;
  }
`;
