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
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import { router } from 'expo-router';
import { useForm } from 'react-hook-form';
import { FormData } from './types';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { redBagApiService } from '@/services/redBagApi';
import Loading from '@/components/loading/loading.component';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasKeepLoggedIn, setHasKeepLoggedIn] = React.useState(false);
  const schema = yup.object({
    usernameOrEmail: yup
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
  const handleUserLogin = async (data: FormData) => {
    const updatedFormData = {
      ...data,
      usernameOrEmail: data.usernameOrEmail.toLowerCase(),
    };
    setIsLoading(true);
    try {
      const response = await redBagApiService.login(updatedFormData);
      console.log('Login successful', response);
      const token = response.token;
      if (token && hasKeepLoggedIn) {
        await AsyncStorage.setItem('userToken', token);
      }
      router.push('/home/');
    } catch (error: any) {
      console.error('Login failed', error.message);
      Alert.alert('Erro de login', error.message);
      setIsLoading(false);
    } finally {
      setIsLoading(true);
    }
  };
  return isLoading ? (
    <Loading />
  ) : (
    <KeyboardAvoidingView behavior="height">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <RectangleTop source={require('@/assets/rectangleTop.png')} />
          <LoginFormContainer behavior="padding">
            <LogoCat source={require('@/assets/logoCat.png')} />
            <Content>
              <ControlledInput
                name="usernameOrEmail"
                control={control}
                labelName="Email"
                inputMode="email"
                autoCapitalize="none"
                error={errors.usernameOrEmail}
              />
              <ControlledInput
                name="password"
                control={control}
                labelName="Senha"
                secureTextEntry={true}
                error={errors.password}
              />
            </Content>
            <CheckboxForget setHasKeepLoggedIn={setHasKeepLoggedIn} />
            <ContinueButton onPress={handleSubmit(handleUserLogin)}>
              <TextButton>Entrar</TextButton>
            </ContinueButton>
          </LoginFormContainer>
          <RectangleBotContent>
            <NotHaveAccount onPress={() => router.push('/register/')}>
              Não possui uma conta?
            </NotHaveAccount>
            <ReactangleBot source={require('@/assets/rectangleBot.png')} />
          </RectangleBotContent>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
