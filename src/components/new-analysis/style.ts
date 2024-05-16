import { theme } from '@/themes';
import styled from 'styled-components/native';

export const BoxContainer = styled.View`
  width: 160px;
  height: 160px;
  border-radius: 8px;
  background-color: ${theme.colors.fourthRedColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NewAnalysisText = styled.Text`
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 20px;
  color: ${theme.colors.white};
`;
