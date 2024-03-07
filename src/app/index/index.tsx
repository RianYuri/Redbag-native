import { Container, Title } from "./styles";
import { router } from "expo-router";
import React, { useCallback, useEffect } from "react";
const Index = () => {
const navigateToLogin = useCallback(() => {
  router.push('/login/login');
}, []); 
useEffect(() => {
   

  const timeoutId = setTimeout(navigateToLogin, 2000);

  return () => clearTimeout(timeoutId);
}, []);
  return(

    <Container >
    <Title>Red Bag</Title>
  </Container>
    )
};

export default Index;