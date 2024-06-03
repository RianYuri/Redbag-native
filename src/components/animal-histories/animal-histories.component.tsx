import React from 'react';
import {
  BoxInformations,
  Container,
  DateContent,
  ImageDog,
  TextDate,
  TextDateDog,
} from './style';
import { router } from 'expo-router';

const AnimalHistories = () => {
  return (
    <Container onPress={() => router.push('/all-analyzes/')}>
      <ImageDog
        source={require('@/assets/dogExample.jpg')}
        resizeMode="cover"
      />
      <BoxInformations
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 3,
        }}
      >
        <DateContent>
          <TextDate>25/10/2023</TextDate>
          <TextDate>Diagnóstico</TextDate>
          <TextDate>Assertividade</TextDate>
        </DateContent>
        <DateContent>
          <TextDateDog>Paulinho</TextDateDog>
          <TextDateDog>Catarata</TextDateDog>
          <TextDateDog>95%</TextDateDog>
        </DateContent>
      </BoxInformations>
    </Container>
  );
};

export default React.memo(AnimalHistories);
