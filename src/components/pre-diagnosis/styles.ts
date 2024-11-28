import styled from 'styled-components/native';
import { theme } from '@/themes';
import { PredictedClassProps } from '@/app/complete-analysis/_types';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const PreDiagnosisBox = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 20px;
  align-items: center;
  width: 59%;
  gap: 10px;
  border-radius: 12px;
  background-color: #ffff;
  height: 120px;
`;

export const PreDiagnosisText = styled.Text`
  font-family: ${theme.fonts.text.regular};
  font-size: 14px;
  color: #929292;
`;
export const NameDiagnosisText = styled.Text<PredictedClassProps>`
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 30px;
  color: ${({ predictedClass }) =>
    predictedClass ? '#159D20' : theme.colors.fourthRedColor};
`;

export const AccuracyBox = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 39%;
  border-radius: 12px;
  background-color: #ffff;
  height: 120px;
`;

export const AssertivenessText = styled.Text`
  font-family: ${theme.fonts.text.regular};
  font-size: 14px;
  color: #929292;
`;
export const AccuracyContent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;
export const AccuracyText = styled.Text<PredictedClassProps>`
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 50px;
  color: ${({ predictedClass }) =>
    predictedClass ? '#159D20' : theme.colors.fourthRedColor};
`;
export const PorcentText = styled.Text<PredictedClassProps>`
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 16px;
  color: ${({ predictedClass }) =>
    predictedClass ? '#159D20' : theme.colors.fourthRedColor};
  margin-bottom: 10px;
`;
