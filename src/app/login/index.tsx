import * as React from 'react';
import {
  Container,
  Content,
  ContinueButton,
  LoginFormContainer,
  LogoCat,
  TextButton,
} from './styles';
import Input from '@/components/input/input.component';
import { Image } from 'react-native';
import CheckboxForget from '@/components/checkbox-forget/checkbox-forget.component';
const Login = () => {
  return (
    <Container >
      <Image source={require('@/assets/rectangleTop.png')} />
      <LoginFormContainer>
        <LogoCat source={require('@/assets/logoCat.png')} />
        <Content>
          <Input labelName="Email" inputMode="email" autoCapitalize="none" />
          <Input labelName="Senha" secureTextEntry={true} />
        </Content>
        <CheckboxForget />
        <ContinueButton>
          <TextButton>Entrar</TextButton>
        </ContinueButton>
      </LoginFormContainer>
      <Image source={require('@/assets/rectangleBot.png')} />
    </Container>
  );
};

export default Login;
