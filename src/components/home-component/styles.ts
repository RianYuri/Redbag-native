import { theme } from '@/themes';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const HeaderHome = styled.View`
display: flex;
align-items: center;
position: relative;
width: 100%;

`
export const RectangleTop = styled.Image`
  position: absolute;
  z-index: -1;
  top: 0;
`;

export const TextDay = styled.Text`
font-family: ${theme.fonts.subtitle.semibold};
font-size: 18px;
padding-top: 73px;

`