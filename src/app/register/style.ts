import { theme } from '@/themes';
import styled from 'styled-components/native';
import { CircleProps } from './types';
export const Container = styled.View`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100%;
`;

export const RectangleTop = styled.Image`
  position: absolute;
  top: 0;
`;

export const RectangleBot = styled.Image`
  position: absolute;
  bottom: 0;
`;

export const Content = styled.View`
width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 20px 0px 32px;
  gap: 30px;
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
  background-color: ${({ isStep }) =>
    isStep ? theme.colors.fourthRedColor : "#E6E6E6"};
`;

export const SubtitleInput = styled.Text`
font-family: ${theme.fonts.text.light};
font-size: 18px;
`;

export const FormRegister = styled.View`
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
gap: 10px;
`
export const BackButton = styled.Pressable`
width: 60px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
background-color: #F2F2F2;
`;

export const ContinueButton = styled.Pressable`
width: 236px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${theme.colors.fourthRedColor};
`;

export const TextContinue = styled.Text`
font-family: ${theme.fonts.text.regular};
font-size: 12px;
color: ${theme.colors.white};
text-transform: uppercase;
`;