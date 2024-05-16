import { Container, LogoRedBag, Title } from './styles';
import { router } from 'expo-router';
import React, { useCallback, useEffect } from 'react';
const Index = () => {
  const navigateToLogin = useCallback(() => {
    router.push('/login/');
  }, []);
  useEffect(() => {
    const timeoutId = setTimeout(navigateToLogin, 2000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <Container>
      <LogoRedBag source={require('@/assets/redBag.png')} />
      <Title>Red Bag</Title>
    </Container>
  );
};

export default Index;
