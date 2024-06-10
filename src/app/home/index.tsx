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
import { router, useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { redBagApiService } from '@/services/redBagApi';
import { fetchAnimalsSuccess } from '@/redux/reducer/home/home.reducer';
import { useDispatch } from 'react-redux';
import Camera from '@/components/camera/camera.component';
type RouteParams = {
  selectedTabRoute: string;
};
const Home = () => {
  const dispatch = useDispatch();
  const params = useLocalSearchParams() as RouteParams;
  const [selectedImage, setSelectedImage] = React.useState<any>(null);
  const { analyzedData, setAnalyzedData } = useImageContext();
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState<string>('home');
  const [hasCamera, setHasCamera] = React.useState(false);

  useEffect(() => {
    if (params.selectedTabRoute) {
      setSelectedTab(params.selectedTabRoute);
    }
  }, [params.selectedTabRoute]);
  const handleListAnimal = () => {
    setIsOpen(!isOpen);
  };

  const handleLibraryUpload = async (type: string | null) => {
    if (!hasCamera) {
      setHasCamera(!hasCamera);
      return;
    }
    setHasCamera(!hasCamera);
    if (type === 'cancel') {
      setSelectedImage(null);
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

  const fetchAllAnimalsByUser = React.useCallback(async () => {
    const user = await AsyncStorage.getItem('@userAuthentication');
    if (user) {
      const userObj = JSON.parse(user);
      try {
        const allAnimals = await redBagApiService.getAllAnimalsById(
          userObj.id,
          userObj.token
        );
        dispatch(fetchAnimalsSuccess(allAnimals));
      } catch (error) {
        console.log(error);
      }
    }
  }, []);
  const handlePredictAnimal = async () => {
    const user = await AsyncStorage.getItem('@userAuthentication');
    if (user) {
      const userObj = JSON.parse(user);
      console.log(selectedImage, analyzedData.animalId, userObj.token);
      try {
        const predictAnimal = await redBagApiService.predictByAnimalId(
          selectedImage,
          analyzedData.animalId,
          userObj.token
        );
        setAnalyzedData({
          analyzedImage: selectedImage ?? selectedImage.uri,
          predictedClass: predictAnimal.predicted_class,
          confidence: predictAnimal.confidence,
        });
        console.log(predictAnimal);
        router.replace('/complete-analysis/');
      } catch (error) {
        console.log(error);
      }
    }
  };
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
            handlePredictAnimal={handlePredictAnimal}
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
  return hasCamera ? (
    <Camera
      handleLibraryUpload={handleLibraryUpload}
      setSelectedImage={setSelectedImage}
      setHasCamera={setHasCamera}
    />
  ) : (
    <Container>
      <HeaderDate />
      {renderSelectedTab()}
      <Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </Container>
  );
};

export default Home;
