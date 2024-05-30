import React from 'react';
import {
  BackButton,
  ButtonContent,
  CircleStep,
  Content,
  ContinueButton,
  FormRegister,
  StepContainer,
  SubtitleInput,
  TextContinue,
  TextHeader,
  UndrawImage,
} from './style';
import ControlledInput from '@/components/controlled-input/controlled-input.component';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormData, RegisterNameProps } from './types';
import BackIcon from '@/assets/backIcon.svg';
const RegisterStep = (props: RegisterNameProps) => {
  const schema = yup.object({
    name: yup.string().required('Informe sua senha'),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  return (
    <Content>
      <TextHeader>Vamos lá!</TextHeader>
      <UndrawImage source={props.image} />
      <StepContainer>
        <CircleStep
          isStep={props.step === 0}
          hasAlreadyPassed={props.step >= 0}
        />
        <CircleStep
          isStep={props.step === 1}
          hasAlreadyPassed={props.step >= 1}
        />
        <CircleStep
          isStep={props.step === 2}
          hasAlreadyPassed={props.step >= 2}
        />
      </StepContainer>
      <SubtitleInput>{props.description}</SubtitleInput>
      <FormRegister behavior="padding">
        <ControlledInput
          name={props.name}
          control={control}
          labelName={props.labelName}
          error={errors.name}
        />
      </FormRegister>
      <ButtonContent>
        <BackButton onPress={props.handleRegisterBack}>
          <BackIcon />
        </BackButton>
        <ContinueButton onPress={props.handleRegisterName}>
          <TextContinue>Continuar</TextContinue>
        </ContinueButton>
      </ButtonContent>
    </Content>
  );
};

export default React.memo(RegisterStep);
