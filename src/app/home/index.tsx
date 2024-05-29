import React from 'react';
import { Container } from './styles';
import Analysis from '@/components/analysis/analysis.component';
import * as ImagePicker from 'expo-image-picker';
import { Platform } from 'react-native';
import { useImageContext } from '@/context/analysis-image';
import HeaderDate from '@/components/header-date/header-date.component';
import HistoriesAnalysis from '@/components/histories-analysis/histories-analysis.component';

const Home = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const { setAnalyzedImage } = useImageContext();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleListAnimal = () => {
    setIsOpen(!isOpen);
  };

  const requestPermissions = async () => {
    if (Platform.OS !== 'web') {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Desculpe, precisamos da permissão para acessar as suas fotos!');
      }
    }
  };

  const handleLibraryUpload = async (type: string | null) => {
    if (type === 'cancel') {
      setSelectedImage(null);
    }
    await requestPermissions();
    const result: ImagePicker.ImagePickerResult =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true,
      });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setSelectedImage(uri);
      setAnalyzedImage(uri);
    }
  };

  return (
    <Container>
      <HeaderDate />
      {/* <HistoriesAnalysis/> */}
      <Analysis
        handleListAnimal={handleListAnimal}
        handleLibraryUpload={handleLibraryUpload}
        isOpen={isOpen}
        selectedImage={selectedImage}
      />
      {/* <HomeComponent /> */}
    </Container>
  );
};

export default Home;
