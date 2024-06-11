import React from 'react';
import {
  BoxContainer,
  Line,
  PorcentText,
  PositiveCaseText,
  TextNumberCases,
} from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';

const CaseAverage = () => {
  const allAnimals = useSelector((state: RootState) => state.animals.animals);

  let totalAnalyses = 0;
  let positiveCases = 0;

  allAnimals.forEach((animal) => {
    totalAnalyses += animal.healthHistory.length;
    positiveCases += animal.healthHistory.filter(
      (history) => history.healthStatus.toLowerCase() === 'unhealthy'
    ).length;
  });

  const percentagePositive =
    totalAnalyses === 0 ? 0 : Math.round((positiveCases / totalAnalyses) * 100);

  return (
    <BoxContainer>
      <TextNumberCases>{`${positiveCases}/${totalAnalyses}`}</TextNumberCases>
      <PorcentText>{`${percentagePositive}%`}</PorcentText>
      <Line />
      <PositiveCaseText>Casos positivos</PositiveCaseText>
    </BoxContainer>
  );
};

export default CaseAverage;
