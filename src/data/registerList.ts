type RegisterListProps = {
  description: string;
  name: string;
  labelName: string;
};
export const registerList: RegisterListProps[] = [
  {
    description: 'Como podemos chamá-lo(a)?',
    name: 'name',
    labelName: 'Nome',
  },
  {
    description: 'Digite o seu melhor email!',
    name: 'email',
    labelName: 'Email',
  },
  {
    description: 'Defina a sua senha',
    name: 'password',
    labelName: 'Senha',
  },
];
