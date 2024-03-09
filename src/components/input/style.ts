import { theme } from '@/themes';
import styled from 'styled-components/native';
import { LabelInputProps } from '../../app/login/types';

export const InputContainer = styled.KeyboardAvoidingView`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const LabelInput = styled.Text<LabelInputProps>`
  position: absolute;
  left: 0;
  font-family: ${theme.fonts.text.regular};
  color: ${({ isFocused }) =>
    isFocused ? theme.colors.thirdRedColor : theme.colors.gray};
  padding-left: 5%;
  transform: translateY(${({ isFocused }) => (isFocused ? '-20px' : '0px')}) scale(0.8);
`;
export const TextInput = styled.TextInput<LabelInputProps>`
  background: rgba(51, 51, 51, 0.06);
  border-radius: 4px 4px 0px 0px;
  width: 100%;
  height: 56px;
  padding-left: 5%;

  caret-color: ${theme.colors.thirdRedColor};
  border-bottom-color: ${({ isFocused }) =>
    isFocused ? theme.colors.thirdRedColor : theme.colors.gray};
  border-bottom-width: 2px;
  font-family: ${theme.fonts.text.regular};
  padding-top: 2%;
`;
