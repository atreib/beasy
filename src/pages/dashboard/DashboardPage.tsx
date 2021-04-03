import React from 'react';
import { motion } from 'framer-motion';
import RainImage from './../../images/weather/rainy.svg';
import MenuImage from './../../images/icons/menu.svg';
import ExitImage from './../../images/icons/exit.svg';
import SearchImage from './../../images/icons/search.svg';
import SettingsImage from './../../images/icons/settings.svg';
import QuestionImage from './../../images/icons/question.svg';
import { colors } from '../../utils/theme/colors';
import { IDirections } from '../../utils/enums/directions';
import { UnstyledLink } from '../../utils/components/UnstyledLink';
import { fadeIn, slideToWithFadeIn, tapEffect } from './../../helpers/animations';
import {
  Page,
  Header,
  Toolbar,
  ToolbarButton,
  Summary,
  UserInfo,
  WeatherInfo,
  Slider,
  SliderHeader,
  SliderItem,
  SliderList,
  SliderButton,
  QuickAccess,
  QuickButton,
} from './DashboardPage.styles';

export const DashboardPage = () => {
  return (
    <Page>
      <Header {...fadeIn(0.5)}>
        <Toolbar>
          <ToolbarButton {...tapEffect(colors.primaryDarker)} {...fadeIn(1)}>
            <img src={MenuImage} />
          </ToolbarButton>
          <UnstyledLink to="/">
            <ToolbarButton {...tapEffect(colors.primaryDarker)} {...fadeIn(1)}>
              <img src={ExitImage} />
            </ToolbarButton>
          </UnstyledLink>
        </Toolbar>
        <Summary>
          <UserInfo>
            <motion.h1 {...fadeIn(1)}>Olá, André</motion.h1>
            <motion.h2 {...fadeIn(1)}>Segunda-feira, 24°</motion.h2>
            <motion.p {...fadeIn(1)}>Rua dos Maias, Porto Alegre</motion.p>
          </UserInfo>
          <WeatherInfo {...fadeIn(1.5)}>
            <img src={RainImage} />
            <p>Chuvoso</p>
          </WeatherInfo>
        </Summary>
      </Header>
      <QuickAccess>
        <UnstyledLink to="#">
          <QuickButton {...tapEffect(colors.complementaryLighter)} {...fadeIn(1)}>
            <div>
              <img src={SearchImage} />
            </div>
          </QuickButton>
        </UnstyledLink>
        <UnstyledLink to="#">
          <QuickButton {...tapEffect(colors.complementaryLighter)} {...fadeIn(1)}>
            <div>
              <img src={SettingsImage} />
            </div>
          </QuickButton>
        </UnstyledLink>
        <UnstyledLink to="/faq">
          <QuickButton {...tapEffect(colors.complementaryLighter)} {...fadeIn(1)}>
            <div>
              <img src={QuestionImage} />
            </div>
          </QuickButton>
        </UnstyledLink>
        <UnstyledLink to="/">
          <QuickButton {...tapEffect(colors.complementaryLighter)} {...fadeIn(1)}>
            <img src={ExitImage} />
          </QuickButton>
        </UnstyledLink>
      </QuickAccess>
      <Slider>
        <SliderHeader {...fadeIn(0.5)}>Trajetos favoritos</SliderHeader>
        <SliderList>
          <SliderItem {...slideToWithFadeIn(IDirections.FromRight, 0.5)}>
            <h3>Trabalho</h3>
            <p>Próximo ônibus</p>
            <h2>10 minutos</h2>
            <SliderButton {...tapEffect(colors.complementaryLighter)} {...fadeIn(1)}>
              Ver mais
            </SliderButton>
          </SliderItem>
          <SliderItem {...slideToWithFadeIn(IDirections.FromRight, 1)}>
            <h3>Shopping</h3>
            <p>Próximo ônibus</p>
            <h2>4 minutos</h2>
            <SliderButton {...tapEffect(colors.complementaryLighter)} {...fadeIn(1)}>
              Ver mais
            </SliderButton>
          </SliderItem>
          <SliderItem {...slideToWithFadeIn(IDirections.FromRight, 1.5)}>
            <h3>Dentista</h3>
            <p>Próximo ônibus</p>
            <h2>10 minutos</h2>
            <SliderButton {...tapEffect(colors.complementaryLighter)} {...fadeIn(1)}>
              Ver mais
            </SliderButton>
          </SliderItem>
          <SliderItem {...slideToWithFadeIn(IDirections.FromRight, 1.5)}>
            <h3>Novo trajeto</h3>
            <p>Adicionar novo trajeto aos favoritos</p>
            <SliderButton {...tapEffect(colors.complementaryLighter)} {...fadeIn(1)}>
              Novo
            </SliderButton>
          </SliderItem>
        </SliderList>
      </Slider>
    </Page>
  );
};

export default DashboardPage;
