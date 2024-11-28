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
import CatOpenCam from '@/assets/catOpenCam.svg';
import DropdownCreateAnimalComponent from '../dropdown-create-animal/dropdown-create-animal.component';
import { useTranslation } from 'react-i18next';

const Analysis = ({
  handlePredictAnimal,
  handleListAnimal,
  handleLibraryUpload,
  isOpen,
  selectedImage,
}: AnalysisProps) => {
  const { t } = useTranslation('analysis');

  return (
    <Container>
      <DropdownCreateAnimalComponent
        isOpen={isOpen}
        handleListAnimal={handleListAnimal}
      />
      {selectedImage ? (
        <ImageAnalysis source={{ uri: selectedImage.uri ?? selectedImage }} />
      ) : (
        <OpenCamera>
          <CatOpenCam />
          <OpenCameraText>{t('openCamera')}</OpenCameraText>
        </OpenCamera>
      )}
      {selectedImage ? (
        <ButtonContent>
          <UploadButton onPress={handlePredictAnimal}>
            <UploadText>{t('buttons.continue')}</UploadText>
          </UploadButton>
          <CancelButton onPress={() => handleLibraryUpload('cancel')}>
            <CancelButtonText>{t('buttons.cancel')}</CancelButtonText>
          </CancelButton>
        </ButtonContent>
      ) : (
        <React.Fragment>
          <UploadButton onPress={() => handleLibraryUpload('')}>
            <Feather name="upload" size={24} color="white" />
            <UploadText>{t('buttons.upload')}</UploadText>
          </UploadButton>
          <UploadDescription>{t('instructions')}</UploadDescription>
        </React.Fragment>
      )}
    </Container>
  );
};

export default Analysis;
