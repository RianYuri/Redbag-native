import React from 'react';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { Ubuntu_300Light, Ubuntu_400Regular,Ubuntu_500Medium } from '@expo-google-fonts/ubuntu';
import { Slot } from 'expo-router';
import { ImageProvider } from '@/context/analysis-image';
const Layout = () => {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Montserrat_600SemiBold,
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_500Medium
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageProvider>
      <Slot />
    </ImageProvider>
  );
};

export default Layout;
