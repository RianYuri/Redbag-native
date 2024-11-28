import HeaderDate from '@/components/header-date/header-date.component';
import {
  ButtonTryAgain,
  Container,
  ContentError,
  SessionText,
  TextButton,
  TextError,
} from './_style';
import { router } from 'expo-router';
import ErrorCat from '@/assets/errorCat.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ErrorPage = () => {
  const redirectLogin = async () => {
    await AsyncStorage.removeItem('userToken');
    await AsyncStorage.removeItem('@userAuthentication');
    router.navigate('/login');
  };
  return (
    <Container>
      <HeaderDate />
      <ContentError>
        <ErrorCat />
        <TextError>Ops...</TextError>
        <TextError>
          Sua <SessionText>sessão</SessionText> expirou. Por favor, faça login
          novamente.
        </TextError>
        <ButtonTryAgain>
          <TextButton onPress={redirectLogin}>Tentar novamente</TextButton>
        </ButtonTryAgain>
      </ContentError>
    </Container>
  );
};

export default ErrorPage;
