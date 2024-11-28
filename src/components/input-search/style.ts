import { theme } from '@/themes';
import styled from 'styled-components/native';
import { LabelInputProps } from '../../app/login/_types';

export const InputContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 30px;
`;

export const LabelInput = styled.Text<LabelInputProps>`
  text-align: center;
  position: absolute;
  left: ${({ isFocused }) => (isFocused ? '29px' : '30px')};
  font-family: ${theme.fonts.text.regular};
  color: ${({ isFocused }) =>
    isFocused ? theme.colors.thirdRedColor : theme.colors.gray};
  transform: translateY(${({ isFocused }) => (isFocused ? '-35px' : '0px')})
    scale(${({ isFocused }) => (isFocused ? 0.8 : 1.0)});
  background-color: ${({ isFocused }) => (isFocused ? '#ffffff' : '#ffffff00')};
  width: 65px;
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
