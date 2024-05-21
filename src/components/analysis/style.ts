import { theme } from '@/themes';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding: 0 17px;
`;

export const DropdownContent = styled.View`
  position: relative;
  width: 100%;
  & * {
    box-sizing: border-box;
  }
`;
export const Select = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: #ffffff;
  border-color: #e0e1e2;
  border-width: 1px;
  border-radius: 5px;
`;
export const Selected = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
export const SelectedText = styled.Text`
  font-family: ${theme.fonts.text.regular};
  font-weight: 400;
  font-size: 14px;
  color: #9f9f9f;
`;
export const Caret = styled.Image`
  width: 15px;
  height: 10px;
  background-repeat: no-repeat;
`;
export const Menu = styled.View`
     display: flex;
     width: 100%;
     background-color: #FFFFFF;
  border-radius:0px 0px 5px 5px;
  border-width: 1px;
  border-top-color:#FFFFFF;
  border-right-color: #E0E1E2;
  border-bottom-color: #E0E1E2;
  border-left-color: #E0E1E2;


`;
export const Active = styled.Text`
  font-family: ${theme.fonts.text.regular};
  font-size: 14px;
  gap: 5px;

`;

