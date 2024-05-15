import React from 'react';
import { Container, HeaderHome, SectionCasesAnalysis, TextDay } from './styles';
import Settings from '@/assets/settings.svg';
import CaseAverage from '../case-average/case-average.component';
import NewAnalysis from '../new-analysis/new-analysis.component';
import CaseHistories from '../case-histories/case-histories.component';
const HomeComponent = () => {
  const getDate = () => {
    const date = new Date();
    const day = date.getDate(); 
  

    const months = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    const monthName = months[date.getMonth()]; 

    return `${day - 1} de ${monthName}`;
  };
  return (
    <Container>
      <HeaderHome>
        <Settings style={{ right: 0, top: 32, position: 'absolute' }} />
      </HeaderHome>
      <TextDay>{getDate()}</TextDay>
      <SectionCasesAnalysis>
        <CaseAverage />
        <NewAnalysis />
      </SectionCasesAnalysis>
      <CaseHistories />
    </Container>
  );
};

export default HomeComponent;
