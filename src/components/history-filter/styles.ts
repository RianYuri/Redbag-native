import { theme } from '@/themes';
import styled from 'styled-components/native';
export const FilterContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;
export const Filter = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  height: 30px;
  background-color: #fab49e33;
  border-radius: 3px;
`;

export const TextFilter = styled.Text`
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 16px;
  color: ${theme.colors.fourthRedColor};
`;
