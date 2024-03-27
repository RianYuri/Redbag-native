import React from 'react';
import { Container, HeaderHome, RectangleTop, TextDay } from './styles';
import Settings from '@/assets/settings.svg';
const HomeComponent = () => {
  return (
    <Container>
      <HeaderHome>
        <Settings style={{ right: 14, top: 32, position: 'absolute' }} />
        <RectangleTop source={require('@/assets/rectangleTop.png')} />
      </HeaderHome>
      <TextDay>10 de Novembro</TextDay>
    </Container>
  );
};

export default HomeComponent;
