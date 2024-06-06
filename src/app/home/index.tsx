import React, { useEffect } from 'react';
import { Container } from './styles';
import Analysis from '@/components/analysis/analysis.component';
import * as ImagePicker from 'expo-image-picker';
import { Platform } from 'react-native';
import { useImageContext } from '@/context/analysis-image';
import HeaderDate from '@/components/header-date/header-date.component';
import HistoriesAnalysis from '@/components/histories-analysis/histories-analysis.component';
import Tab from '@/components/tabs/tab.component';
import HomeComponent from '@/components/home-component/home-component.component';
import { useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { redBagApiService } from '@/services/redBagApi';
import { fetchAnimalsSuccess } from '@/redux/reducer/home/home.reducer';
import { useDispatch } from 'react-redux';
type RouteParams = {
  selectedTabRoute: string;
};
const Home = () => {
  const dispatch = useDispatch();
  const params = useLocalSearchParams() as RouteParams;
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const { setAnalyzedImage } = useImageContext();
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState<string>('home');

  useEffect(() => {
    if (params.selectedTabRoute) {
      setSelectedTab(params.selectedTabRoute);
    }
  }, [params.selectedTabRoute]);
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
  const fetchAllAnimalsByUser = React.useCallback(async () => {
    const user = await AsyncStorage.getItem('@userAuthentication');
    if (user) {
      const userObj = JSON.parse(user);
      try {
        const allAnimals = await redBagApiService.getAllAnimalsById(
          userObj.id,
          userObj.token
        );
        console.log(allAnimals, 'teste home');
        dispatch(fetchAnimalsSuccess(allAnimals));
      } catch {}
    }
  }, []);

  React.useEffect(() => {
    fetchAllAnimalsByUser();
  }, [fetchAllAnimalsByUser]);
  const renderSelectedTab = () => {
    switch (selectedTab) {
      case 'home':
        return <HomeComponent />;
      case 'analysis':
        return (
          <Analysis
            handleListAnimal={handleListAnimal}
            handleLibraryUpload={handleLibraryUpload}
            isOpen={isOpen}
            selectedImage={selectedImage}
          />
        );
      case 'prontuario':
        return <HistoriesAnalysis />;
      default:
        return null;
    }
  };
  return (
    <Container>
      <HeaderDate />
      {renderSelectedTab()}
      <Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </Container>
  );
};

export default Home;
