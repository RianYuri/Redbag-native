import { SetStateAction } from 'react';

export type LabelInputProps = {
  isFocused: boolean;
  inputMode?: string;
  autoCapitalize?: string;
  secureTextEntry?: boolean;
};
export type InputProps = {
  inputMode?: string;
  autoCapitalize?: string;
  onChangeText?: any;
  secureTextEntry?: boolean;
  labelName: string;
  value?: any;
};
export type FormData = {
  email: string;
  password: string;
};
