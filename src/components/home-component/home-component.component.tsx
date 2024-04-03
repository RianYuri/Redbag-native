import React from 'react';
import { Container, HeaderHome, SectionCasesAnalysis, TextDay } from './styles';
import Settings from '@/assets/settings.svg';
import CaseAverage from '../case-average/case-average.component';
import NewAnalysis from '../new-analysis/new-analysis.component';
import CaseHistories from '../case-histories/case-histories.component';
const HomeComponent = () => {
  return (
    <Container>
      <HeaderHome>
        <Settings style={{ right: 0, top: 32, position: 'absolute' }} />
      </HeaderHome>
      <TextDay>10 de Novembro</TextDay>
      <SectionCasesAnalysis>
        <CaseAverage />
        <NewAnalysis />
      </SectionCasesAnalysis>
      <CaseHistories />
    </Container>
  );
};

export default HomeComponent;
