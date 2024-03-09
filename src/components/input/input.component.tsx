import { InputContainer, LabelInput, TextInput } from './style';
import { InputProps } from '@/app/login/types';

const Input  = ({ inputMode, autoCapitalize, secureTextEntry,labelName }:InputProps) => {
  return (
    <InputContainer>
      <TextInput
        isFocused={true}
        inputMode={inputMode}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
      />
      <LabelInput isFocused={true}>{labelName}</LabelInput>
    </InputContainer>
  );
};
export default Input;
