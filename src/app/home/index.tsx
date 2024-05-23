import React from 'react';
import { Container, HeaderHome, RectangleTop, TextDay } from './styles';
import Settings from '@/assets/settings.svg';
import Analysis from '@/components/analysis/analysis.component';
import * as ImagePicker from 'expo-image-picker';
import { Platform } from 'react-native';
import { useImageContext } from '@/context/analysis-image';

const Home = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const { setAnalyzedImage } = useImageContext();
  const [isOpen, setIsOpen] = React.useState(false);
  const getDate = () => {
    const date = new Date();
    const day = date.getDate();

    const months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ] as string[];
    const monthName = months[date.getMonth()];

    return `${day} de ${monthName}`;
  };
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
      <RectangleTop source={require('@/assets/rectangleTop.png')} />
      <HeaderHome>
        <Settings style={{ right: 9, top: 32, position: 'absolute' }} />
      </HeaderHome>
      <TextDay>{getDate()}</TextDay>
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
