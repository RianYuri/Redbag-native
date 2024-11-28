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
} from '@expo-google-fonts/ubuntu';
import { Slot } from 'expo-router';
import { ImageProvider } from '@/context/analysis-image';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from '@/redux/store/store';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/i18n';

const Layout = () => {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
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
                  style={{ borderLeftColor: '#33FE55' }}
                  text1Style={{
                    fontWeight: 700,
                    fontSize: 17,
                    fontFamily: 'Poppins_700Bold',
                  }}
                  text2Style={{
                    fontSize: 14,
                    fontWeight: 500,
                    fontFamily: 'Ubuntu_500Medium',
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
                    fontSize: 17,
                    fontFamily: 'Poppins_700Bold',
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
      </I18nextProvider>
    </Provider>
  );
};

export default Layout;
