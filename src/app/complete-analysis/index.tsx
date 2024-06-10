import React from 'react';
import {
  BackContent,
  BackText,
  Container,
  DateDiagnosis,
  ImageAnalysis,
  LoadingImage,
  NewAnalysisButton,
  NewAnalysisText,
} from './styles';
import { Entypo } from '@expo/vector-icons';
import { useImageContext } from '@/context/analysis-image';
import PreDiagnosis from '@/components/pre-diagnosis/pre-diagnosis.component';
import { router, useLocalSearchParams } from 'expo-router';
import { getDate } from '@/utils/get-date/get-date';
import HeaderDate from '@/components/header-date/header-date.component';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';
const CompleteAnalysis = () => {
  const { analyzedData } = useImageContext();
  const year = new Date().getFullYear();
  const healthHistoryId = useLocalSearchParams<{ healthHistoryId: any }>();
  const healthHistoryIdInt = parseInt(healthHistoryId.healthHistoryId, 10);
  const allAnimals = useSelector((state: RootState) => state.animals.animals);
  const filterAnimals = allAnimals.find((animal) =>
    animal.healthHistory.some((history) => history.id === 1)
  );

  if (filterAnimals) {
    const healthHistoryObject = filterAnimals.healthHistory.find(
      (history) => history.id === 0
    );

    console.log(healthHistoryObject);
  } else {
    console.log('Nenhum animal encontrado com o healthHistoryId especificado');
  }
  console.log(filterAnimals, 'filtrado');
  return (
    <Container>
      <HeaderDate />
      <BackContent onTouchStart={() => router.push('/home/')}>
        <Entypo name="chevron-left" size={28} color="#9D2D15" />
        <BackText>Voltar</BackText>
      </BackContent>
      {analyzedData.analyzedImage ? (
        <ImageAnalysis
          source={{
            uri: analyzedData.analyzedImage.uri ?? analyzedData.analyzedImage,
          }}
        />
      ) : (
        <LoadingImage />
      )}
      <PreDiagnosis analyzedData={analyzedData} />
      <DateDiagnosis>
        Pré-diagnóstico realizado no dia {getDate()} de {year}.
      </DateDiagnosis>
      <NewAnalysisButton>
        <NewAnalysisText>Nova Análise</NewAnalysisText>
      </NewAnalysisButton>
    </Container>
  );
};

export default CompleteAnalysis;
