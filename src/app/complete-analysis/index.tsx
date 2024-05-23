import React from 'react';
import {
  BackContent,
  BackText,
  Container,
  HeaderHome,
  ImageAnalysis,
  LoadingImage,
  RectangleTop,
  TextDay,
} from './styles';
import { Entypo } from '@expo/vector-icons';
import Settings from '@/assets/settings.svg';
import { useImageContext } from '@/context/analysis-image';
import PreDiagnosis from '@/components/pre-diagnosis/pre-diagnosis.component';
import { router } from 'expo-router';
const CompleteAnalysis = () => {
  const { analyzedImage } = useImageContext();
  const getDate = () => {
    const date = new Date();
    const day = date.getDate();

    const months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ] as string[];
    const monthName = months[date.getMonth()];

    return `${day} de ${monthName}`;
  };
  return (
    <Container>
      <RectangleTop source={require('@/assets/rectangleTop.png')} />
      <HeaderHome>
        <Settings style={{ right: 9, top: 32, position: 'absolute' }} />
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
    </Container>
  );
};

export default CompleteAnalysis;
