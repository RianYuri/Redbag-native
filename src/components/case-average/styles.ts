import { theme } from '@/themes';
import styled from 'styled-components/native';

export const BoxContainer = styled.View`
  width: 160px;
  height: 160px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  gap: 2px;
  border-width: 0.5px;
  border-color: #eeeeee;
`;

export const TextNumberCases = styled.Text`
  font-family: ${theme.fonts.subtitle.semibold};
  color: #dedede;
  font-size: 16px;
`;

export const RectangleText = styled.View`
  width: 100%;
`;

export const PorcentText = styled.Text`
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 50px;
  color: ${theme.colors.black};
`;
export const Line = styled.View`
  width: 100%;
  background-color: ${theme.colors.fourthRedColor};
  height: 2px;
  border-radius: 10px;
`;

export const PositiveCaseText = styled.Text`
  font-family: ${theme.fonts.text.regular};
  font-size: 16px;
  color: ${theme.colors.black};
`;
export const NotAnimalsText = styled.Text`
  text-align: center;
  font-family: ${theme.fonts.subtitle.medium};
  font-size: 16px;
  color: ${theme.colors.black};
`;
