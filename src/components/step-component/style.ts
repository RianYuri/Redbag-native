import { CircleProps } from '@/app/register/types';
import { theme } from '@/themes';
import styled from 'styled-components/native';

export const BoxIcon = styled.View`
  width: 300px;
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
  width: 300px;
`;

export const BoxContentIcon = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  background-color: #b43717;
  border-radius: 8px;
`;
export const Content = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 30px;
`;
export const StepContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 5px;
  margin-top: 20px;
`;

export const CircleStep = styled.View<CircleProps>`
  width: ${({ isStep }) => (isStep ? '30px' : '10px')};
  height: 10px;
  border-radius: 10px;
  background-color: ${({ hasAlreadyPassed }) =>
    hasAlreadyPassed ? theme.colors.fourthRedColor : '#E6E6E6'};
`;
