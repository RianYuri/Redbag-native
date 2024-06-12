import { ScrollView } from 'react-native';
import AnimalHistoriesComponent from '../animal-histories/animal-histories.component';
import HistoryFilterComponent from '../history-filter/history-filter.component';
import InputSearch from '../input-search/input-search.component';
import { Container } from './style';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';
import { NotAnimalsText } from '../home-component/styles';

const HistoriesAnalysis = () => {
  const allAnimals = useSelector((state: RootState) => state.animals.animals);
  let allHealthRecords;
  if (allAnimals.length > 0) {
    allHealthRecords = allAnimals
      .map((animal) => {
        return animal.healthHistory.map((record) => {
          return {
            ...record,
            animalId: animal.id,
            name: animal.name,
            imageDetails: animal.imageDetails,
          };
        });
      })
      .flat();
  }
  return (
    <ScrollView scrollEnabled>
      <Container>
        <InputSearch />
        <HistoryFilterComponent />
        {allHealthRecords!.length === 0 ? (
          <NotAnimalsText style={{ marginTop: 100 }}>
            Nenhum analise feita
          </NotAnimalsText>
        ) : (
          allHealthRecords!.map((item) => (
            <AnimalHistoriesComponent
              animalId={item.animalId}
              key={item.id}
              accurancy={item.accuracy}
              animalName={item.name}
              dateAnalysis={item.date}
              predictClass={item.healthStatus}
              animalImage={item.imageDetails?.url}
            />
          ))
        )}
      </Container>
    </ScrollView>
  );
};

export default HistoriesAnalysis;
