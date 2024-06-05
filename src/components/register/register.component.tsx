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
} from './style';

import { RegisterNameProps } from './types';
import BackIcon from '@/assets/backIcon.svg';
import { theme } from '@/themes';
import { Alert } from 'react-native';
import UndrawName from '@/assets/undraw-people.svg';
import UndrawEmail from '@/assets/undrawEmail.svg';
import UndrawPassword from '@/assets/undrawPassword.svg';
import Toast from 'react-native-toast-message';

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
      [fieldName]: text.toLocaleLowerCase(),
    }));
  };
  const onSubmit = () => {
    if (text === '') {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: `O campo ${props.labelName} não pode ser vazio`,
      });
      return;
    }
    if (props.name === 'email' && !validateEmail(text)) {
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'Formato de email inválido',
      });
      return;
    }
    props.handleRegisterName();
  };
  const getImage = (name: string) => {
    switch (name) {
      case 'name':
        return (
          <UndrawName style={{ height: 200, aspectRatio: 1, zIndex: -1 }} />
        );
      case 'email':
        return (
          <UndrawEmail style={{ height: 200, aspectRatio: 1, zIndex: -1 }} />
        );
      case 'password':
        return (
          <UndrawPassword style={{ height: 200, aspectRatio: 1, zIndex: -1 }} />
        );
      default:
        return null;
    }
  };
  return (
    <Content>
      <TextHeader>Vamos lá!</TextHeader>
      {getImage(props.name)}
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
            onChangeText={(text) =>
              handleChangeText(text.toLocaleLowerCase(), props.name)
            }
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
