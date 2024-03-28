import React from 'react';
import { BoxContainer, NewAnalysisText } from './style';
import CatImage from '@/assets/catLoading.svg';

const NewAnalysis = () => {
  return (
    <BoxContainer>
      <CatImage />
      <NewAnalysisText>Nova Análise</NewAnalysisText>
    </BoxContainer>
  );
};

export default NewAnalysis;
