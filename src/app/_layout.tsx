import React from 'react';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';
import {
  Montserrat_600SemiBold,
  Montserrat_500Medium,
} from '@expo-google-fonts/montserrat';
import {
  Ubuntu_300Light,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from '@expo-google-fonts/ubuntu';
import { Slot } from 'expo-router';
import { ImageProvider } from '@/context/analysis-image';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { theme } from '@/themes';
import { View } from 'react-native';
const Layout = () => {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View
        style={{
          zIndex: 9,
        }}
      >
        <Toast
          topOffset={100}
          config={{
            success: (props) => (
              <BaseToast
                {...props}
                text2NumberOfLines={2}
                style={{ borderLeftColor: '#FAB49E' }}
                contentContainerStyle={{ paddingHorizontal: 12 }}
                text1Style={{
                  fontWeight: 700,
                  fontSize: 14,
                  fontFamily: 'Ubuntu_700Bold',
                }}
                text2Style={{
                  fontSize: 14,
                  fontWeight: 400,
                  fontFamily: 'Ubuntu_400Regular',
                  zIndex: 1,
                }}
              />
            ),
            error: (props) => (
              <ErrorToast
                {...props}
                text2NumberOfLines={2}
                style={{
                  borderLeftColor: '#800000',
                }}
                text1Style={{
                  fontWeight: 700,
                  fontSize: 18,
                  fontFamily: 'Ubuntu_700Bold',
                }}
                text2Style={{
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: 'Ubuntu_500Medium',
                }}
              />
            ),
          }}
        />
      </View>
      <ImageProvider>
        <Slot />
      </ImageProvider>
    </>
  );
};

export default Layout;
