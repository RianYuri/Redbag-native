import { theme } from '@/themes';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding: 0 17px;
  padding-top: 34px;
  gap: 20px;
`;

export const ImageAnalysis = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  z-index: -1;
`;

export const OpenCamera = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-direction: column;
  background-color: #f1f1f1;
  border-width: 1px;
  border-color: #dddddd;
  width: 100%;
  height: 200px;
  border-radius: 8px;
  z-index: -1;
`;

export const OpenCameraText = styled.Text`
  font-family: ${theme.fonts.text.regular};
  font-size: 16px;
  color: #b8b8b8;
`;

export const UploadButton = styled.Pressable`
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

export const UploadText = styled.Text`
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 16px;
  color: ${theme.colors.white};
`;

export const UploadDescription = styled.Text`
  font-family: ${theme.fonts.text.regular};
  font-size: 14px;
  color: #8f8f8f;
  text-align: center;
`;

export const ButtonContent = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const CancelButton = styled.Pressable`
  width: 100%;
  height: 50px;
  background-color: ${theme.colors.white};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 5px;
`;

export const CancelButtonText = styled.Text`
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 16px;
  color: ${theme.colors.fourthRedColor};
`;
