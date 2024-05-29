import React from 'react';
import { BoxContentIcon, BoxIcon, TextDescriptionStep } from './style';
import { StepListProps } from '@/app/step-by-step/types';
import { Image } from 'react-native';

const StepComponent = ({ icon, text }: StepListProps) => {
  return (
    <React.Fragment>
      <BoxIcon>
        <BoxContentIcon>
          <Image source={icon} />
        </BoxContentIcon>
      </BoxIcon>
      <TextDescriptionStep>{text}</TextDescriptionStep>
    </React.Fragment>
  );
};

export default React.memo(StepComponent);
