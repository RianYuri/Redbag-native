import React from 'react';
import { BoxContainer, NewAnalysisText } from './style';
import CatImage from '@/assets/catLoading.svg';

const NewAnalysis = () => {
  return (
    <BoxContainer>
      <CatImage width={100} height={100} />
      <NewAnalysisText>Nova Análise</NewAnalysisText>
    </BoxContainer>
  );
};

export default NewAnalysis;
