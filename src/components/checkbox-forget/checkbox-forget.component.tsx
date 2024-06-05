import React, { useEffect } from 'react';
import {
  Checkbox,
  Container,
  ForgetPasswordText,
  LoggedContent,
  LoggedText,
} from './style';
import { Entypo } from '@expo/vector-icons';
const CheckboxForget = ({ setHasKeepLoggedIn }: any) => {
  const [isChecked, setIsChecked] = React.useState(false);
  const handleChecked = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    setHasKeepLoggedIn(isChecked);
  }, [isChecked]);
  return (
    <Container>
      <LoggedContent>
        <Checkbox onPress={handleChecked} isChecked={isChecked}>
          {isChecked && <Entypo name="check" size={14} color="white" />}
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
