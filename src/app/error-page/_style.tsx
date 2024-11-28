import { theme } from '@/themes';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90%;
  padding-top: 20px;
`;

export const ContentError = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  padding: 0px 40px 0 40px;
`;
export const TextError = styled.Text`
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 18px;
  color: #404040;
  text-align: center;
`;

export const ButtonTryAgain = styled.View`
  margin-top: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  border-radius: 48px;
  background-color: ${theme.colors.fourthRedColor};
`;
export const TextButton = styled.Text`
  font-family: ${theme.fonts.text.medium};
  font-size: 16px;
  color: #ffffff;
`;
export const SessionText = styled.Text`
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 18px;
  color: #9d2d15;
  text-align: center;
`;
