import React from 'react';
import {
  Container,
  OpenCamera,
  OpenCameraText,
  UploadButton,
  UploadText,
  UploadDescription,
  ImageAnalysis,
  ButtonContent,
  CancelButton,
  CancelButtonText,
} from './style';
import { AnalysisProps } from './types';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import CatOpenCam from '@/assets/catOpenCam.svg';
import DropdownCreateAnimalComponent from '../dropdown-create-animal/dropdown-create-animal.component';

const Analysis = ({
  handleListAnimal,
  handleLibraryUpload,
  isOpen,
  selectedImage,
}: AnalysisProps) => {
  return (
    <Container>
      <DropdownCreateAnimalComponent
        isOpen={isOpen}
        handleListAnimal={handleListAnimal}
      />
      {selectedImage ? (
        <ImageAnalysis source={{ uri: selectedImage }} />
      ) : (
        <OpenCamera>
          <CatOpenCam />
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
