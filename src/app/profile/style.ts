import { theme } from '@/themes';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';
export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding: 0 17px;
  gap: 20px;
`;
export const RectangleTop = styled.Image`
  position: absolute;
  z-index: -1;
  top: 0;
`;
export const HeaderHome = styled.View`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const TextDay = styled.Text`
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 18px;
  padding: 55px 0 20px 0px;
`;

export const Content = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

export const TextMyAccount = styled.Text`
  font-family: ${theme.fonts.title.bold};
  font-size: 40px;
  color: #000000;
  height: 55px;
  margin-top: 10px;
`;
export const TextAbout = styled.Text`
  font-family: ${theme.fonts.text.regular};
  font-size: 18px;
  color: #707070;
  text-align: left;
`;

export const EditAndSuportContent = styled.View`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  gap: 30px;
  margin-top: 35px;
`;

export const EditView = styled.View`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
export const TextEditSuport = styled.Text`
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 22px;
  color: ${theme.colors.black};
`;

export const ExitButton = styled.Pressable`
  display: flex;
  align-self: center;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 203px;
  height: 50px;
  gap: 15px;
  background-color: #ff45450d;
  margin-top: 70px;
  border-radius: 50px;
`;

export const TextExit = styled.Text`
  font-family: ${theme.fonts.subtitle.semibold};
  color: ${theme.colors.fourthRedColor};
  font-size: 22px;
  height: 32px;
`;
export const Divider = styled.View`
  height: 1px;
  width: 80%;
  background-color: #e0e1e2;
  align-self: center;
`;