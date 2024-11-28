import { useTranslation } from 'react-i18next';

const { t } = useTranslation('register');

type RegisterListProps = {
  description: string;
  name: string;
  labelName: string;
};
export const registerList: RegisterListProps[] = [
  {
    description: t('namePrompt'),
    name: 'name',
    labelName: t('labelName'),
  },
  {
    description: t('bestEmailPrompt'),
    name: 'email',
    labelName: t('labelEmail'),
  },
  {
    description: t('setPasswordPrompt'),
    name: 'password',
    labelName: t('labelPassword'),
  },
];
