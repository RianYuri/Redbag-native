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
  ImageAnalysis,
  ButtonContent,
  CancelButton,
  CancelButtonText,
  DropwdownAndNewDog,
  NewDog,
} from './style';
import SelectCatDefault from '@/assets/select-cat.svg';
import { Image } from 'react-native';
import { AnalysisProps } from './types';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
const Analysis = ({
  handleListAnimal,
  handleLibraryUpload,
  isOpen,
  selectedImage,
}: AnalysisProps) => {
  return (
    <Container>
      <DropwdownAndNewDog>
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
        <NewDog>
          <AntDesign name="plus" size={24} color="white" />
        </NewDog>
      </DropwdownAndNewDog>
      {selectedImage ? (
        <ImageAnalysis source={{ uri: selectedImage }} />
      ) : (
        <OpenCamera>
          <Image source={require('@/assets/cat-analysis.png')} />
          <OpenCameraText>Abrir câmera</OpenCameraText>
        </OpenCamera>
      )}
      {selectedImage ? (
        <ButtonContent>
          <UploadButton onPress={() => router.push('/complete-analysis/')}>
            <UploadText>Continuar</UploadText>
          </UploadButton>
          <CancelButton onPress={() => handleLibraryUpload('cancel')}>
            <CancelButtonText>Cancelar</CancelButtonText>
          </CancelButton>
        </ButtonContent>
      ) : (
        <React.Fragment>
          <UploadButton onPress={() => handleLibraryUpload('')}>
            <Feather name="upload" size={24} color="white" />
            <UploadText>Upload</UploadText>
          </UploadButton>
          <UploadDescription>
            Faça uma nova análise do seu gato, aproxime o olho dele da câmera
            para uma melhor experiência.
          </UploadDescription>
        </React.Fragment>
      )}
    </Container>
  );
};

export default Analysis;
