import { theme } from '@/themes';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  padding-bottom: 40px;
`;

export const LoggedContent = styled.View`
  display: flex;
  flex-direction: row;
  gap: 3px;
  justify-content: center;
  align-items: center;
`;
interface isCheckedProps {
  isChecked: boolean;
}
export const Checkbox = styled.Pressable<isCheckedProps>`
  width: 16px;
  height: 16px;
  border-width: 1px;
  border-color: #000000;
  background-color: ${({ isChecked }) => (isChecked ? '#000000' : '#FFFFFF')};
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IconCheck = styled.Image`
  width: 14px;
  height: 14px;
`;
export const LoggedText = styled.Text`
  font-family: ${theme.fonts.text.regular};
  font-size: 16px;
  color: ${theme.colors.black};
`;
export const ForgetPasswordText = styled.Text`
  font-family: ${theme.fonts.text.regular};
  font-size: 16px;
  color: #555555;
`;
