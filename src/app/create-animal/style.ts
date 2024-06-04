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