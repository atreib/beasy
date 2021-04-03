import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../../utils/theme/colors';

export const Page = styled.div`
  background-color: ${colors.background};
  height: 100%;
`;

export const Header = styled(motion.header)`
  padding: 1rem 1rem 0 1rem;
  height: 20vh;
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

export const TitleLabel = styled.div``;
export const TitleIcon = styled(motion.div)``;
export const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;

  ${TitleLabel} {
    h1 {
      margin: 1rem;
      margin-left: 0;
      font-size: 1.5rem;
    }
  }

  ${TitleIcon} {
    display: flex;
    flex-direction: column;
    justify-content: flex-center;
    align-items: center;

    img {
      width: 3rem;
      height: 3rem;
      filter: invert(1);
    }
  }
`;

interface QuestionAnswerProps {
  open: boolean;
}

export const Question = styled(motion.article)``;
export const QuestionTitle = styled(motion.div)``;
export const QuestionAnswer = styled(motion.div)<QuestionAnswerProps>`
  display: ${({ open }) => (open ? 'block' : 'none')};
`;
export const Faq = styled.section`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: calc(85vh - 4rem);
  overflow: auto;

  ${Question} {
    display: flex;
    flex-direction: column;
    margin: 0 0 2rem 0;
    border-radius: 4px;

    ${QuestionTitle} {
      background-color: ${colors.primary};
      color: ${colors.primaryContrast};
      padding: 0.5rem;
      display: flex;
      border-radius: 4px 4px 0 0;

      img {
        width: 2rem;
        max-height: 2rem;
        filter: invert(1);
      }
      h2 {
        margin: 0.5rem 1rem;
        font-size: 1rem;
        font-weight: bold;
      }
    }

    ${QuestionAnswer} {
      background: ${colors.white};
      padding: 1rem;
    }
  }
`;
