import React from 'react';
import {
  AnalysingCase,
  CaseGraph,
  CircleGraph,
  Container,
  ContentCircleText,
  HistoricText,
  Monthly,
  MonthlyHistory,
  MonthlyText,
  TextGraph,
} from './style';
import { LineChart } from 'react-native-svg-charts';
const CaseHistories = () => {
  const data = [0, 10, 40, 95, 85, 35, 53, 24, 50];
  const data2 = [0, 10, 40, 95, 85, 35, 53, 24, 50];

  return (
    <Container>
      <MonthlyHistory>
        <HistoricText>Histórico geral</HistoricText>
        <Monthly>
          <MonthlyText>Mensal</MonthlyText>
        </Monthly>
      </MonthlyHistory>
      <CaseGraph>
        <AnalysingCase>
          <ContentCircleText>
            <CircleGraph color="#FAB49E" />
            <TextGraph>Análises</TextGraph>
          </ContentCircleText>
          <ContentCircleText>
            <CircleGraph color="#FE5433" />
            <TextGraph>Casos positivos</TextGraph>
          </ContentCircleText>
        </AnalysingCase>
        <LineChart
          style={{ width: 250, height: 100, position: 'absolute' }}
          data={data}
          svg={{ stroke: '#FE5433', strokeWidth: 5 }}
          contentInset={{ top: 50, bottom: 0 }}
        />
        <LineChart
          style={{ width: 250, height: 100 }}
          data={data2.reverse()}
          svg={{ stroke: '#FAB49E', strokeWidth: 5 }}
          contentInset={{ top: 20, bottom: 20 }}
        />
      </CaseGraph>
    </Container>
  );
};

export default CaseHistories;
