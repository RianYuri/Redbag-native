import { theme } from '@/themes';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  flex: 1;
  padding: 20px 0 120px 0;
`;

export const ImageDog = styled.Image`
  width: 100%;
  height: 170px;
  border-radius: 10px;
`;

export const ContentDog = styled.View`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  margin-top: 20px;
`;

export const NameAndIcon = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextName = styled.Text`
  font-family: ${theme.fonts.subtitle.semibold};
  font-size: 18px;
  color: #000000;
`;
export const Divider = styled.View`
  height: 1px;
  width: 98%;
  background-color: #d9d9d9;
  margin-top: 10px;
`;
export const DeletePerfil = styled.Pressable`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  left: 20px;
  top: 10px;
  width: 45px;
  height: 45px;
  border-radius: 50px;
  background-color: #ffffff;
`;
