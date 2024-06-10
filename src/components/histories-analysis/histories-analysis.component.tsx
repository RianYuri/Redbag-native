import { ScrollView } from 'react-native';
import AnimalHistoriesComponent from '../animal-histories/animal-histories.component';
import HistoryFilterComponent from '../history-filter/history-filter.component';
import InputSearch from '../input-search/input-search.component';
import { Container } from './style';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';

const HistoriesAnalysis = () => {
  const allAnimals = useSelector((state: RootState) => state.animals.animals);
  const allHealthRecords = allAnimals
    .map((animal) => {
      return animal.healthHistory.map((record) => {
        return {
          ...record,
          name: animal.name,
          imageDetails: animal.imageDetails,
        };
      });
    })
    .flat();
  return (
    <ScrollView scrollEnabled>
      <Container>
        <InputSearch />
        <HistoryFilterComponent />
        {allHealthRecords.map((item) => (
          <AnimalHistoriesComponent
            animalId={item.id}
            key={item.id}
            accurancy={item.accuracy}
            animalName={item.name}
            dateAnalysis={item.date}
            predictClass={item.healthStatus}
            animalImage={item.imageDetails?.url}
          />
        ))}
      </Container>
    </ScrollView>
  );
};

export default HistoriesAnalysis;
