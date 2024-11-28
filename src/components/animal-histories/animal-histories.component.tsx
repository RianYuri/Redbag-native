import React from 'react';
import {
  BoxInformations,
  Container,
  ContentDog,
  DateContent,
  IconDog,
  ImageDog,
  TextDate,
  TextDateDog,
} from './style';
import { router } from 'expo-router';
import { AnimalHistoriesProps } from '@/app/home/_types';
import { formatDate } from '@/utils/format-date/format-date';
import CatIcon from '@/assets/catIcon';
import { MotiTransitionProp } from 'moti';
import { useTranslation } from 'react-i18next';
const AnimalHistories = ({
  dateAnalysis,
  animalName,
  predictClass,
  accuracy,
  animalImage,
  animalId,
  color,
  hasSkeleton,
}: AnimalHistoriesProps) => {
  const { t } = useTranslation('home');

  const formatConfidence = (value: number) => {
    const roundedValue = value?.toFixed(2);
    return roundedValue.toString().slice(0, 2);
  };

  return (
    <Container
      onPress={() =>
        router.push({
          pathname: '/all-analyzes',
          params: {
            animalId,
          },
        })
      }
    >
      <ContentDog>
            <ImageDog source={{ uri: animalImage! }} resizeMode="cover" />
        <IconDog>
          <CatIcon color={color} width="35" height="35" />
        </IconDog>
      </ContentDog>
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
          <TextDate>{t('patientRecords.diagnosis')}</TextDate>
          <TextDate>{t('patientRecords.accuracy')}</TextDate>
        </DateContent>
        <DateContent>
          <TextDateDog>{animalName}</TextDateDog>
          <TextDateDog>
            {predictClass === 'UNHEALTHY'
              ? t('condition.unhealthy')
              : t('condition.healthy')}
          </TextDateDog>
          <TextDateDog>{formatConfidence(accuracy)}%</TextDateDog>
        </DateContent>
      </BoxInformations>
    </Container>
  );
};

export default React.memo(AnimalHistories);
