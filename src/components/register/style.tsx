import { theme } from '@/themes';
import styled from 'styled-components/native';
import { CircleProps } from './types';
import { LabelInputProps } from '@/app/login/types';

export const Content = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 80px 20px 0px 32px;
  flex: 1;
`;

export const TextHeader = styled.Text`
  font-size: 32px;
  font-family: ${theme.fonts.subtitle.semibold};
  color: ${theme.colors.black};
`;

export const StepContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 5px;
`;

export const CircleStep = styled.View<CircleProps>`
  width: ${({ isStep }) => (isStep ? '30px' : '10px')};
  height: 10px;
  border-radius: 10px;
  background-color: ${({ hasAlreadyPassed }) =>
    hasAlreadyPassed ? theme.colors.fourthRedColor : '#E6E6E6'};
`;

export const SubtitleInput = styled.Text`
  font-family: ${theme.fonts.text.light};
  font-size: 18px;
`;

export const FormRegister = styled.KeyboardAvoidingView`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ButtonContent = styled.View`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 7px;
`;
export const BackButton = styled.Pressable`
  width: 60px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 5px;
`;

export const ContinueButton = styled.Pressable`
  width: 236px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.fourthRedColor};
  border-radius: 5px;
`;

export const TextContinue = styled.Text`
  font-family: ${theme.fonts.text.regular};
  font-size: 12px;
  color: ${theme.colors.white};
  text-transform: uppercase;
`;

export const UndrawImage = styled.Image`
  height: 240px;
  aspect-ratio: 1;
`;
export const InputContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 30px;
`;

export const LabelInput = styled.Text<LabelInputProps>`
  position: absolute;
  left: 0;
  font-family: ${theme.fonts.text.regular};
  color: ${({ isFocused }) =>
    isFocused ? theme.colors.thirdRedColor : theme.colors.gray};
  padding-left: 5%;
  transform: translateY(${({ isFocused }) => (isFocused ? '-20px' : '0px')})
    scale(${({ isFocused }) => (isFocused ? 0.8 : 1.0)});
`;
export const TextInput = styled.TextInput<LabelInputProps>`
  background: rgba(51, 51, 51, 0.06);
  border-radius: 4px 4px 0px 0px;
  width: 100%;
  height: 56px;
  padding-left: 5%;
  border-bottom-color: ${({ isFocused }) =>
    isFocused ? theme.colors.thirdRedColor : theme.colors.gray};
  border-bottom-width: 2px;
  font-family: ${theme.fonts.text.regular};
  padding-top: 2%;
`;
