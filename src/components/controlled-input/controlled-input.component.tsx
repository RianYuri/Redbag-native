import React from 'react';
import { Control, Controller } from 'react-hook-form';
import Input from '../input/input.component';
import { InputProps } from '@/app/login/types';

type ControlledInputProps = InputProps & {
  control: Control<any>;
  name: string;
};

const ControlledInput = ({ control, name, ...rest }: ControlledInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Input onChangeText={onChange} value={value} {...rest} />
      )}
    />
  );
};
export default ControlledInput;
