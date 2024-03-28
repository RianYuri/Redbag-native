import React from 'react';
import {
  Container,
  HeaderHome,
  RectangleTop,
  SectionCasesAnalysis,
  TextDay,
} from './styles';
import Settings from '@/assets/settings.svg';
import CaseAverage from '../case-average/case-average.component';
import NewAnalysis from '../new-analysis/new-analysis.component';
const HomeComponent = () => {
  return (
    <Container>
      <HeaderHome>
        <Settings style={{ right: 14, top: 32, position: 'absolute' }} />
        <RectangleTop source={require('@/assets/rectangleTop.png')} />
      </HeaderHome>
      <TextDay>10 de Novembro</TextDay>
      <SectionCasesAnalysis>
        <CaseAverage />
        <NewAnalysis />
      </SectionCasesAnalysis>
    </Container>
  );
};

export default HomeComponent;
