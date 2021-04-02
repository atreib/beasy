import React from 'react';
import styled from 'styled-components';
import { colors } from '../../utils/theme/colors';
import { UnstyledLink } from '../../utils/components/UnstyledLink';

const Page = styled.div`
  background-color: ${colors.background};
  height: 100%;
`;

const Header = styled.header`
  padding: 1rem;
  background-color: ${colors.primary};
  color: ${colors.primaryContrast};

  border-bottom-left-radius: 70% 2%;
  border-bottom-right-radius: 100% 30%;
`;

const ToolbarButton = styled.div``;
const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;

  ${ToolbarButton} {
    border: 1px solid #ccc;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
`;

const UserInfo = styled.div``;
const WeatherInfo = styled.div``;
const Summary = styled.div`
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
    justify-content: center;
    align-items: center;
    align-content: center;
  }
`;

const SliderHeader = styled.h2``;
const SliderList = styled.div``;
const SliderItem = styled.div``;
const Slider = styled.section`
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
