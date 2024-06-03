import { theme } from '@/themes';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ImageDog = styled.Image`
  width: 100%;
  height: 170px;
`;
export const BoxInformations = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px 12px;
  height: 122px;
  border-radius: 0 0 8px 8px;
  background-color: #ffffff;
  width: 100%;
`;

export const DateContent = styled.View`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const TextDate = styled.Text`
  color: #7c7c7c;
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 16px;
`;

export const TextDateDog = styled.Text`
  color: #000000;
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 18px;
  text-align: right;
`;
