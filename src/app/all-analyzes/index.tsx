import HeaderDate from '@/components/header-date/header-date.component';
import {
  Container,
  ContentDog,
  Divider,
  ImageDog,
  NameAndIcon,
  TextName,
} from './style';
import CatIcon from '@/assets/catIcon';
import CheckHistoricComponent from '@/components/check-historic/check-historic.component';
import { ScrollView } from 'react-native';
import Tab from '@/components/tabs/tab.component';
import React from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';
import { NotAnimalsText } from '@/components/home-component/styles';

const AllAnalyzes = () => {
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
  const animalId = useLocalSearchParams<{ animalId: any }>();
  const animalIdInt = parseInt(animalId.animalId, 10);
  const allAnimals = useSelector((state: RootState) => state.animals.animals);
  const filterAnimals = allAnimals.filter(
    (animal) => animal.id === animalIdInt
  );

  return (
    <React.Fragment>
      <ScrollView scrollEnabled>
        <Container>
          <HeaderDate />
          <ContentDog>
            <ImageDog
              source={{ uri: filterAnimals[0].imageDetails?.url }}
              resizeMode="cover"
            />
            <NameAndIcon>
              <TextName>{filterAnimals[0].name}</TextName>
              <CatIcon color={filterAnimals[0].color} />
            </NameAndIcon>
          </ContentDog>
          <Divider />
          <ContentDog>
            {filterAnimals[0].healthHistory ? (
              filterAnimals[0].healthHistory.map((item) => (
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
