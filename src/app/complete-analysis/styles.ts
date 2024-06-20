import styled from 'styled-components/native';
import { theme } from '@/themes';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding: 0 17px;
  z-index: 5;

  gap: 20px;
`;
export const BackContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
export const BackText = styled.Text`
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 20px;
  color: ${theme.colors.firstRedColor};
`;

export const ImageAnalysis = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  margin-top: 10px;
`;
export const LoadingImage = styled.View`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  background-color: #e9e9e9;
`;

export const DateDiagnosis = styled.Text`
  font-family: ${theme.fonts.text.regular};
  font-size: 14px;
  text-align: center;
  color: #afafaf;
`;
export const NewAnalysisButton = styled.Pressable`
  width: 100%;
  height: 50px;
  background-color: ${theme.colors.fourthRedColor};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 5px;
`;
export const NewAnalysisText = styled.Text`
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 16px;
  color: ${theme.colors.white};
`;
