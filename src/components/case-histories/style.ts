import styled from 'styled-components/native';
import { theme } from '@/themes';

export const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;
export const MonthlyHistory = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const HistoricText = styled.Text`
  font-family: ${theme.fonts.text.regular};
  font-size: 18px;
  color: ${theme.colors.black};
`;
