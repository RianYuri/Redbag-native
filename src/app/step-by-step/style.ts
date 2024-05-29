import { theme } from '@/themes';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 30px;
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
`;

