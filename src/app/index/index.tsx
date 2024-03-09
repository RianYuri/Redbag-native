import { Container, Title } from './styles';
import { router } from 'expo-router';
import React, { useCallback, useEffect } from 'react';
import LogoAnimRedBag from '@/assets/logo__anim.svg';
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
      <LogoAnimRedBag width={100} height={100} />
      <Title>Red Bag</Title>
    </Container>
  );
};

export default Index;
