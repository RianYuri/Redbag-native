import * as React from 'react';
import {
  Container,
  Content,
  ContinueButton,
  LoginFormContainer,
  LogoCat,
  NotHaveAccount,
  ReactangleBot,
  RectangleBotContent,
  RectangleTop,
  TextButton,
} from './styles';
import ControlledInput from '@/components/controlled-input/controlled-input.component';
import CheckboxForget from '@/components/checkbox-forget/checkbox-forget.component';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useForm } from 'react-hook-form';
import { FormData } from './types';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
const Login = () => {
  const schema = yup.object({
    email: yup
      .string()
      .email('E-mail inválido')
      .required('Informe o seu email'),
    password: yup.string().required('Informe sua senha'),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const handleUserLogin = (data: FormData) => {
    console.log(data);
  };
  return (
    <Container>
      <RectangleTop source={require('@/assets/rectangleTop.png')} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LoginFormContainer behavior="padding">
          <LogoCat source={require('@/assets/logoCat.png')} />
          <Content>
            <ControlledInput
              name="email"
              control={control}
              labelName="Email"
              inputMode="email"
              autoCapitalize="none"
              error={errors.email}
            />
            <ControlledInput
              name="password"
              control={control}
              labelName="Senha"
              secureTextEntry={true}
              error={errors.password}
            />
          </Content>
          <CheckboxForget />
          <ContinueButton onPress={handleSubmit(handleUserLogin)}>
            <TextButton>Entrar</TextButton>
          </ContinueButton>
        </LoginFormContainer>
      </TouchableWithoutFeedback>
      <RectangleBotContent>
        <NotHaveAccount>
        Não possui uma conta?
        </NotHaveAccount>
      <ReactangleBot source={require('@/assets/rectangleBot.png')} />
      </RectangleBotContent>
    </Container>
  );
};

export default Login;
