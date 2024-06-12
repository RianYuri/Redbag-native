import React from 'react';
import {
  Container,
  Content,
  NotAnimalsText,
  SectionCasesAnalysis,
} from './styles';
import CaseAverage from '../case-average/case-average.component';
import NewAnalysis from '../new-analysis/new-analysis.component';
import CaseHistories from '../case-histories/case-histories.component';
import InputSearch from '../input-search/input-search.component';
import AnimalHistoriesComponent from '../animal-histories/animal-histories.component';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';
const HomeComponent = () => {
  const allAnimals = useSelector((state: RootState) => state.animals.animals);
  console.log(allAnimals.length);
  let latestHealthRecords;
  if (allAnimals.length > 0) {
    latestHealthRecords = allAnimals
      .filter(
        (animal) => animal.healthHistory && animal.healthHistory.length > 0
      )
      .map((animal) => {
        const latestRecord =
          animal.healthHistory[animal.healthHistory.length - 1];
        return {
          ...latestRecord,
          animalId: animal.id,
          name: animal.name,
          imageDetails: animal.imageDetails,
        };
      });
  }
  return (
    <ScrollView scrollEnabled>
      <Container>
        <SectionCasesAnalysis>
          <CaseAverage />
          <NewAnalysis />
        </SectionCasesAnalysis>
        <CaseHistories />
        <Content>
          <InputSearch />
          {latestHealthRecords!.length > 0 ? (
            latestHealthRecords!.map((record) => (
              <AnimalHistoriesComponent
                key={record.id}
                accurancy={record.accuracy}
                animalName={record.name}
                dateAnalysis={record.date}
                predictClass={record.healthStatus}
                animalImage={record.imageDetails?.url}
                animalId={record.animalId}
              />
            ))
          ) : (
            <NotAnimalsText> Nenhum analise feita</NotAnimalsText>
          )}
        </Content>
      </Container>
    </ScrollView>
  );
};

export default HomeComponent;
