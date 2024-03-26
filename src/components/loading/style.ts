import styled from 'styled-components/native';
import { theme } from '@/themes';
export const Container = styled.View`
flex:1;
display: flex;
justify-content: center;
align-items: center;
background-color: ${theme.colors.firstRedColor};
flex-direction: column;
gap: 30px;
`