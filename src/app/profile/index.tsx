import { getDate } from '@/utils/get-date/get-date';
import {
  Container,
  Content,
  Divider,
  EditAndSuportContent,
  EditView,
  ExitButton,
  HeaderHome,
  RectangleTop,
  TextAbout,
  TextDay,
  TextEditSuport,
  TextExit,
  TextMyAccount,
} from './style';
import Settings from '@/assets/settings.svg';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
const Profile = () => {
  return (
    <Container>
      <RectangleTop source={require('@/assets/rectangleTop.png')} />
      <HeaderHome>
        <Settings style={{ right: 0, top: 32, position: 'absolute' }} />
      </HeaderHome>
      <TextDay>{getDate()}</TextDay>
      <Content>
        <FontAwesome5 name="user" size={50} color="#9D2D15" />
        <TextMyAccount>Sua Conta</TextMyAccount>
        <TextAbout>
          Veja as informações sobre sua conta, edite seus dados pessoais e
          configurações.
        </TextAbout>
        <EditAndSuportContent>
          <EditView>
            <Feather name="edit" size={30} color="#FE5433" />
            <TextEditSuport>Editar perfil</TextEditSuport>
          </EditView>
          <EditView>
            <FontAwesome5 name="question-circle" size={30} color="#FE5433" />
            <TextEditSuport>Suporte</TextEditSuport>
          </EditView>
        </EditAndSuportContent>
      </Content>
      <ExitButton onPress={() => router.navigate('/login/')}>
        <Ionicons name="exit-outline" size={28} color="#FF4545" />
        <TextExit>Sair</TextExit>
      </ExitButton>
      <Divider />
    </Container>
  );
};

export default Profile;
