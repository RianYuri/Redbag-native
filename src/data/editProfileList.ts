type EditProfileListProps = {
  name: string;
  labelName: string;
  secureTextEntry: boolean;
};
export const editProfileList: EditProfileListProps[] = [
  {
    name: 'text',
    labelName: 'Nome',
    secureTextEntry: false,
  },
  {
    name: 'email',
    labelName: 'Email',
    secureTextEntry: false,
  },
  {
    name: 'password',
    labelName: 'Senha',
    secureTextEntry: true,
  },
];
