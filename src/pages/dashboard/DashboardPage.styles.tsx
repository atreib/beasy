import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../../utils/theme/colors';

export const Page = styled.div`
  background-color: ${colors.background};
  height: 100%;
`;

export const Header = styled(motion.header)`
  padding: 1rem;
  background-color: ${colors.primary};
  color: ${colors.primaryContrast};

  border-bottom-left-radius: 70% 2%;
  border-bottom-right-radius: 100% 30%;
`;

export const ToolbarButton = styled(motion.div)``;
export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;

  ${ToolbarButton} {
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
      width: 100%;
      height: auto;
      filter: invert(1);
    }
  }
`;

export const UserInfo = styled.div``;
export const WeatherInfo = styled(motion.div)``;
export const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  ${UserInfo} {
    h1 {
      margin: 0.5rem;
      margin-left: 0;
      font-size: 1.5rem;
    }

    h2 {
      margin: 0.5rem;
      margin-left: 0;
      font-size: 1.5rem;
      line-height: 1.2;
    }

    p {
      margin: 0.5rem;
      margin-left: 0;
      font-size: 1rem;
    }
  }

  ${WeatherInfo} {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    p {
      margin: 0;
      margin-top: 0.1rem;
    }

    img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }
  }
`;

export const SliderHeader = styled(motion.h2)``;
export const SliderList = styled.div``;
export const SliderItem = styled(motion.div)``;
export const Slider = styled.section`
  margin: 2rem 0;

  ${SliderHeader} {
    margin: 1rem;
    color: ${colors.primary};
  }

  ${SliderList} {
    width: 100%;
    overflow: auto;
    padding-bottom: 1rem;
    margin: 0 1rem;
    display: flex;
    flex-wrap: no-wrap;
    justify-content: flex-start;

    ${SliderItem} {
      min-width: 45%;
      min-height: 100px;
      padding: 1rem;
      margin-right: 1rem;

      border-radius: 4px;
      background-color: ${colors.white};
      box-shadow: 0px 2px 2px -2px ${colors.black};
    }
  }
`;
