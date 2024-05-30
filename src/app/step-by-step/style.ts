import { theme } from '@/themes';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const RectangleTop = styled.Image`
  position: absolute;
  top: 0;
`;

export const RectangleBot = styled.Image`
  position: absolute;
  z-index: -1;
  bottom: 0;
`;
export const Content = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const TextTitle = styled.Text`
  font-family: ${theme.fonts.subtitle.semibold};
  color: #000000;
  font-size: 30px;
`;
export const TextDescription = styled.Text`
  font-family: ${theme.fonts.subtitle.medium};
  color: #8a8a8a;
  font-size: 14px;
  text-align: center;
  padding: 0 30px;
`;

export const ContinueButton = styled.Pressable`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.fourthRedColor};
  border-radius: 5px;
  margin-top: 15px;
`;

export const TextContinue = styled.Text`
  font-family: ${theme.fonts.text.medium};
  font-size: 14px;
  color: ${theme.colors.white};
  text-transform: uppercase;
`;

export const ButtonContent = styled.View`
  padding: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 50px;
`;
export const ExitButton = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 213px;
  height: 50px;
  background-color: #ff45450d;
  border-radius: 5px;
`;
export const TextExit = styled.Text`
  font-family: ${theme.fonts.text.medium};
  font-size: 14px;
  color: ${theme.colors.fourthRedColor};
`;
