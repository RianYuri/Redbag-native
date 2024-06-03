import HeaderDate from '@/components/header-date/header-date.component';
import {
  Container,
  Content,
  Divider,
  EditAndSuportContent,
  EditView,
  ExitButton,
  TextAbout,
  TextEditSuport,
  TextExit,
  TextMyAccount,
} from './style';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Tab from '@/components/tabs/tab.component';
import React from 'react';
const Profile = () => {
  const [selectedTabRoute, setSelectedTabRoute] = React.useState<string>('');
  React.useEffect(() => {
    if (selectedTabRoute) {
      router.push({
        pathname: '/home/',
        params: {
          selectedTabRoute,
        },
      });
    }
  }, [selectedTabRoute]);
  return (
    <>
      <Container>
        <HeaderDate />
        <Content>
          <FontAwesome5 name="user" size={50} color="#9D2D15" />
          <TextMyAccount>Sua Conta</TextMyAccount>
          <TextAbout>
            Veja as informações sobre sua conta, edite seus dados pessoais e
            configurações.
          </TextAbout>
          <EditAndSuportContent>
            <EditView onPress={() => router.push('/edit-profile/')}>
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
      </Container>
      <Tab
        selectedTab={selectedTabRoute}
        setSelectedTab={setSelectedTabRoute}
      />
    </>
  );
};

export default Profile;
