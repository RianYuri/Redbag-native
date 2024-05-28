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

const Modal = () => {
  return (
    <Container>
      <ModalContent>
        <TextTitle>Tem certeza?</TextTitle>
        <TextDescription>
          Usuários excluídos não recuperam seus dados após sua exclusão.
        </TextDescription>
        <ContentButton>
          <ButtonCanceled>
            <TextCanceled>Cancelar</TextCanceled>
          </ButtonCanceled>
          <ButtonDelete>
            <TextDelete>Sim, excluir minha conta</TextDelete>
          </ButtonDelete>
        </ContentButton>
      </ModalContent>
    </Container>
  );
};

export default Modal;
