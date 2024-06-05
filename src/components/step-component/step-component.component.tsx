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
import HomeIcon from '@/assets/homeIcon.svg';
import AnalysisIcon from '@/assets/analysisActive.svg';
import ProntuarioIcon from '@/assets/prontuarioIcon.svg';
import SettinsIcon from '@/assets/settings.svg';
const StepComponent = ({ text, step }: StepListProps) => {
  const getImage = (number: number) => {
    switch (number) {
      case 0:
        return <HomeIcon style={{ height: 20, aspectRatio: 1, zIndex: -1 }} />;
      case 1:
        return (
          <AnalysisIcon style={{ height: 200, aspectRatio: 1, zIndex: -1 }} />
        );
      case 2:
        return (
          <ProntuarioIcon style={{ height: 200, aspectRatio: 1, zIndex: -1 }} />
        );
      case 3:
        return (
          <SettinsIcon style={{ height: 200, aspectRatio: 1, zIndex: -1 }} />
        );
      default:
        return null;
    }
  };
  return (
    <Content>
      <BoxIcon>
        <BoxContentIcon>{getImage(step!)}</BoxContentIcon>
      </BoxIcon>
      <TextDescriptionStep>{text}</TextDescriptionStep>
      <StepContainer>
        <CircleStep isStep={step === 0} hasAlreadyPassed={step! >= 0} />
        <CircleStep isStep={step === 1} hasAlreadyPassed={step! >= 1} />
        <CircleStep isStep={step === 2} hasAlreadyPassed={step! >= 2} />
        <CircleStep isStep={step === 3} hasAlreadyPassed={step! >= 3} />
      </StepContainer>
    </Content>
  );
};

export default React.memo(StepComponent);
