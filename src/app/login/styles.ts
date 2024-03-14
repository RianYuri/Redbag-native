import { theme } from '@/themes';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
export const RectangleTop = styled.Image`
  position: absolute;
  top: 0;
  z-index: -1;
`;
export const ReactangleBot = styled.Image`
  position: absolute;
`;
export const NotHaveAccount = styled.Text`
  font-family: ${theme.fonts.text.regular};
  font-size: 16px;
  color: ${theme.colors.white};
  padding-top: 33px;
  z-index: 1;
  text-decoration: underline;
`;
export const RectangleBotContent = styled.View`
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
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
  padding-top: 60px;
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
