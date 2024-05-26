import React from 'react';
import {
  BackContent,
  BackText,
  Container,
  DateDiagnosis,
  HeaderHome,
  ImageAnalysis,
  LoadingImage,
  NewAnalysisButton,
  NewAnalysisText,
  RectangleTop,
  TextDay,
} from './styles';
import { Entypo } from '@expo/vector-icons';
import Settings from '@/assets/settings.svg';
import { useImageContext } from '@/context/analysis-image';
import PreDiagnosis from '@/components/pre-diagnosis/pre-diagnosis.component';
import { router } from 'expo-router';
import { getDate } from '@/utils/get-date/get-date';
const CompleteAnalysis = () => {
  const { analyzedImage } = useImageContext();
  const year = new Date().getFullYear();

  return (
    <Container>
      <RectangleTop source={require('@/assets/rectangleTop.png')} />
      <HeaderHome>
        <Settings
          style={{ right: 9, top: 32, position: 'absolute' }}
          onPress={() => router.push('/profile/')}
        />
      </HeaderHome>
      <TextDay>{getDate()}</TextDay>
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
