import React from 'react';
import { Container, SectionCasesAnalysis } from './styles';
import CaseAverage from '../case-average/case-average.component';
import NewAnalysis from '../new-analysis/new-analysis.component';
import CaseHistories from '../case-histories/case-histories.component';
const HomeComponent = () => {
  return (
    <Container>
      <SectionCasesAnalysis>
        <CaseAverage />
        <NewAnalysis />
      </SectionCasesAnalysis>
      <CaseHistories />
    </Container>
  );
};

export default HomeComponent;
