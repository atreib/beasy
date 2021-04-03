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
    justify-content: flex-center;
    align-items: center;

    p {
      margin: 0;
      margin-top: 0.5rem;
    }

    img {
      width: 3rem;
      height: 3rem;
      /* border-radius: 50%; */
      filter: invert(1);
    }
  }
`;

export const QuickButton = styled(motion.div)``;
export const QuickAccess = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin: 1rem 0;

  ${QuickButton} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    margin: 0 1rem;
    background: ${colors.white};
    border-radius: 50%;
    width: 10vw;
    max-width: 5vw;
    max-height: 5vw;
    border: 1px solid ${colors.complementaryDarker};
    color: ${colors.complementaryDarker};

    img {
      width: 100%;
      height: 100%;
      // use this to find a new filter: https://codepen.io/sosuke/pen/Pjoqqp
      filter: invert(55%) sepia(44%) saturate(1162%) hue-rotate(48deg) brightness(97%) contrast(101%);
    }
  }
`;

export const SliderButton = styled(motion.div)``;
export const SliderHeader = styled(motion.h2)``;
export const SliderList = styled.div``;
export const SliderItem = styled(motion.div)``;
export const Slider = styled.section`
  margin: 1rem 0;

  ${SliderHeader} {
    margin: 1rem;
    color: ${colors.primary};
  }

  ${SliderList} {
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
      background-color: ${colors.white};

      h3 {
        color: ${colors.primary};
        margin: 0.5rem 0 1rem 0;
      }

      p {
        margin: 0.5rem 0 0 0;
        font-size: 1rem;
        line-height: 1.1;
      }

      h2 {
        font-size: 1.5rem;
        line-height: 1.1;
        margin: 0;
      }

      ${SliderButton} {
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border: 2px solid ${colors.complementaryDarker};
        color: ${colors.complementaryDarker};
        border-radius: 4px;
        outline: none;
        cursor: pointer;
        background: transparent;
        text-align: center;
      }
    }
  }
`;
