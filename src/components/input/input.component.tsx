import { theme } from '@/themes';
import { InputContainer, LabelInput, TextInput } from './style';
import { InputProps } from '@/app/login/_types';

const Input = ({
  inputMode,
  autoCapitalize,
  secureTextEntry,
  labelName,
  onChangeText,
  value,
}: InputProps) => {
  return (
    <InputContainer>
      <TextInput
        underlineColorAndroid="transparent"
        autoCapitalize={autoCapitalize}
        cursorColor={theme.colors.thirdRedColor}
        isFocused={value}
        inputMode={inputMode}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        value={value}
      />
      <LabelInput isFocused={value}>{labelName}</LabelInput>
    </InputContainer>
  );
};
export default Input;
