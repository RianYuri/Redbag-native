import React from 'react';
import { HeaderHome, TextDay } from './style';
import { getDate } from '@/utils/get-date/get-date';
import Settings from '@/assets/settings.svg';
import { router } from 'expo-router';
import RectangleTop from '@/assets/rectangleTop.svg';
const HeaderDate = () => {
  return (
    <React.Fragment>
      <RectangleTop style={{ position: 'absolute', zIndex: -1, top: 0 }} />
      <HeaderHome>
        <Settings
          style={{ right: 9, top: 32, position: 'absolute' }}
          onPress={() => router.replace('/profile/')}
        />
      </HeaderHome>
      <TextDay>{getDate()}</TextDay>
    </React.Fragment>
  );
};
export default HeaderDate;
