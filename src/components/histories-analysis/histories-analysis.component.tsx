import React, { useState, useMemo } from 'react';
import { ScrollView } from 'react-native';
import AnimalHistoriesComponent from '../animal-histories/animal-histories.component';
import HistoryFilterComponent from '../history-filter/history-filter.component';
import InputSearch from '../input-search/input-search.component';
import { Container } from './style';
import { useSelector } from 'react-redux';
import { NotAnimalsText } from '../home-component/styles';
import {
  startOfWeek,
  endOfWeek,
  isSameDay,
  isSameMonth,
  parseISO,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface HealthRecord {
  id: string;
  animalId: string;
  accuracy: number;
  name: string;
  time: string;
  healthHistory: any[];
  healthStatus: string;
  imageDetails?: any;
  color: string;
}

const HistoriesAnalysis = () => {
  const [hasSkeleton, setHasSkeleton] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [filterType, setFilterType] = useState<
    'Hoje' | 'Semanal' | 'Mensal' | 'Todos'
  >('Hoje');
  const allAnimals = useSelector((state: any) => state.animals.animals);

  const extractHealthRecords = (animals: HealthRecord[]) =>
    animals.flatMap((animal) =>
      animal.healthHistory.map((record: any) => ({
        ...record,
        animalId: animal.id,
        name: animal.name,
        imageDetails: animal.imageDetails,
        color: animal.color,
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
          isSameDay(parseISO(record.time), today)
        );
      case 'Semanal':
        return records.filter((record) => {
          const recordDate = parseISO(record.time);
          return (
            recordDate >= startOfWeek(today, { locale: ptBR }) &&
            recordDate <= endOfWeek(today, { locale: ptBR })
          );
        });
      case 'Mensal':
        return records.filter((record) =>
          isSameMonth(parseISO(record.time), today)
        );
      case 'Todos':
      default:
        return records;
    }
  };

  const filteredHealthRecords = useMemo(() => {
    if (allAnimals.length === 0) return [];

    let extractedRecords = extractHealthRecords(allAnimals);
    extractedRecords = filterRecordsByText(extractedRecords, searchText);
    extractedRecords = filterRecordsByDate(extractedRecords, filterType);
    return extractedRecords;
  }, [allAnimals, searchText, filterType]);
  React.useEffect(() => {
    if (filteredHealthRecords.length !== 0) {
      setHasSkeleton(false);
    }
  }, [allAnimals]);
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
          filteredHealthRecords
            .reverse()
            .map((item) => (
              <AnimalHistoriesComponent
                key={item.id}
                animalId={item.animalId}
                accuracy={item.accuracy}
                animalName={item.name}
                dateAnalysis={item.time}
                predictClass={item.healthStatus}
                animalImage={item.imageDetails?.url}
                color={item.color}
                hasSkeleton={hasSkeleton}
              />
            ))
        )}
      </Container>
    </ScrollView>
  );
};

export default HistoriesAnalysis;
