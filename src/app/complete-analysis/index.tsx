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
    animal.healthHistory.some((history) => history.id === healthHistoryIdInt)
  );
  const healthHistoryObject = filterAnimals?.healthHistory.find(
    (history) => history.id === healthHistoryIdInt
  );

  const uriAnalyzeData =
    analyzedData?.analyzedImage?.uri ?? analyzedData?.analyzedImage;
  const finalData = {
    predictedClass:
      healthHistoryObject.healthStatus || analyzedData.predictedClass,
    confidence: healthHistoryObject.accuracy || analyzedData.confidence,
    date: healthHistoryObject.date,
    analyzedImage: filterAnimals?.imageDetails?.url || uriAnalyzeData,
  };
  const formatDate = (dateString: string) => {
    const dateObject = new Date(dateString);
    const day = dateObject.getDate().toString().padStart(2, '0');
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObject.getFullYear();
    return `${day}/${month} de ${year}`;
  };

  return (
    <Container>
      <HeaderDate />
      <BackContent onTouchStart={() => router.back()}>
        <Entypo name="chevron-left" size={28} color="#9D2D15" />
        <BackText>Voltar</BackText>
      </BackContent>
      {finalData.analyzedImage ? (
        <ImageAnalysis
          source={{
            uri: finalData.analyzedImage,
          }}
        />
      ) : (
        <LoadingImage />
      )}
      <PreDiagnosis analyzedData={finalData} />
      <DateDiagnosis>
        Pré-diagnóstico realizado no dia{' '}
        {finalData.date
          ? formatDate(finalData.date)
          : `${getDate()} de ${year}}`}
        .
      </DateDiagnosis>
      <NewAnalysisButton>
        <NewAnalysisText>Nova Análise</NewAnalysisText>
      </NewAnalysisButton>
    </Container>
  );
};

export default CompleteAnalysis;
