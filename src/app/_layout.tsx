import { Slot } from 'expo-router';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { Ubuntu_300Light, Ubuntu_400Regular } from '@expo-google-fonts/ubuntu';
import React from 'react';
import GlobalStyles from '@/themes/globalStyles';
const Layout = () => {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Montserrat_600SemiBold,
    Ubuntu_300Light,
    Ubuntu_400Regular,
  });

  if (!fontsLoaded) {
    return;
  }
  return fontsLoaded ? (
    <React.Fragment>
      <GlobalStyles />
      <Slot />
    </React.Fragment>
  ) : null;
};

export default Layout;
