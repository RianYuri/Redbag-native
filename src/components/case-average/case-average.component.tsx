import React, { useState, useEffect } from 'react';
import {
  BoxContainer,
  Line,
  NotAnimalsText,
  PorcentText,
  PositiveCaseText,
  TextNumberCases,
} from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';
import { ActivityIndicator } from 'react-native';

const CaseAverage = () => {
  const allAnimals = useSelector((state: RootState) => state.animals.animals);
  const [isLoading, setIsLoading] = useState(true);
  const [totalAnalyses, setTotalAnalyses] = useState(0);
  const [positiveCases, setPositiveCases] = useState(0);

  useEffect(() => {
    let analysesCount = 0;
    let casesCount = 0;

    if (allAnimals.length > 0) {
      allAnimals.forEach((animal) => {
        analysesCount += animal.healthHistory.length;
        casesCount += animal.healthHistory.filter(
          (history) => history.healthStatus.toLowerCase() === 'unhealthy'
        ).length;
      });
    }

    setTotalAnalyses(analysesCount);
    setPositiveCases(casesCount);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [allAnimals]);

  const percentagePositive =
    totalAnalyses === 0 ? 0 : Math.round((positiveCases / totalAnalyses) * 100);

  return (
    <BoxContainer>
      {isLoading && totalAnalyses === 0 && (
        <React.Fragment>
          <ActivityIndicator size="large" color="#d66767" />
          <Line />
        </React.Fragment>
      )}
      {!isLoading && totalAnalyses === 0 && (
        <React.Fragment>
          <NotAnimalsText>Nenhum análise encontrada</NotAnimalsText>
          <Line />
        </React.Fragment>
      )}
      {totalAnalyses !== 0 && (
        <React.Fragment>
          <TextNumberCases>{`${positiveCases}/${totalAnalyses}`}</TextNumberCases>
          <PorcentText>{`${percentagePositive}%`}</PorcentText>
          <Line />
        </React.Fragment>
      )}
      <PositiveCaseText>Casos positivos</PositiveCaseText>
    </BoxContainer>
  );
};

export default CaseAverage;
