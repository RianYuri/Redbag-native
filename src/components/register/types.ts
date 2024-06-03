import { ImageProps } from 'react-native';

export type FormData = {};

export type RegisterNameProps = {
  handleRegisterName: () => void;
  handleRegisterBack: () => void;
  image: ImageProps;
  description: string;
  name: string;
  labelName: string;
  step: number;
  setFormData: any;
};

export type CircleProps = {
  isStep?: boolean;
  hasAlreadyPassed: boolean;
};
