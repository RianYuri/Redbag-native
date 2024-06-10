import React from 'react';
import {
  BoxInformations,
  Container,
  DateContent,
  ImageDog,
  TextDate,
  TextDateDog,
} from './style';
import { router } from 'expo-router';
import { AnimalHistoriesProps } from '@/app/home/types';

const AnimalHistories = ({
  dateAnalysis,
  animalName,
  predictClass,
  accurancy,
  animalImage,
  animalId,
}: AnimalHistoriesProps) => {
  const formatConfidence = (value: number) => {
    const roundedValue = value?.toFixed(2);
    return roundedValue.toString().slice(0, 2);
  };
  const formatDate = (dateString: string) => {
    const dateObject = new Date(dateString);
    const day = dateObject.getDate().toString().padStart(2, '0');
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObject.getFullYear();
    return `${day}/${month}/${year}`;
  };
  console.log(animalId);
  return (
    <Container
      onPress={() =>
        router.push({
          pathname: '/all-analyzes/',
          params: {
            animalId,
          },
        })
      }
    >
      <ImageDog source={{ uri: animalImage! }} resizeMode="cover" />
      <BoxInformations
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 3,
        }}
      >
        <DateContent>
          <TextDate>{formatDate(dateAnalysis)}</TextDate>
          <TextDate>Diagnóstico</TextDate>
          <TextDate>Assertividade</TextDate>
        </DateContent>
        <DateContent>
          <TextDateDog>{animalName}</TextDateDog>
          <TextDateDog>
            {predictClass === 'UNHEALTHY' ? 'Saudável' : 'Catarata'}
          </TextDateDog>
          <TextDateDog>{formatConfidence(accurancy)}%</TextDateDog>
        </DateContent>
      </BoxInformations>
    </Container>
  );
};

export default React.memo(AnimalHistories);
