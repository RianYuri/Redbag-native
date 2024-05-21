import React from 'react';
import { Container, HeaderHome, RectangleTop, TextDay } from './styles';
import Settings from '@/assets/settings.svg';
import Analysis from '@/components/analysis/analysis.component';

const Home = () => {
  const getDate = () => {
    const date = new Date();
    const day = date.getDate();

    const months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ] as string[];
    const monthName = months[date.getMonth()];

    return `${day} de ${monthName}`;
  };
  return (
    <Container>
      <RectangleTop source={require('@/assets/rectangleTop.png')} />
      <HeaderHome>
        <Settings style={{ right: 9, top: 32, position: 'absolute' }} />
      </HeaderHome>
      <TextDay>{getDate()}</TextDay>
      <Analysis/>
      {/* <HomeComponent /> */}
    </Container>
  );
};

export default Home;
