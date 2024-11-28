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
} from './_style';
import { FlatList } from 'react-native';
import StepComponent from '@/components/step-component/step-component.component';
import { stepList } from '@/data/stepList';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';

const StepByStep = () => {
  const { t } = useTranslation('step-by-step');
  const stepListRef = React.useRef<any>(null);
  const [currentRegister, setCurrentRegister] = React.useState(0);
  const totalStepRegister = stepList.length - 1;

  const calculateNewIndex = (currentIndex: number, step: number) => {
    return Math.max(0, Math.min(currentIndex + step, 3));
  };
  const handleStepByStep = () => {
    if (currentRegister < totalStepRegister) {
      const newIndex = calculateNewIndex(currentRegister, 1);

      stepListRef.current?.scrollToIndex({
        index: newIndex,
        animated: true,
      });
      setCurrentRegister(newIndex);
    }
    if (currentRegister === 3) {
      router.replace('/home');
    }
  };

  return (
    <Container>
      <RectangleTop source={require('@/assets/rectangleTop.png')} />
      <Content>
        <TextTitle>{t('step1')}</TextTitle>
        <TextDescription>
         {t('step2')}
        </TextDescription>
        <FlatList
          ref={stepListRef}
          data={stepList}
          keyExtractor={(item) => item.text}
          horizontal
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <StepComponent text={item.text} step={currentRegister} />
          )}
          initialScrollIndex={currentRegister}
        />
        <ButtonContent>
          <ContinueButton onPress={handleStepByStep}>
            <TextContinue>{t('continue')}</TextContinue>
          </ContinueButton>
          <ExitButton onPress={() => router.replace('/home')}>
            <TextExit>{t('skip')}</TextExit>
          </ExitButton>
        </ButtonContent>
      </Content>
      <RectangleBot source={require('@/assets/rectangleBotRegister.png')} />
    </Container>
  );
};

export default StepByStep;
