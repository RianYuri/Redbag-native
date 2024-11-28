import HeaderDate from '@/components/header-date/header-date.component';
import {
  Container,
  ContentDog,
  DeletePerfil,
  Divider,
  ImageDog,
  NameAndIcon,
  TextName,
} from './_style';
import CatIcon from '@/assets/catIcon';
import CheckHistoricComponent from '@/components/check-historic/check-historic.component';
import { ScrollView } from 'react-native';
import Tab from '@/components/tabs/tab.component';
import React from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';
import { NotAnimalsText } from '@/components/home-component/styles';
import { AntDesign } from '@expo/vector-icons';
import Modal from '@/components/modal/modal.component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { redBagApiService } from '@/services/redBagApi';
import Toast from 'react-native-toast-message';

const AllAnalyzes = () => {
  const [selectedTabRoute, setSelectedTabRoute] = React.useState<string>('');
  const [hasModal, setHasModal] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (selectedTabRoute) {
      router.push({
        pathname: '/home',
        params: {
          selectedTabRoute,
        },
      });
    }
  }, [selectedTabRoute]);
  const animalId = useLocalSearchParams<{ animalId: any }>();
  const animalIdInt = parseInt(animalId.animalId, 10);
  const allAnimals = useSelector((state: RootState) => state.animals.animals);
  const filterAnimals = allAnimals.filter(
    (animal) => animal.id === animalIdInt
  );
  const handleDeleteDog = React.useCallback(async () => {
    const user = await AsyncStorage.getItem('@userAuthentication');
    if (user) {
      const userObj = JSON.parse(user);
      try {
        const res = await redBagApiService.deleteAnimal(
          userObj.userId,
          animalIdInt,
          userObj.token
        );
        Toast.show({
          type: 'success',
          text1: 'Sucesso',
          text2: `Seu animal foi excluido com sucesso`,
        });
        console.log(res);
        router.push('/home');
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Erro',
          text2: `Parece que algo deu errado ao tentar excluir seu animal`,
        });
        console.log(error);
        setHasModal(false);
      }
    }
  }, []);
  return (
    <React.Fragment>
      {hasModal && (
        <Modal
          setHasModal={setHasModal}
          textDescription="Esteja ciente de que, após a remoção do cadastro do seu animal, todos os dados associados não poderão mais ser recuperados em nosso sistema."
          buttonDelete="Sim, quero excluir"
          handleDelete={handleDeleteDog}
        />
      )}
      <ScrollView scrollEnabled>
        <Container>
          <HeaderDate />
          <ContentDog>
            <DeletePerfil
              onPress={() => {
                setHasModal(true);
              }}
            >
              <AntDesign name="delete" size={26} color="#FF4545" />
            </DeletePerfil>
            <ImageDog
              source={{ uri: filterAnimals[0].imageDetails?.url }}
              resizeMode="cover"
            />
            <NameAndIcon>
              <TextName>{filterAnimals[0].name}</TextName>
              <CatIcon
                color={filterAnimals[0].color}
                width="20.31"
                height="20"
              />
            </NameAndIcon>
          </ContentDog>
          <Divider />
          <ContentDog>
            {filterAnimals[0].healthHistory ? (
              filterAnimals[0].healthHistory
                .slice()
                .reverse()
                .map((item) => (
                  <CheckHistoricComponent
                    animalIdInt={animalIdInt}
                    accurancy={item.accuracy}
                    dateAnalysis={item.time}
                    healthHistoryId={item.id}
                    predictClass={item.healthStatus}
                    key={item.id}
                  />
                ))
            ) : (
              <NotAnimalsText>
                O Animal não possui nenhuma analise
              </NotAnimalsText>
            )}
          </ContentDog>
        </Container>
      </ScrollView>
      <Tab
        selectedTab={selectedTabRoute}
        setSelectedTab={setSelectedTabRoute}
      />
    </React.Fragment>
  );
};

export default AllAnalyzes;
