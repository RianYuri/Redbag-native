import * as React from 'react';
import { Container, Content, LoginFormContainer, LogoCat } from './styles';
import Input from '@/components/input/input.component';
import { Image } from 'react-native';
const Login = () => {
  return (
    <Container>
      <Image source={require("@/assets/rectangleTop.png")} />
      <Content>
        <LogoCat source={require('@/assets/logoCat.png')} />
        <LoginFormContainer>
          <Input
            labelName="Email"
            inputMode="email-address"
            autoCapitalize="none"
          />
           <Input
            labelName="Senha"
            secureTextEntry={true}
          />
        </LoginFormContainer>
      </Content>
      <Image source={require("@/assets/rectangleBot.png")} />
    </Container>
  );
};

export default Login;
