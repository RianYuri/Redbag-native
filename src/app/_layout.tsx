import React from 'react';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { Ubuntu_300Light, Ubuntu_400Regular } from '@expo-google-fonts/ubuntu';
import { Slot } from 'expo-router';
const Layout = () => {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Montserrat_600SemiBold,
    Ubuntu_300Light,
    Ubuntu_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <React.Fragment>
      <Slot />
    </React.Fragment>
  );
};

export default Layout;
