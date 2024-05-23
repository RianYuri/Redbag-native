import styled from 'styled-components/native';
import { theme } from '@/themes';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding: 0 17px;
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
