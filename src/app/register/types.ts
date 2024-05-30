import { ImageProps } from 'react-native';

export type CircleProps = {
  isStep?: boolean;
  hasAlreadyPassed:boolean;
};

export type FormData = {
  name: string;
};

export type RegisterListProps = {
  image: ImageProps;
  description: string;
  name: string;
  labelName: string;
};
