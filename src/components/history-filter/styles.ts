import { theme } from '@/themes';
import styled from 'styled-components/native';
export const FilterContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;
export const Filter = styled.Pressable<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  height: 30px;
  background-color: ${(props) => (props.isActive ? '#FE5433' : '#fab49e33')};
  border-radius: 3px;
`;

export const TextFilter = styled.Text<{ isActive: boolean }>`
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 16px;
  color: ${(props) =>
    props.isActive ? theme.colors.white : theme.colors.fourthRedColor};
`;
