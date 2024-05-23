import React from 'react';
import { BackContent, BackText, Container } from './styles';
import { AntDesign } from '@expo/vector-icons';
const CompleteAnalysis = () => {
  return (
    <Container>
      <BackContent>
        <AntDesign name="left" size={14} color="#9D2D15" />
        <BackText>Voltar</BackText>
      </BackContent>
    </Container>
  );
};

export default CompleteAnalysis;
