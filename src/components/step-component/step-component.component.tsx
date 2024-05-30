import React from 'react';
import {
  BoxContentIcon,
  BoxIcon,
  CircleStep,
  Content,
  StepContainer,
  TextDescriptionStep,
} from './style';
import { StepListProps } from '@/app/step-by-step/types';
import { Image } from 'react-native';

const StepComponent = ({ icon, text, step }: StepListProps) => {
  return (
    <Content>
      <BoxIcon>
        <BoxContentIcon>
          <Image source={icon} />
        </BoxContentIcon>
      </BoxIcon>
      <TextDescriptionStep>{text}</TextDescriptionStep>
      <StepContainer>
        <CircleStep isStep={step === 0} hasAlreadyPassed={step >= 0} />
        <CircleStep isStep={step === 1} hasAlreadyPassed={step >= 1} />
        <CircleStep isStep={step === 2} hasAlreadyPassed={step >= 2} />
        <CircleStep isStep={step === 3} hasAlreadyPassed={step >= 3} />
      </StepContainer>
    </Content>
  );
};

export default React.memo(StepComponent);
