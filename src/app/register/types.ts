import { ImageProps } from 'react-native';

export type CircleProps = {
  isStep?: boolean;
  hasAlreadyPassed: boolean;
};

export type FormData = {
  username: string;
  name: string;
  email: string;
  password: string;
};

export type RegisterListProps = {
  description: string;
  name: string;
  labelName: string;
  setFormData: any;
};
