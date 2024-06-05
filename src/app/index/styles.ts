import { theme } from '@/themes';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 45px;
  font-family: ${theme.fonts.title.bold};
  color: ${theme.colors.firstRedColor};
`;
