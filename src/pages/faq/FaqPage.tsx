import React from 'react';
import { motion } from 'framer-motion';
import BackImage from './../../images/icons/back.svg';
import QuestionImage from './../../images/icons/question.svg';
import { colors } from '../../utils/theme/colors';
import { fadeIn, tapEffect, slideToWithFadeIn } from './../../helpers/animations';
import {
  Page,
  Header,
  Toolbar,
  ToolbarButton,
  Summary,
  TitleLabel,
  TitleIcon,
  Faq,
  Question,
  QuestionTitle,
  QuestionAnswer,
} from './FaqPage.styles';
import { UnstyledLink } from '../../utils/components/UnstyledLink';
import { IDirections } from '../../utils/enums/directions';

const questionsBase = [
  {
    id: 0,
    title: 'Quem somos?',
    answer: `A Beasy chegou para orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo massa, semper eget
    tristique non, ullamcorper ut metus. Maecenas quis velit leo. Vivamus orci est, facilisis eget scelerisque
    id, tincidunt sit amet nunc. Phasellus nisl arcu, finibus egestas fringilla laoreet, cursus ut urna. In eu
    pulvinar leo, a pretium leo. Pellentesque egestas ligula dolor, ut sollicitudin purus auctor in. Ut quis
    augue euismod, convallis nibh id, tincidunt nunc. Sed tincidunt ipsum a massa malesuada malesuada. Ut
    sapien enim, convallis non rutrum eget, cursus ac lacus. Aliquam erat volutpat. Sed nec est vel turpis
    tempus eleifend vel at nisi. Aenean urna nisi, volutpat ut erat nec, eleifend vulputate quam. Morbi sit
    amet nunc vel nibh sodales lacinia id eu elit. Nulla hendrerit magna nunc, eu porta tellus pharetra nec.`,
    open: false,
  },
  {
    id: 1,
    title: 'Quais cidades atendemos?',
    answer: `A Beasy chegou para orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo massa, semper eget
    tristique non, ullamcorper ut metus. Maecenas quis velit leo. Vivamus orci est, facilisis eget scelerisque
    id, tincidunt sit amet nunc. Phasellus nisl arcu, finibus egestas fringilla laoreet, cursus ut urna. In eu
    pulvinar leo, a pretium leo. Pellentesque egestas ligula dolor, ut sollicitudin purus auctor in. Ut quis
    augue euismod, convallis nibh id, tincidunt nunc. Sed tincidunt ipsum a massa malesuada malesuada. Ut
    sapien enim, convallis non rutrum eget, cursus ac lacus. Aliquam erat volutpat. Sed nec est vel turpis
    tempus eleifend vel at nisi. Aenean urna nisi, volutpat ut erat nec, eleifend vulputate quam. Morbi sit
    amet nunc vel nibh sodales lacinia id eu elit. Nulla hendrerit magna nunc, eu porta tellus pharetra nec.`,
    open: false,
  },
  {
    id: 2,
    title: 'Quais linhas estão no app?',
    answer: `A Beasy chegou para orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo massa, semper eget
    tristique non, ullamcorper ut metus. Maecenas quis velit leo. Vivamus orci est, facilisis eget scelerisque
    id, tincidunt sit amet nunc. Phasellus nisl arcu, finibus egestas fringilla laoreet, cursus ut urna. In eu
    pulvinar leo, a pretium leo. Pellentesque egestas ligula dolor, ut sollicitudin purus auctor in. Ut quis
    augue euismod, convallis nibh id, tincidunt nunc. Sed tincidunt ipsum a massa malesuada malesuada. Ut
    sapien enim, convallis non rutrum eget, cursus ac lacus. Aliquam erat volutpat. Sed nec est vel turpis
    tempus eleifend vel at nisi. Aenean urna nisi, volutpat ut erat nec, eleifend vulputate quam. Morbi sit
    amet nunc vel nibh sodales lacinia id eu elit. Nulla hendrerit magna nunc, eu porta tellus pharetra nec.`,
    open: false,
  },
  {
    id: 3,
    title: 'Como faço para solicitar uma linha que não está no app?',
    answer: `A Beasy chegou para orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo massa, semper eget
    tristique non, ullamcorper ut metus. Maecenas quis velit leo. Vivamus orci est, facilisis eget scelerisque
    id, tincidunt sit amet nunc. Phasellus nisl arcu, finibus egestas fringilla laoreet, cursus ut urna. In eu
    pulvinar leo, a pretium leo. Pellentesque egestas ligula dolor, ut sollicitudin purus auctor in. Ut quis
    augue euismod, convallis nibh id, tincidunt nunc. Sed tincidunt ipsum a massa malesuada malesuada. Ut
    sapien enim, convallis non rutrum eget, cursus ac lacus. Aliquam erat volutpat. Sed nec est vel turpis
    tempus eleifend vel at nisi. Aenean urna nisi, volutpat ut erat nec, eleifend vulputate quam. Morbi sit
    amet nunc vel nibh sodales lacinia id eu elit. Nulla hendrerit magna nunc, eu porta tellus pharetra nec.`,
    open: false,
  },
];

export const FaqPage = () => {
  const [questions, setQuestions] = React.useState(questionsBase);

  const openAnswerAnimations = {
    open: { opacity: 1, transition: { duration: 0.5 } },
    closed: { opacity: 0, transition: { duration: 0.5 } },
  };

  const openAnswer = (id: number) => {
    const rightQuestion = questions.find((q) => q.id === id);
    const otherQuestions = questions.filter((q) => q.id !== id);
    if (rightQuestion && otherQuestions) {
      rightQuestion.open = !rightQuestion.open;
      const fixedArray = [...otherQuestions, rightQuestion].sort((a, b) => a.id - b.id);
      setQuestions(fixedArray);
    }
  };

  return (
    <Page>
      <Header {...fadeIn(0.5)}>
        <Toolbar>
          <UnstyledLink to="/dashboard">
            <ToolbarButton {...tapEffect(colors.primaryDarker)} {...fadeIn(0.5)}>
              <img src={BackImage} />
            </ToolbarButton>
          </UnstyledLink>
          <ToolbarButton {...tapEffect(colors.primaryDarker)} {...fadeIn(0.5)}>
            &nbsp;
          </ToolbarButton>
        </Toolbar>
        <Summary>
          <TitleLabel>
            <motion.h1 {...fadeIn(0.5)}>Dúvidas frequentes</motion.h1>
          </TitleLabel>
          <TitleIcon {...fadeIn(1)}>
            <img src={QuestionImage} />
          </TitleIcon>
        </Summary>
      </Header>
      <Faq>
        {questions &&
          questions.map((question) => (
            <Question key={question.id} {...slideToWithFadeIn(IDirections.FromBottom, 0.5)}>
              <QuestionTitle onClick={() => openAnswer(question.id)} {...tapEffect(colors.primaryDarker)}>
                <img src={QuestionImage} />
                <h2>{question.title}</h2>
              </QuestionTitle>
              <QuestionAnswer
                open={question.open}
                animate={question.open ? 'open' : 'closed'}
                variants={openAnswerAnimations}
              >
                <p>{question.answer}</p>
              </QuestionAnswer>
            </Question>
          ))}
      </Faq>
    </Page>
  );
};

export default FaqPage;
