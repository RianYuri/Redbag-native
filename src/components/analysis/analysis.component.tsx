import React from 'react';
import {
  Active,
  Caret,
  Container,
  DropdownContent,
  Menu,
  MenuList,
  Select,
  Selected,
  SelectedText,
  Divider,
  OpenCamera,
  OpenCameraText,
  UploadButton,
  UploadText,
  UploadDescription,
} from './style';
import SelectCatDefault from '@/assets/select-cat.svg';
import { Image, Platform } from 'react-native';
import { AnalysisProps } from './types';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
const Analysis = ({ handleListAnimal, isOpen }: AnalysisProps) => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const requestPermissions = async () => {
    if (Platform.OS !== 'web') {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Desculpe, precisamos da permissão para acessar as suas fotos!');
      }
    }
  };

  const handleLibraryUpload = async () => {
    await requestPermissions();
    const result: ImagePicker.ImagePickerResult =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

    if (!result.canceled) {
      // Acessando a primeira imagem no array de assets e usando sua URI
      const uri = result.assets[0].uri;
      setSelectedImage(uri);
    }
  };
  React.useEffect(() => {
    console.log('Atualizado selectedImage:', selectedImage);
  }, [selectedImage]);
  return (
    <Container>
      <DropdownContent>
        <Select onTouchStart={handleListAnimal}>
          <Selected>
            <SelectCatDefault color="#D8491D" />
            <SelectedText>Aleatório</SelectedText>
          </Selected>
          <Caret source={require('@/assets/caret.png')} isOpen={isOpen} />
        </Select>
        <Menu
          scrollEnabled
          isOpen={isOpen}
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 3,
          }}
        >
          <MenuList>
            <Active>Aleatório</Active>
            <Divider />
            <Active>Aleatório</Active>
            <Divider />
            <Active>Aleatório</Active>
            <Divider />
            <Active>Aleatório</Active>
          </MenuList>
        </Menu>
      </DropdownContent>
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={{
            width: 200,
            height: 200,
            borderWidth: 1,
            borderColor: 'red',
          }}
        />
      )}
      <OpenCamera>
        <Image source={require('@/assets/cat-analysis.png')} />
        <OpenCameraText>Abrir câmera</OpenCameraText>
      </OpenCamera>
      <UploadButton onPress={handleLibraryUpload}>
        <Feather name="upload" size={24} color="white" />
        <UploadText>Upload</UploadText>
      </UploadButton>
      <UploadDescription>
        Faça uma nova análise do seu gato, aproxime o olho dele da câmera para
        uma melhor experiência.
      </UploadDescription>
    </Container>
  );
};

export default Analysis;
