import HeaderDate from '@/components/header-date/header-date.component';
import {
  AddDog,
  BackContent,
  BackText,
  BoxUpdatePhoto,
  ChoseColor,
  Container,
  Content,
  ImageAnalysis,
  InputColorContent,
  InputContainer,
  LabelInput,
  TextAddDog,
  TextInput,
  TextInputColor,
  TextOpenCamera,
  TextTitle,
  UploadButton,
  UploadText,
} from './style';
import { Entypo, Feather } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router } from 'expo-router';
import OpenCameraImage from '@/assets/openCamera.svg';
import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
import { theme } from '@/themes';
import Camera from '@/components/camera/camera.component';
import { redBagApiService } from '@/services/redBagApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import Loading from '@/components/loading/loading.component';
const CreateAnimal = () => {
  const [color, setColor] = React.useState('#3D85E3');
  const [isColor, setIsColor] = React.useState(false);
  const [text, setText] = React.useState('');
  const [hasCamera, setHasCamera] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<any>();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLibraryUpload = async (type: string | null) => {
    setHasCamera(false);
    if (type === 'cancel') {
      setSelectedImage(undefined);
      return;
    }

    const result: ImagePicker.ImagePickerResult =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

    if (!result.canceled) {
      const uri = result.assets[0];
      setSelectedImage(uri);
    }
  };
  const fetchSaveAnimal = async () => {
    const data = {
      name: text,
      color: color,
    };
    setIsLoading(true);
    const user = await AsyncStorage.getItem('@userAuthentication');
    if (user && selectedImage) {
      const userObj = JSON.parse(user);
      try {
        await redBagApiService.saveAnimalAndImage(
          data,
          selectedImage,
          userObj.userId,
          userObj.token
        );
        Toast.show({
          type: 'success',
          text1: 'Sucesso',
          text2: 'Animal salvo com sucesso!',
        });
        router.replace('/home/');
      } catch (error) {
        setIsLoading(false);

        let errorMessage = 'Algo deu errado';

        if (error instanceof Error) {
          errorMessage = error.message;
        } else if (typeof error === 'string') {
          errorMessage = error;
        }
        Toast.show({
          type: 'error',
          text1: 'Erro ao salvar animal',
          text2: errorMessage,
        });
      }
    }
  };
  if (isLoading) {
    return (
      <Loading textLoading="Salvando os dados do seu animal de estimação..." />
    );
  }

  return (
    <>
      {hasCamera && (
        <Camera
          hasCamera={hasCamera}
          handleLibraryUpload={handleLibraryUpload}
          setSelectedImage={setSelectedImage}
          setHasCamera={setHasCamera}
        />
      )}
      <KeyboardAvoidingView behavior="height">
        <ScrollView scrollEnabled>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container onPress={() => setIsColor(false)}>
              <HeaderDate />
              <BackContent onTouchStart={() => router.back()}>
                <Entypo name="chevron-left" size={28} color="#9D2D15" />
                <BackText>Voltar</BackText>
              </BackContent>
              <Content>
                <TextTitle>Novo Pet</TextTitle>
                {selectedImage ? (
                  <ImageAnalysis
                    source={{ uri: selectedImage.uri ?? selectedImage }}
                  />
                ) : (
                  <BoxUpdatePhoto>
                    <OpenCameraImage />
                    <TextOpenCamera>Abrir câmera</TextOpenCamera>
                  </BoxUpdatePhoto>
                )}
                <UploadButton
                  onPress={() => setHasCamera(true)}
                  isColor={isColor}
                >
                  <Feather name="upload" size={24} color="#FE5433" />
                  <UploadText>Upload</UploadText>
                </UploadButton>
                <InputContainer isColor={isColor}>
                  <TextInput
                    underlineColorAndroid="transparent"
                    cursorColor={theme.colors.thirdRedColor}
                    isFocused={text !== ''}
                    onChangeText={setText}
                    value={text}
                  />
                  <LabelInput isFocused={text !== ''}>Nome</LabelInput>
                </InputContainer>
                <InputColorContent onPress={() => setIsColor(!isColor)}>
                  {isColor && (
                    <ColorPicker
                      onColorChange={setColor}
                      sliderSize={40}
                      thumbSize={1}
                      shadeSliderThumb
                      sliderLoadingIndicator
                      row
                      style={{
                        width: 80,
                        height: 100,
                        position: 'absolute',
                        bottom: 150,
                        left: 30,
                      }}
                    />
                  )}
                  <ChoseColor color={color} />
                  <TextInputColor>Cor de identificação</TextInputColor>
                </InputColorContent>
                <AddDog onPress={fetchSaveAnimal}>
                  <FontAwesome name="plus" size={24} color="white" />
                  <TextAddDog>Adicionar pet</TextAddDog>
                </AddDog>
              </Content>
            </Container>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default CreateAnimal;
