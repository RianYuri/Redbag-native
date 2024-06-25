import React, { useState } from 'react';
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
  const [searchText, setSearchText] = useState('');
  const [hasSkeleton, setHasSkeleton] = useState(true);

  const allAnimals = useSelector((state: RootState) => state.animals.animals);
  let latestHealthRecords = [];
  let image: string | undefined;
  if (allAnimals.length > 0) {
    latestHealthRecords = allAnimals
      .filter(
        (animal) => animal.healthHistory && animal.healthHistory.length > 0
      )
      .map((animal) => {
        const latestRecord =
          animal.healthHistory[animal.healthHistory.length - 1];
        image = animal.imageDetails?.url;
        return {
          ...latestRecord,
          animalId: animal.id,
          name: animal.name,
          imageDetails: animal.imageDetails,
          color: animal.color,
        };
      });
  }
  const filteredRecords = latestHealthRecords.filter((record) =>
    record.name.toLowerCase().includes(searchText.toLowerCase())
  );
  React.useEffect(() => {
    if (image) {
      setHasSkeleton(false);
    }
  }, [allAnimals]);

  return (
    <ScrollView scrollEnabled>
      <Container>
        <SectionCasesAnalysis>
          <CaseAverage />
          <NewAnalysis />
        </SectionCasesAnalysis>
        <CaseHistories />
        <Content>
          <InputSearch setSearchText={setSearchText} />
          {filteredRecords.length > 0 ? (
            filteredRecords.map((record) => (
              <AnimalHistoriesComponent
                key={record.id}
                accuracy={record.accuracy}
                animalName={record.name}
                dateAnalysis={record.time}
                predictClass={record.healthStatus}
                animalImage={record.imageDetails?.url}
                animalId={record.animalId}
                color={record.color}
                hasSkeleton={hasSkeleton}
              />
            ))
          ) : (
            <NotAnimalsText>Nenhum animal encontrado</NotAnimalsText>
          )}
        </Content>
      </Container>
    </ScrollView>
  );
};

export default HomeComponent;
