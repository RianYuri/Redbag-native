import React from 'react';
import { Container, Content, SectionCasesAnalysis } from './styles';
import CaseAverage from '../case-average/case-average.component';
import NewAnalysis from '../new-analysis/new-analysis.component';
import CaseHistories from '../case-histories/case-histories.component';
import InputSearch from '../input-search/input-search.component';
import AnimalHistoriesComponent from '../animal-histories/animal-histories.component';
import { ScrollView } from 'react-native';
const HomeComponent = () => {
  return (
    <ScrollView scrollEnabled>
      <Container>
        <SectionCasesAnalysis>
          <CaseAverage />
          <NewAnalysis />
        </SectionCasesAnalysis>
        <CaseHistories />
        <Content>
          <InputSearch />
          <AnimalHistoriesComponent />
        </Content>
      </Container>
    </ScrollView>
  );
};

export default HomeComponent;
