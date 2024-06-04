import { theme } from '@/themes';
import styled from 'styled-components/native';
type IsOpenProps = {
  isOpen: boolean;
};
export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding: 0 17px;
  padding-top: 34px;
  gap: 20px;
`;
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
export const SelectedText = styled.Text`
  font-family: ${theme.fonts.text.regular};
  font-weight: 400;
  font-size: 14px;
  color: #9f9f9f;
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
export const Active = styled.Text`
  font-family: ${theme.fonts.text.regular};
  font-size: 14px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 16px;
`;

export const Divider = styled.View`
  height: 1px;
  width: 90%;
  background-color: #e0e1e2;
  align-self: center;
`;
export const ImageAnalysis = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  z-index: -1;
`;

export const OpenCamera = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-direction: column;
  background-color: #f1f1f1;
  border-width: 1px;
  border-color: #dddddd;
  width: 100%;
  height: 200px;
  border-radius: 8px;
  z-index: -1;
`;

export const OpenCameraText = styled.Text`
  font-family: ${theme.fonts.text.regular};
  font-size: 16px;
  color: #b8b8b8;
`;

export const UploadButton = styled.Pressable`
  width: 100%;
  height: 50px;
  background-color: ${theme.colors.fourthRedColor};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 5px;
`;

export const UploadText = styled.Text`
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 16px;
  color: ${theme.colors.white};
`;

export const UploadDescription = styled.Text`
  font-family: ${theme.fonts.text.regular};
  font-size: 14px;
  color: #8f8f8f;
  text-align: center;
`;

export const ButtonContent = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const CancelButton = styled.Pressable`
  width: 100%;
  height: 50px;
  background-color: ${theme.colors.white};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 5px;
`;

export const CancelButtonText = styled.Text`
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 16px;
  color: ${theme.colors.fourthRedColor};
`;
