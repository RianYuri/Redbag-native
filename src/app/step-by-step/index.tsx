import React from 'react';
import {
  Container,
  Content,
  RectangleBot,
  RectangleTop,
  TextDescription,
  TextTitle
} from './style';
import { FlatList } from 'react-native';
import StepComponent from '@/components/step-component/step-component.component';
import { stepList } from '@/data/stepList';


const StepByStep = () => {
  const stepListRef = React.useRef<any>(null);
  const [currentRegister, setCurrentRegister] = React.useState(0);

  return (
    <Container>
      <RectangleTop source={require('@/assets/rectangleTop.png')} />
      <Content>
        <TextTitle>Passo a passo</TextTitle>
        <TextDescription>
          Antes de entrar, gostaríamos de ajudar em sua experiência
        </TextDescription>
        <FlatList
          ref={stepListRef}
          data={stepList}
          keyExtractor={(item) => item.text}
          horizontal
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <StepComponent
             icon={item.icon}
             text={item.text}     
            />
          )}
          initialScrollIndex={currentRegister}
        />
      </Content>
      <RectangleBot source={require('@/assets/rectangleBotRegister.png')} />
    </Container>
  );
};

export default StepByStep;
