import React from 'react';
import {
  ButtonContent,
  Container,
  Content,
  ContinueButton,
  ExitButton,
  RectangleBot,
  RectangleTop,
  TextContinue,
  TextDescription,
  TextExit,
  TextTitle,
} from './style';
import { FlatList } from 'react-native';
import StepComponent from '@/components/step-component/step-component.component';
import { stepList } from '@/data/stepList';
import { router } from 'expo-router';

const StepByStep = () => {
  const stepListRef = React.useRef<any>(null);
  const [currentRegister, setCurrentRegister] = React.useState(0);
  const totalStepRegister = stepList.length - 1;

  const calculateNewIndex = (currentIndex: number, step: number) => {
    return Math.max(0, Math.min(currentIndex + step, 3));
  };
  const handleStepByStep = () => {
    if (currentRegister < totalStepRegister) {
      console.log(currentRegister);
      const newIndex = calculateNewIndex(currentRegister, 1);

      stepListRef.current?.scrollToIndex({
        index: newIndex,
        animated: true,
      });
      setCurrentRegister(newIndex);
    }
    if (currentRegister === 3) {
      router.replace('/home/');
    }
  };
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
              step={currentRegister}
            />
          )}
          initialScrollIndex={currentRegister}
        />
        <ButtonContent>
          <ContinueButton onPress={handleStepByStep}>
            <TextContinue>Continuar</TextContinue>
          </ContinueButton>
          <ExitButton onPress={() => router.replace('/home/')}>
            <TextExit>Pular</TextExit>
          </ExitButton>
        </ButtonContent>
      </Content>
      <RectangleBot source={require('@/assets/rectangleBotRegister.png')} />
    </Container>
  );
};

export default StepByStep;
