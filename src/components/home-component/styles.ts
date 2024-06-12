import { theme } from '@/themes';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 17px;
`;

export const SectionCasesAnalysis = styled.View`
  width: fit-content;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding-bottom: 180px;
`;

export const NotAnimalsText = styled.Text`
  text-align: center;
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 16px;
  color: ${theme.colors.black};
`;
