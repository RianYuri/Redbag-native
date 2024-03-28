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
      style={{
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 1,
        shadowOffset: { height: 0.5, width: 0.5 },
      }}
    >
      <TextNumberCases>25/100</TextNumberCases>
      <PorcentText>25%</PorcentText>
      <Line />
      <PositiveCaseText>Casos positivos</PositiveCaseText>
    </BoxContainer>
  );
};

export default CaseAverage;
