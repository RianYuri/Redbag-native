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
interface ModalProps {
  buttonDelete: string;
  textDescription: string;
  setHasModal: any;
  handleDelete: () => void;
}
const Modal = ({
  setHasModal,
  textDescription,
  buttonDelete,
  handleDelete,
}: ModalProps) => {
  return (
    <Container>
      <ModalContent>
        <TextTitle>Tem certeza?</TextTitle>
        <TextDescription>{textDescription}</TextDescription>
        <ContentButton>
          <ButtonCanceled
            onPress={() => {
              setHasModal(false);
            }}
          >
            <TextCanceled>Cancelar</TextCanceled>
          </ButtonCanceled>
          <ButtonDelete onPress={handleDelete}>
            <TextDelete>{buttonDelete}</TextDelete>
          </ButtonDelete>
        </ContentButton>
      </ModalContent>
    </Container>
  );
};

export default Modal;
