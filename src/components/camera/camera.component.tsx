import { StyleSheet } from 'react-native';
import {
  CaptureButton,
  InnerCaptureButton,
  Overlay,
  StyledSafeAreaView,
} from './style';
import Toast from 'react-native-toast-message';
import { CameraView, useCameraPermissions } from 'expo-camera';
import React from 'react';

import ButtonCamera from '@/assets/buttonCamera.svg';
const Camera = () => {
  const camera = React.useRef<CameraView>(null);
  const [permission, requestPermission] = useCameraPermissions();
  console.log(permission);

  React.useEffect(() => {
    (async () => {
      if (!permission?.granted) {
        Toast.show({
          type: 'error',
          text1: 'Permissão de câmera negada!',
          text2:
            'Você precisa permitir o acesso à câmera para usar esta funcionalidade.',
        });
        await requestPermission();
      }
    })();
  }, [permission, requestPermission]);
  const takePicture = async () => {
    if (!camera.current) {
      return;
    }

    const photo = await camera.current.takePictureAsync({
      quality: 0.7,
      base64: true,
      exif: true,
      skipProcessing: true,
    });
    console.log('Foto tirada', photo);
  };

  if (!permission) {
    return null;
  }

  if (permission?.canAskAgain && !permission?.granted) {
    requestPermission();
  }

  const handleCameraReady = () => {};
  return (
    <StyledSafeAreaView>
      <CameraView
        style={styles.camera}
        ref={camera}
        facing="back"
        autofocus={'on'}
        mode={'picture'}
        flash="off"
        zoom={0}
        enableTorch={false}
        onCameraReady={() => console.log('Camera ready!')}
      >
        <Overlay>
          <CaptureButton onPress={takePicture}>
            <InnerCaptureButton>
              <ButtonCamera />
            </InnerCaptureButton>
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
