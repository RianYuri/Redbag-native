import React from 'react';
import {
  BackButton,
  ButtonContent,
  CircleStep,
  Container,
  Content,
  ContinueButton,
  FormRegister,
  RectangleBot,
  RectangleTop,
  StepContainer,
  SubtitleInput,
  TextContinue,
  TextHeader,
} from './style';
import Undraw from '@/assets/undrawName.svg';
import ControlledInput from '@/components/controlled-input/controlled-input.component';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormData } from './types';
import BackIcon from '@/assets/backIcon.svg';
const RegisterName = () => {
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
    <Container>
      <RectangleTop source={require('@/assets/rectangleTop.png')} />
      <Content  >
        <TextHeader>Vamos lá!</TextHeader>
        <Undraw />
        <StepContainer>
          <CircleStep isStep />
          <CircleStep />
          <CircleStep />
        </StepContainer>
        <SubtitleInput>Como podemos chamá-lo(a)?</SubtitleInput>
        <FormRegister behavior="padding">
          <ControlledInput
            name="name"
            control={control}
            labelName="Nome"
            error={errors.name}
          />
        </FormRegister>
        <ButtonContent>
          <BackButton>
            <BackIcon />
          </BackButton>
          <ContinueButton>
            <TextContinue>Continuar</TextContinue>
          </ContinueButton>
        </ButtonContent>
      </Content>
      <RectangleBot source={require('@/assets/rectangleBotRegister.png')} />
    </Container>
  );
};

export default RegisterName;
