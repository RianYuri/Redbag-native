import React from 'react';
import {
  Container,
  HistoricText,
  Monthly,
  MonthlyHistory,
  MonthlyText,
} from './style';
import { LineChart } from 'react-native-svg-charts';
const CaseHistories = () => {
    const data = [0, 10, 40, 95, 85, 35, 53, 24, 50];
  return (
    <Container>
      <MonthlyHistory>
        <HistoricText>Histórico geral</HistoricText>
        <Monthly>
          <MonthlyText>Mensal</MonthlyText>
        </Monthly>
      </MonthlyHistory>
      <LineChart
        style={{ width: 200, height:100 }}
        data={data}
        svg={{ stroke: '#FE5433',strokeWidth: 2 }}
        contentInset={{ top: 20, bottom: 20 }}
      />
    </Container>
  );
};

export default CaseHistories;
