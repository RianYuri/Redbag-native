import { ImageProps } from 'react-native';
const UndrawName = require('@/assets/undrawName.png');
const UndrawEmail = require('@/assets/undrawEmail.png');
const UndrawPassword = require('@/assets/undrawPassword.png');

type RegisterListProps = {
  image: ImageProps;
  description: string;
  name: string;
  labbelName: string;
};
export const registerList: RegisterListProps[] = [
  {
    image: UndrawName,
    description: 'Como podemos chamá-lo(a)?',
    name: 'name',
    labbelName: 'Nome',
  },
  {
    image: UndrawEmail,
    description: 'Digite o seu melhor email!',
    name: 'email',
    labbelName: 'Email',
  },
  {
    image: UndrawPassword,
    description: 'Defina a sua senha',
    name: 'password',
    labbelName: 'Senha',
  },
];
