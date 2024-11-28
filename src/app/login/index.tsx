import * as React from 'react';
import {
  Container,
  Content,
  ContinueButton,
  LoginFormContainer,
  NotHaveAccount,
  RectangleBotContent,
  TextButton,
} from './_styles';
import ControlledInput from '@/components/controlled-input/controlled-input.component';
import CheckboxForget from '@/components/checkbox-forget/checkbox-forget.component';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { router } from 'expo-router';
import { useForm } from 'react-hook-form';
import { FormData } from './_types';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { redBagApiService } from '@/services/redBagApi';
import Loading from '@/components/loading/loading.component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RectangleTop from '@/assets/rectangleTop.svg';
import RectangleBot from '@/assets/rectangleBot.svg';

import CatLogin from '@/assets/catLogin.svg';
import { fetchAnimalsSuccess } from '@/redux/reducer/home/home.reducer';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
const Login = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasKeepLoggedIn, setHasKeepLoggedIn] = React.useState(false);
  const [isFocus, setIsFocus] = React.useState(false);
  const { t } = useTranslation('login');
  const dispatch = useDispatch();

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsFocus(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsFocus(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  const schema = yup.object({
    usernameOrEmail: yup
      .string()
      .email('E-mail inválido')
      .required(t('emailInvalid')),
    password: yup.string().required(t('passwordInvalid')),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const handleUserLogin = async (data: FormData) => {
    dispatch(fetchAnimalsSuccess([]));
    const updatedFormData = {
      ...data,
      usernameOrEmail: data.usernameOrEmail.toLowerCase(),
    };
    setIsLoading(true);
    try {
      const response = await redBagApiService.login(updatedFormData);
      const token = response.token;
      const user = response;
      await AsyncStorage.setItem('@userAuthentication', JSON.stringify(user));
      if (token && hasKeepLoggedIn) {
        await AsyncStorage.setItem('userToken', token);
      }
      router.push('/home');
    } catch (error: any) {
      Alert.alert('Erro de login', error.message);
      setIsLoading(false);
    }
  };
  return isLoading ? (
    <Loading textLoading={t('loading')} />
  ) : (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior="padding">
        <Container>
          <RectangleTop
            style={{
              position: 'absolute',
              top: 0,
              zIndex: -1,
            }}
          />
          <ScrollView scrollEnabled style={{ width: '100%' }}>
            <LoginFormContainer>
              <CatLogin />

              <Content>
                <ControlledInput
                  name="usernameOrEmail"
                  control={control}
                  labelName={t('labelEmail')}
                  inputMode="email"
                  autoCapitalize="none"
                  error={errors.usernameOrEmail}
                />
                <ControlledInput
                  name="password"
                  control={control}
                  labelName={t('labelPassword')}
                  secureTextEntry={true}
                  error={errors.password}
                />
              </Content>

              <CheckboxForget setHasKeepLoggedIn={setHasKeepLoggedIn} />
              <ContinueButton onPress={handleSubmit(handleUserLogin)}>
                <TextButton>{t('loginButton')}</TextButton>
              </ContinueButton>
            </LoginFormContainer>
          </ScrollView>
          {!isFocus && (
            <RectangleBotContent>
              <NotHaveAccount onPress={() => router.push('/register')}>
                {t('noAccount')}
              </NotHaveAccount>
              <RectangleBot style={{ position: 'relative', top: -10 }} />
            </RectangleBotContent>
          )}
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
