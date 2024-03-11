import { theme } from '@/themes';
import { InputContainer, LabelInput, TextInput } from './style';
import { InputProps } from '@/app/login/types';

const Input = ({
  inputMode,
  autoCapitalize,
  secureTextEntry,
  labelName,
  onChangeText,
  value
}: InputProps) => {
  return (
    <InputContainer>
      <TextInput
        autoCapitalize={autoCapitalize}
        cursorColor={theme.colors.thirdRedColor}
        isFocused={true}
        inputMode={inputMode}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        value={value}
      />
      <LabelInput isFocused={true}>{labelName}</LabelInput>
    </InputContainer>
  );
};
export default Input;
