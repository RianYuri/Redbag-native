import { Container, LogoRedBag, Title } from './styles';
import { router } from 'expo-router';
import React, { useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Index = () => {
  const navigateToLogin = useCallback(() => {
    router.replace('/login/');
  }, []);
  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        setTimeout(() => {
          router.replace('/home/');
        }, 1000);
      } else {
        const timeoutId = setTimeout(navigateToLogin, 2000);

        return () => clearTimeout(timeoutId);
      }
    };

    checkLoginStatus();
  }, []);
  return (
    <Container>
      <LogoRedBag source={require('@/assets/redBag.png')} />
      <Title>Red Bag</Title>
    </Container>
  );
};

export default Index;
