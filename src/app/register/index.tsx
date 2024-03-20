import RegisterName from '@/components/register-name/register-name.component';
import React from 'react';

import { Container, RectangleBot, RectangleTop } from './style';
import { useAnimationState } from 'moti';
const Register = () => {
  const registerTranslateAnimate = useAnimationState({
    from: {
      transform: [{ translateX: -200 }],
    },
  });
 

  return (
    <Container>
      <RectangleTop source={require('@/assets/rectangleTop.png')} />
      <RegisterName />
      <RectangleBot source={require('@/assets/rectangleBotRegister.png')} />
    </Container>
  );
};

export default Register;
