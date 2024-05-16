import { colors } from './../../themes/colors';
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
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding-bottom: 20px;
`;

export const HistoricText = styled.Text`
  font-family: ${theme.fonts.text.regular};
  font-size: 18px;
  color: ${theme.colors.black};
`;

export const Monthly = styled.View`
  width: 108px;
  height: 30px;
  border-radius: 16px;
  background-color: ${theme.colors.fourthRedColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const MonthlyText = styled.Text`
  font-family: ${theme.fonts.text.regular};
  font-size: 18px;
  color: ${theme.colors.white};
`;

export const CaseGraph = styled.View`
  width: 100%;
  border-width: 0.5px;
  border-color: #eeeeee;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

export const AnalysingCase = styled.View`
  justify-content: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 12px;
  padding-top: 9px;
`;

interface AnalysingCaseProps {
  color: string;
}

export const ContentCircleText = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;
export const CircleGraph = styled.View<AnalysingCaseProps>`
  width: 7px;
  height: 7px;
  border-radius: 28px;
  background-color: ${({ color }) => color};
`;
export const TextGraph = styled.Text`
  font-family: ${theme.fonts.text.regular};
  font-size: 14px;
`;

export const CaseGraphContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 4px;
  margin: 14px 28px 18px 14px;
`;

export const LineChartContent = styled.View`
  width: 100%;
  background-image: linear-gradient(90deg, #f7f7f7 1px, transparent 1px),
    linear-gradient(#f7f7f7 1px, transparent 1px);
  background-size: 20px 20px;
  display: flex;
  height: 240px;
  flex-direction: column;
  border-width: 0.5px;
  border-top-color: #eeeeee;
  border-bottom-color: #d9d9d9;
  border-left-color: #d9d9d9;
  border-top-color: #eeeeee;
  border-right-color: #eeeeee;
  border-left-width: 1.5px;
  border-bottom-width: 1.5px;
`;
export const NumberGraphContent = styled.View`
  flex-direction: column-reverse;
  display: flex;
  gap: 5px;
`;
export const NumberGraphText = styled.Text`
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 12px;
  color: #737373;
`;
