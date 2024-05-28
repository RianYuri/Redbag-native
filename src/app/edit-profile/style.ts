import styled from 'styled-components/native';
import { theme } from '@/themes';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding: 0 17px;
  gap: 20px;
`;
export const EditProfileContent = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  margin-top: 20px;
`;

export const DeletePerfil = styled.Pressable`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  border-radius: 50px;
  background-color: #ff45450d;
`;

export const UserProfile = styled.View`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: #9d2d150d;
`;

export const FormEditContent = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const ButtonSave = styled.Pressable`
display: flex;
align-items: center;
justify-content: center;
height: 50px;
width: 100%;
background-color: #FE5433;
margin-top: 10px;
border-radius: 5px;
`

export const TextSave = styled.Text`
font-family: ${theme.fonts.text.regular};
font-size: 16px;
color: #FFFFFF;
`