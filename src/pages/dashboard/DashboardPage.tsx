import React from 'react';
import { UnstyledLink } from '../../utils/components/UnstyledLink';
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

export const DashboardPage = () => {
  return (
    <Page>
      <Header>
        <Toolbar>
          <ToolbarButton>Menu</ToolbarButton>
          <UnstyledLink to="/">
            <ToolbarButton>Sair</ToolbarButton>
          </UnstyledLink>
        </Toolbar>
        <Summary>
          <UserInfo>
            <h1>Olá, André</h1>
            <h2>Segunda-feira, 24°</h2>
            <p>Rua dos Maias, Porto Alegre</p>
          </UserInfo>
          <WeatherInfo>
            <p>Imagem de chuva</p>
            <p>Chuvoso</p>
          </WeatherInfo>
        </Summary>
      </Header>
      <Slider>
        <SliderHeader>Trajetos favoritos</SliderHeader>
        <SliderList>
          <SliderItem>
            <h3>Trabalho</h3>
            <p>Ônibus D73 em 10 minutos</p>
            <button>Ver mais</button>
          </SliderItem>
          <SliderItem>
            <h3>Shopping</h3>
            <p>Ônibus 831 em 4 minutos</p>
            <button>Ver mais</button>
          </SliderItem>
          <SliderItem>
            <h3>Dentista</h3>
            <p>Ônibus 831 em 4 minutos</p>
            <button>Ver mais</button>
          </SliderItem>
          <SliderItem>
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
