import React from 'react';
import {
  BoxContainer,
  Line,
  PorcentText,
  PositiveCaseText,
  RectangleText,
  TextNumberCases,
} from './styles';

const CaseAverage = () => {
  return (
    <BoxContainer
      
    >
      <TextNumberCases>25/100</TextNumberCases>
      <PorcentText>25%</PorcentText>
      <Line />
      <PositiveCaseText>Casos positivos</PositiveCaseText>
    </BoxContainer>
  );
};

export default CaseAverage;
