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
  usernameOrEmail: string;
  password: string;
};

export interface UserProps {
  token: string;
  id: 0;
}
export interface InputContainerProps {
  isColor: boolean;
}
