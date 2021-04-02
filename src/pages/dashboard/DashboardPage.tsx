import React from 'react';
import { motion } from 'framer-motion';
import { UnstyledLink } from '../../utils/components/UnstyledLink';
import { fadeIn, slideToWithFadeIn } from './../../helpers/animations';
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
} from './DashboardPage.styles';
import { IDirections } from '../../utils/enums/directions';

export const DashboardPage = () => {
  return (
    <Page>
      <Header {...fadeIn(0.5)}>
        <Toolbar>
          <ToolbarButton {...fadeIn(1)}>Menu</ToolbarButton>
          <UnstyledLink to="/">
            <ToolbarButton {...fadeIn(1)}>Sair</ToolbarButton>
          </UnstyledLink>
        </Toolbar>
        <Summary>
          <UserInfo>
            <motion.h1 {...fadeIn(1)}>Olá, André</motion.h1>
            <motion.h2 {...fadeIn(1)}>Segunda-feira, 24°</motion.h2>
            <motion.p {...fadeIn(1)}>Rua dos Maias, Porto Alegre</motion.p>
          </UserInfo>
          <WeatherInfo {...fadeIn(1.5)}>
            <p>Imagem de chuva</p>
            <p>Chuvoso</p>
          </WeatherInfo>
        </Summary>
      </Header>
      <Slider>
        <SliderHeader {...fadeIn(0.5)}>Trajetos favoritos</SliderHeader>
        <SliderList>
          <SliderItem {...slideToWithFadeIn(IDirections.FromRight, 0.5)}>
            <h3>Trabalho</h3>
            <p>Ônibus D73 em 10 minutos</p>
            <button>Ver mais</button>
          </SliderItem>
          <SliderItem {...slideToWithFadeIn(IDirections.FromRight, 1)}>
            <h3>Shopping</h3>
            <p>Ônibus 831 em 4 minutos</p>
            <button>Ver mais</button>
          </SliderItem>
          <SliderItem {...slideToWithFadeIn(IDirections.FromRight, 1.5)}>
            <h3>Dentista</h3>
            <p>Ônibus 831 em 4 minutos</p>
            <button>Ver mais</button>
          </SliderItem>
          <SliderItem {...slideToWithFadeIn(IDirections.FromRight, 1.5)}>
            <h3>Novo</h3>
            <p>Adicionar novo trajeto aos favoritos</p>
            <button>Adicionar</button>
          </SliderItem>
        </SliderList>
      </Slider>
    </Page>
  );
};

export default DashboardPage;
