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
import { router } from 'expo-router';

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

  return (
    <React.Fragment>
      <ScrollView scrollEnabled>
        <Container>
          <HeaderDate />
          <ContentDog>
            <ImageDog
              source={require('@/assets/dogExample.jpg')}
              resizeMode="cover"
            />
            <NameAndIcon>
              <TextName>Paulinho</TextName>
              <CatIcon color="#f11111" />
            </NameAndIcon>
          </ContentDog>
          <Divider />
          <ContentDog>
            <CheckHistoricComponent />
            <CheckHistoricComponent />
            <CheckHistoricComponent />
            <CheckHistoricComponent />
            <CheckHistoricComponent />
            <CheckHistoricComponent />
            <CheckHistoricComponent />
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
