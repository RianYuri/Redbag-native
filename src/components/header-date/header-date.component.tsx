import React from 'react';
import { HeaderHome, RectangleTop, TextDay } from './style';
import { getDate } from '@/utils/get-date/get-date';
import Settings from '@/assets/settings.svg';
import { router } from 'expo-router';

const HeaderDate = () => {
  return (
    <React.Fragment>
      <RectangleTop source={require('@/assets/rectangleTop.png')} />
      <HeaderHome>
        <Settings
          style={{ right: 9, top: 32, position: 'absolute' }}
          onPress={() => router.push('/profile/')}
        />
      </HeaderHome>
      <TextDay>{getDate()}</TextDay>
    </React.Fragment>
  );
};
export default HeaderDate;
