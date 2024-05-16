import { ImageProps } from 'react-native';
const UndrawName = require('@/assets/undrawName.png');
const UndrawEmail = require('@/assets/undrawEmail.png');
const UndrawPassword = require('@/assets/undrawPassword.png');

type RegisterListProps = {
  image: ImageProps;
  description: string;
  name: string;
  labelName: string;
};
export const registerList: RegisterListProps[] = [
  {
    image: UndrawName,
    description: 'Como podemos chamá-lo(a)?',
    name: 'name',
    labelName: 'Nome',
  },
  {
    image: UndrawEmail,
    description: 'Digite o seu melhor email!',
    name: 'email',
    labelName: 'Email',
  },
  {
    image: UndrawPassword,
    description: 'Defina a sua senha',
    name: 'password',
    labelName: 'Senha',
  },
];
