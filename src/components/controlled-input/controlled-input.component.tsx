import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import Input from '../input/input.component';
import { InputProps } from '@/app/login/types';
import { Alert } from 'react-native';

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
      Alert.alert(
        'Erro ao fazer login',
        error?.message,
        [
          {
            text: 'Ok',
            style: 'default',
          },
        ],
        { cancelable: false }
      );
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
