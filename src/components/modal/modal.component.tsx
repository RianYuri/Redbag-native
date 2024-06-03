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

const Modal = ({ setHasModal }: any) => {
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
          <ButtonDelete
            onPress={() => {
              setHasModal(false);
            }}
          >
            <TextDelete>Sim, excluir minha conta</TextDelete>
          </ButtonDelete>
        </ContentButton>
      </ModalContent>
    </Container>
  );
};

export default Modal;
