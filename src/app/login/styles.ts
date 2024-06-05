import { theme } from '@/themes';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 100px;
  width: 100%;
`;

export const NotHaveAccount = styled.Text`
  font-family: ${theme.fonts.text.regular};
  font-size: 16px;
  color: ${theme.colors.white};
  padding-top: 73px;
  z-index: 1;
  text-decoration: underline;
  position: absolute;
`;
export const RectangleBotContent = styled.View`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  bottom: 0;
  z-index: -1;
`;
export const LoginFormContainer = styled.KeyboardAvoidingView`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px 25px 0px;
`;

export const LogoCat = styled.Image`
  max-width: 117px;
  max-height: 115px;
`;
export const Content = styled.View`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  padding-top: 30px;
  padding-bottom: 3px;
`;

export const ContinueButton = styled.Pressable`
  width: 100%;
  height: 50px;
  display: flex;
  border-radius: 3px;
  background-color: ${theme.colors.fourthRedColor};
  align-items: center;
  justify-content: center;
`;
export const TextButton = styled.Text`
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 18px;
  color: ${theme.colors.white};
`;
