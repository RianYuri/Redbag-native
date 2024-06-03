import { theme } from '@/themes';
import styled from 'styled-components/native';

export const ContentHistoric = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
`;
export const HistoricResults = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
`;
export const TextAnalysis = styled.Text`
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 18px;
  color: #ff4545;
`;
export const TextPorcent = styled.Text`
  color: #000000;
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 16px;
  text-align: right;
`;
export const CheckAnalyzeContent = styled.View`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const TextDateAnalyze = styled.Text`
  font-family: ${theme.fonts.text.light};
  font-size: 14px;
  color: #7c7c7c;
`;
export const BoxViewAnalyzeContent = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-color: ${theme.colors.firstRedColor};
  background-color: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 3px;
`;

export const BoxViewAnalyze = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1px;
  background-color: ${theme.colors.firstRedColor};
  width: 30px;
  height: 30px;
`;
export const LineViewContent = styled.View`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: center;
`;
export const LineTime = styled.View`
  width: 5px;
  height: 25px;
  background-color: #fe543333;
`;

export const DividerMin = styled.View`
  height: 1px;
  width: 50%;
  background-color: #d9d9d9;
  bottom: 10px;
  right: 25%;
  position: absolute;
  z-index: -1;
`;
