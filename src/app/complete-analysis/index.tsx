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
import { router } from 'expo-router';
import { getDate } from '@/utils/get-date/get-date';
import HeaderDate from '@/components/header-date/header-date.component';
const CompleteAnalysis = () => {
  const { analyzedImage } = useImageContext();
  const year = new Date().getFullYear();

  return (
    <Container>
      <HeaderDate />
      <BackContent onTouchStart={() => router.back()}>
        <Entypo name="chevron-left" size={28} color="#9D2D15" />
        <BackText>Voltar</BackText>
      </BackContent>
      {analyzedImage ? (
        <ImageAnalysis source={{ uri: analyzedImage }} />
      ) : (
        <LoadingImage />
      )}
      <PreDiagnosis />
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
