import styled from 'styled-components/native';
import { theme } from '@/themes';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000066;
  position: absolute;
  z-index: 1;
  padding: 0 17px;
`;

export const ModalContent = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 35px 30px;
  width: 100%;
  height: 232px;
`;

export const TextTitle = styled.Text`
  font-family: ${theme.fonts.title.bold};
  font-size: 22px;
  color: #9d2d15;
`;

export const TextDescription = styled.Text`
  font-family: ${theme.fonts.text.regular};
  font-size: 14px;
  color: #545454;
  text-align: center;
  margin-top: 3px;
`;

export const ContentButton = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 5px;
  margin-top: 30px;
`;
export const ButtonCanceled = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 40%;
  background-color: #fe54330d;
  margin-top: 10px;
  border-radius: 5px;
`;
export const ButtonDelete = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 65%;
  background-color: #fe5433;
  margin-top: 10px;
  border-radius: 5px;
`;

export const TextCanceled = styled.Text`
  font-family: ${theme.fonts.text.medium};
  color: #ff4545;
  font-size: 14px;
`;
export const TextDelete = styled.Text`
  font-family: ${theme.fonts.text.medium};
  color: #ffffff;
  font-size: 14px;
`;
