import { theme } from '@/themes';
import styled from 'styled-components/native';
type IsOpenProps = {
  isOpen: boolean;
};
export const DropwdownAndNewDog = styled.View`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 8px;
`;
export const NewDog = styled.Pressable`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${theme.colors.fourthRedColor};
  width: 50px;
  height: 50px;
`;
export const DropdownContent = styled.View`
  position: relative;
  width: 80%;
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
export const SelectedText = styled.Text<ActiveProps>`
  font-family: ${theme.fonts.text.regular};
  font-weight: 400;
  font-size: 14px;
   color: ${({ color }) => color};
`;

export const Caret = styled.Image<IsOpenProps>`
  width: 15px;
  height: 10px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const Menu = styled.ScrollView<IsOpenProps>`
  display: flex;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  height: ${({ isOpen }) => (isOpen ? '160px' : '0px')};
  gap: 10px;
  flex-direction: column;
  width: 100%;
  background-color: #ffffff;
  border-radius: 0px 0px 5px 5px;
  position: absolute;
  z-index: 1;
  top: 100%;
`;
export const MenuList = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
interface ActiveProps {
  color: string;
}
export const Active = styled.Text<ActiveProps>`
  font-family: ${theme.fonts.text.regular};
  font-size: 14px;
  color: ${({ color }) => color};
`;

export const Divider = styled.View`
  height: 1px;
  width: 90%;
  background-color: #e0e1e2;
  align-self: center;
`;

export const SelectionCat = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  padding: 15px 0 15px 16px;
`;
