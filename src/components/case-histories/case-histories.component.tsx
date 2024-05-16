import React from 'react';
import {
  AnalysingCase,
  CaseGraph,
  CaseGraphContainer,
  CircleGraph,
  Container,
  ContentCircleText,
  HistoricText,
  LineChartContent,
  Monthly,
  MonthlyHistory,
  MonthlyText,
  NumberGraphContent,
  NumberGraphText,
  TextGraph,
} from './style';
import { LineChart } from 'react-native-svg-charts';
const CaseHistories = () => {
  const data = [0, 0, 0, 25, 25, 35, 43, 24, 40];
  const data2 = [0, 10, 40, 61, 35, 35, 33, 24, 61];

  function createArrayByFives(target: number) {
    if (target % 5 !== 0) {
      target = Math.ceil(target / 5) * 5;
    }

    const result = [0];
    for (let number = 5; number <= target; number += 5) {
      result.push(number);
    }

    return result;
  }

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
        <CaseGraphContainer>
          <NumberGraphContent>
            {createArrayByFives(55).map((number) => (
              <NumberGraphText key={number}>{number}</NumberGraphText>
            ))}
          </NumberGraphContent>
          <LineChartContent>
            <LineChart
              style={{ width: '100%', height: '300', position: 'absolute',bottom:0 }}
              data={data}
              svg={{ stroke: '#FE5433', strokeWidth: 5 }}
              contentInset={{  bottom: 0 }}
            />
            <LineChart
              style={{ width: '100%' , position: 'absolute',bottom:0 }}
              data={data2}
              svg={{ stroke: '#FAB49E', strokeWidth: 5,  }}
              contentInset={{  top: data2[0] }}
            />
          </LineChartContent>
        </CaseGraphContainer>
      </CaseGraph>
    </Container>
  );
};

export default CaseHistories;
