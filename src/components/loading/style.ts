import styled from 'styled-components/native';
import { theme } from '@/themes';
export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.firstRedColor};
  flex-direction: column;
  gap: 30px;
  padding: 0 20px;
`;

export const TextLoading = styled.Text`
  font-family: ${theme.fonts.text.medium};
  font-size: 16px;
  color: ${theme.colors.white};
  text-align: center;
`;
