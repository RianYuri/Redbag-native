import { ScrollView } from 'react-native';
import AnimalHistoriesComponent from '../animal-histories/animal-histories.component';
import HeaderDate from '../header-date/header-date.component';
import HistoryFilterComponent from '../history-filter/history-filter.component';
import InputSearch from '../input-search/input-search.component';
import { Container } from './style';

const HistoriesAnalysis = () => {
  return (
    <ScrollView scrollEnabled>
      <Container>
        <InputSearch />
        <HistoryFilterComponent />
        <AnimalHistoriesComponent />
        <AnimalHistoriesComponent />
      </Container>
    </ScrollView>
  );
};

export default HistoriesAnalysis;
