import { BackHandler, Platform, StyleSheet } from 'react-native';
import {
  BackContent,
  BackText,
  CaptureButton,
  CaptureOverlay,
  InnerCaptureButton,
  LibraryButton,
  Overlay,
  StyledSafeAreaView,
} from './style';
import Toast from 'react-native-toast-message';
import { CameraView, useCameraPermissions } from 'expo-camera';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import ButtonCamera from '@/assets/buttonCamera.svg';
import { HandleLibraryProps } from '@/app/create-animal/types';
import * as ImagePicker from 'expo-image-picker';
import { useFocusEffect } from 'expo-router';

const Camera = ({
  handleLibraryUpload,
  setSelectedImage,
  setHasCamera,
  hasCamera,
}: HandleLibraryProps) => {
  const camera = React.useRef<CameraView>(null);
  const [permission] = useCameraPermissions();

  const handleLibrary = () => {
    handleLibraryUpload('');
  };

  const requestPermissions = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Toast.show({
          type: 'error',
          text1: 'Permissão de câmera negada!',
          text2:
            'Você precisa permitir o acesso à câmera para usar esta funcionalidade.',
        });
        setHasCamera(false);
      }
    }
  };

  React.useEffect(() => {
    requestPermissions();
  }, []);

  const takePicture = async () => {
    if (!camera.current) {
      return;
    }
    if (!permission?.granted) {
      Toast.show({
        type: 'error',
        text1: 'Permissão de câmera necessária!',
        text2: 'Você precisa permitir o acesso à câmera para tirar fotos.',
      });
      setHasCamera(false);
      return;
    }
    const photo = await camera.current.takePictureAsync({
      quality: 0.7,
      exif: true,
      skipProcessing: true,
    });
    setSelectedImage(photo?.uri);
    setHasCamera(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (hasCamera) {
          setHasCamera(false);
          return true;
        }
        return false;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => subscription.remove();
    }, [hasCamera])
  );

  return (
    <StyledSafeAreaView hasCamera={hasCamera}>
      <CameraView
        style={styles.camera}
        ref={camera}
        facing="back"
        autofocus="on"
        mode="picture"
        flash="off"
        enableTorch
        zoom={0}
      >
        <Overlay>
          <BackContent onTouchStart={() => setHasCamera(false)}>
            <Entypo name="chevron-left" size={28} color="#FFFFFF" />
            <BackText>Voltar</BackText>
          </BackContent>
          <CaptureOverlay />
          <CaptureButton>
            <InnerCaptureButton onPress={takePicture}>
              <ButtonCamera />
            </InnerCaptureButton>
            <LibraryButton onPress={handleLibrary}>
              <Entypo name="folder-images" size={24} color="#FFFFFF" />
            </LibraryButton>
          </CaptureButton>
        </Overlay>
      </CameraView>
    </StyledSafeAreaView>
  );
};

const styles = StyleSheet.create({
  camera: {
    width: '100%',
    height: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Camera;
