import React from 'react';
import {
  BackButton,
  ButtonContent,
  CircleStep,
  Content,
  ContinueButton,
  FormRegister,
  InputContainer,
  LabelInput,
  StepContainer,
  SubtitleInput,
  TextContinue,
  TextHeader,
  TextInput,
  UndrawImage,
} from './style';

import { RegisterNameProps } from './types';
import BackIcon from '@/assets/backIcon.svg';
import { theme } from '@/themes';
import { Alert } from 'react-native';

const RegisterStep = (props: RegisterNameProps) => {
  const [text, setText] = React.useState('');
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleChangeText = (text: string, fieldName: string) => {
    setText(text);
    props.setFormData((prevState: any) => ({
      ...prevState,
      [fieldName]: text,
    }));
  };
  const onSubmit = () => {
    if (text === '') {
      Alert.alert('Erro', `O campo ${props.labelName} não pode ser vazio`);
      return;
    }
    if (props.name === 'email' && !validateEmail(text)) {
      Alert.alert('Erro', 'Formato de email inválido');
      return;
    }
    props.handleRegisterName();
  };
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
        <InputContainer>
          <TextInput
            underlineColorAndroid="transparent"
            cursorColor={theme.colors.thirdRedColor}
            isFocused={text !== ''}
            onChangeText={(text) => handleChangeText(text, props.name)}
            secureTextEntry={props.name === 'password' ? true : false}
          />
          <LabelInput isFocused={text !== ''}>{props.labelName}</LabelInput>
        </InputContainer>
      </FormRegister>
      <ButtonContent>
        <BackButton onPress={props.handleRegisterBack}>
          <BackIcon />
        </BackButton>
        <ContinueButton onPress={onSubmit}>
          <TextContinue>Continuar</TextContinue>
        </ContinueButton>
      </ButtonContent>
    </Content>
  );
};

export default React.memo(RegisterStep);
