import React, { useState, useMemo } from 'react';
import { ScrollView } from 'react-native';
import AnimalHistoriesComponent from '../animal-histories/animal-histories.component';
import HistoryFilterComponent from '../history-filter/history-filter.component';
import InputSearch from '../input-search/input-search.component';
import { Container } from './style';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';
import { NotAnimalsText } from '../home-component/styles';

interface HealthRecord {
  id: string;
  animalId: string;
  accuracy: number;
  name: string;
  time: string;
  healthHistory: any[];
  healthStatus: string;
  imageDetails?: any;
}

const HistoriesAnalysis = () => {
  const [searchText, setSearchText] = useState('');
  const [filterType, setFilterType] = useState<
    'Hoje' | 'Semanal' | 'Mensal' | 'Todos'
  >('Hoje');
  const allAnimals = useSelector((state: any) => state.animals.animals);

  // Função para mapear e extrair registros de saúde de todos os animais
  const extractHealthRecords = (animals: HealthRecord[]) =>
    animals.flatMap((animal) =>
      animal.healthHistory.map((record: any) => ({
        ...record,
        animalId: animal.id,
        name: animal.name,
        imageDetails: animal.imageDetails,
      }))
    );

  const filterRecordsByText = (records: HealthRecord[], text: string) =>
    records.filter((record) =>
      record.name.toLowerCase().includes(text.toLowerCase())
    );

  const filterRecordsByDate = (records: HealthRecord[], filterType: string) => {
    const today = new Date();
    switch (filterType) {
      case 'Hoje':
        return records.filter((record) =>
          isSameDay(new Date(record.time), today)
        );
      case 'Semanal':
        return records.filter((record) =>
          isSameWeek(new Date(record.time), today)
        );
      case 'Mensal':
        return records.filter((record) =>
          isSameMonth(new Date(record.time), today)
        );
      case 'Todos':
      default:
        return records;
    }
  };

  const isSameDay = (date1: Date, date2: Date): boolean =>
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear();

  const isSameWeek = (date1: Date, date2: Date): boolean => {
    const firstDayOfWeek = new Date(
      date2.setDate(date2.getDate() - date2.getDay())
    );
    return date1 >= firstDayOfWeek;
  };

  const isSameMonth = (date1: Date, date2: Date): boolean =>
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear();

  const filteredHealthRecords = useMemo(() => {
    if (allAnimals.length === 0) return [];

    let extractedRecords = extractHealthRecords(allAnimals);
    extractedRecords = filterRecordsByText(extractedRecords, searchText);
    extractedRecords = filterRecordsByDate(extractedRecords, filterType);
    return extractedRecords;
  }, [allAnimals, searchText, filterType]);

  return (
    <ScrollView scrollEnabled>
      <Container>
        <InputSearch setSearchText={setSearchText} />
        <HistoryFilterComponent onSelectFilter={setFilterType} />
        {filteredHealthRecords.length === 0 ? (
          <NotAnimalsText style={{ marginTop: 100 }}>
            Nenhum análise encontrada
          </NotAnimalsText>
        ) : (
          filteredHealthRecords.map((item) => (
            <AnimalHistoriesComponent
              key={item.id}
              animalId={item.animalId}
              accuracy={item.accuracy}
              animalName={item.name}
              dateAnalysis={item.time}
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
