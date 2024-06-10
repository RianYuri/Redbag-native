import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import Input from '../input/input.component';
import { InputProps } from '@/app/login/types';
import Toast from 'react-native-toast-message';

type ControlledInputProps = InputProps & {
  control: Control<any>;
  name: string;
  error?: FieldError;
};
const ControlledInput = ({
  control,
  name,
  error,
  ...rest
}: ControlledInputProps) => {
  React.useEffect(() => {
    if (error?.message) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao fazer login',
        text2: error?.message,
      });
    }
  }, [error]);
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
      />
    </>
  );
};
export default ControlledInput;
