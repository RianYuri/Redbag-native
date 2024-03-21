import { ImageProps } from "react-native";

export type CircleProps = {
  isStep?: boolean;
};

export type FormData = {
  name: string;
};

export type RegisterListProps = {
  image: ImageProps;
  description: string;
  name: string;
  labbelName: string;
};
