import React from 'react';
import {
  Checkbox,
  Container,
  ForgetPasswordText,
  IconCheck,
  LoggedContent,
  LoggedText,
} from './style';
const CheckboxForget = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  const handleChecked = () => {
    setIsChecked(!isChecked);
  };
  return (
    <Container>
      <LoggedContent>
        <Checkbox onPress={handleChecked}>
          {isChecked ? (
            <IconCheck source={require('@/assets/check-symbol.png')} />
          ) : null}
        </Checkbox>
        <LoggedText>Continuar logado</LoggedText>
      </LoggedContent>
      <ForgetPasswordText numberOfLines={2} ellipsizeMode="tail">
        Esqueci minha senha
      </ForgetPasswordText>
    </Container>
  );
};

export default CheckboxForget;
