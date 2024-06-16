import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ButtonCanceled,
  ButtonDelete,
  Container,
  ContentButton,
  ModalContent,
  TextCanceled,
  TextDelete,
  TextDescription,
  TextTitle,
} from './styles';
import React from 'react';
import { redBagApiService } from '@/services/redBagApi';
import Toast from 'react-native-toast-message';
import { router } from 'expo-router';

const Modal = ({ setHasModal }: any) => {
  const handleDeleteAccount = React.useCallback(async () => {
    const user = await AsyncStorage.getItem('@userAuthentication');
    if (user) {
      const userObj = JSON.parse(user);
      try {
        await redBagApiService.deleteUser(userObj.token);
        router.replace('/login/');
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Erro',
          text2: `Parece que algo deu errado ao tentar excluir seu perfil`,
        });
        setHasModal(false);
      }
    }
  }, []);
  return (
    <Container>
      <ModalContent>
        <TextTitle>Tem certeza?</TextTitle>
        <TextDescription>
          Usuários excluídos não recuperam seus dados após sua exclusão.
        </TextDescription>
        <ContentButton>
          <ButtonCanceled
            onPress={() => {
              setHasModal(false);
            }}
          >
            <TextCanceled>Cancelar</TextCanceled>
          </ButtonCanceled>
          <ButtonDelete onPress={handleDeleteAccount}>
            <TextDelete>Sim, excluir minha conta</TextDelete>
          </ButtonDelete>
        </ContentButton>
      </ModalContent>
    </Container>
  );
};

export default Modal;
