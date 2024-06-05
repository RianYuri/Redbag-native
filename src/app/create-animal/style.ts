import styled from 'styled-components/native';
import { theme } from '@/themes';
import { ColorProps } from './types';
import { LabelInputProps } from '../login/types';
import Image from 'expo-camera';
export const Container = styled.Pressable`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding: 0 17px;
  gap: 10px;
`;
export const BackContent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
`;
export const BackText = styled.Text`
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 20px;
  color: ${theme.colors.firstRedColor};
`;
export const Content = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
`;
export const TextTitle = styled.Text`
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 23px;
  color: #292929;
`;

export const BoxUpdatePhoto = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  gap: 14px;
  width: 100%;
  height: 200px;
  border-width: 1px;
  border-color: #dddddd;
  border-radius: 8px;
  background-color: #f1f1f1;
`;

export const TextOpenCamera = styled.Text`
  font-family: ${theme.fonts.text.regular};
  font-size: 18px;
  color: #b8b8b8;
`;
export const UploadButton = styled.Pressable`
  width: 100%;
  height: 50px;
  background-color: ${theme.colors.white};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 5px;
`;

export const UploadText = styled.Text`
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 18px;
  color: ${theme.colors.fourthRedColor};
`;

export const ImageAnalysis = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 5px;
`;

export const InputColorContent = styled.Pressable`
  width: 100%;
  height: 46px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-width: 0.5px;
  border-color: #cccccc;
  border-radius: 3px;
  background-color: #f1f1f1;
`;
export const TextInputColor = styled.Text`
  font-family: ${theme.fonts.text.regular};
  font-size: 15px;
  color: #000000;
`;

export const ChoseColor = styled.View<ColorProps>`
  width: 35px;
  height: 20px;
  background-color: ${({ color }) => color};
`;
export const InputContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 5px;
`;

export const LabelInput = styled.Text<LabelInputProps>`
  position: absolute;
  left: ${({ isFocused }) => (isFocused ? '20px' : '27px')};
  font-family: ${theme.fonts.text.regular};
  color: ${({ isFocused }) =>
    isFocused ? theme.colors.thirdRedColor : '#9F9F9F'};
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
  padding-left: 27px;
  border-color: ${({ isFocused }) =>
    isFocused ? theme.colors.thirdRedColor : '#E0E1E2'};
  border-width: 1px;
  font-family: ${theme.fonts.text.regular};
  padding-top: 2%;
`;

export const AddDog = styled.Pressable`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  border-radius: 5px;
  background-color: ${theme.colors.fourthRedColor};
  width: 100%;
  height: 50px;
  margin-top: 15px;
`;
export const TextAddDog = styled.Text`
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 20px;
  color: #ffffff;
`;
