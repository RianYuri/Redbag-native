import { theme } from '@/themes';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100%;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 70px;
`;

export const LogoCat = styled.Image`
  max-width: 117px;
  max-height: 115px;
`;
export const LoginFormContainer = styled.View`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  padding: 60px 36px 0 36px;
`;

