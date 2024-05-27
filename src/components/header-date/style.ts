import styled from 'styled-components/native';
import { theme } from '@/themes';

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
