import { ImageProps } from "react-native";


export type RegisterNameProps = {
  handleRegisterName: () => void;
  handleRegisterBack: () => void;
  image: ImageProps;
  description: string;
  name: string;
  labelName: string;
};

export type CircleProps = {
  isStep?: boolean;
};

export type FormData = {
  name: string;
};

