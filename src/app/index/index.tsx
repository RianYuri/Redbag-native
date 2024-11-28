import { Container, Title } from './_styles';
import { router } from 'expo-router';
import React, { useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RedBagIcon from '@/assets/redBagIcon.svg';

const Index = () => {
  const navigateToLogin = useCallback(() => {
    router.replace('/login');
  }, []);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        setTimeout(() => {
          router.replace('/home');
        }, 1000);
      } else {
        await AsyncStorage.removeItem('@userAuthentication');
        setTimeout(() => {
          navigateToLogin();
        }, 2000);
      }
    };

    checkLoginStatus();
  }, [navigateToLogin]); 

  return (
    <Container>
      <RedBagIcon />
      <Title>Red Bag</Title>
    </Container>
  );
};

export default Index;
