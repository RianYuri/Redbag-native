import { theme } from '@/themes';
import styled from 'styled-components/native';
import { LabelInputProps } from '../../app/login/types';

export const InputContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const LabelInput = styled.Text<LabelInputProps>`
  position: absolute;
  left: ${({ isFocused }) => (isFocused ? '20px' : '35px')};
  font-family: ${theme.fonts.text.regular};
  color: ${({ isFocused }) =>
    isFocused ? theme.colors.thirdRedColor : theme.colors.gray};
  padding-left: 5%;
  transform: translateY(${({ isFocused }) => (isFocused ? '-35px' : '0px')})
    scale(${({ isFocused }) => (isFocused ? 0.8 : 1.0)});
  background-color: ${({ isFocused }) => (isFocused ? '#ffffff' : '#ffffff00')};
  width: 55px;
  font-size: 16px;
`;
export const TextInput = styled.TextInput<LabelInputProps>`
  background: #ffffff;
  border-radius: 4px;
  font-size: 16px;
  padding-bottom: 8px;
  width: 100%;
  height: 56px;
  padding-left: 37px;
  border-color: ${({ isFocused }) =>
    isFocused ? theme.colors.thirdRedColor : theme.colors.gray};
  border-width: 1px;
  font-family: ${theme.fonts.text.regular};
  padding-top: 2%;
`;
