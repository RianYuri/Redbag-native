import React from 'react';
import { Container, RectangleTop } from './styles';
import HomeComponent from '@/components/home-component/home-component.component';

const Home = () => {
  return (
    <Container>
      <RectangleTop source={require('@/assets/rectangleTop.png')} />
      <HomeComponent />
    </Container>
  );
};

export default Home;
