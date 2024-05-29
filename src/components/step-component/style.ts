import { theme } from '@/themes';
import styled from 'styled-components/native';

export const BoxIcon = styled.View`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px 12px 0 0;
  background-color: #f5f5f5;
  margin: 20px 0;
`;

export const TextDescriptionStep = styled.Text`
font-family: ${theme.fonts.text.light};
  color: #292929;
  font-size: 14px;
  text-align: center;
`

export const BoxContentIcon = styled.View`
display: flex;
justify-content: center;
align-items: center;
width: 70px;
height: 70px;
background-color: #B43717;
border-radius: 8px;

`