import React, { useEffect } from 'react';
import { Container } from './styles';
import Analysis from '@/components/analysis/analysis.component';
import * as ImagePicker from 'expo-image-picker';
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
import Loading from '@/components/loading/loading.component';
import Toast from 'react-native-toast-message';
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
  const [isLoading, setIsLoading] = React.useState(false);
  const localParams = useLocalSearchParams<{ healthHistoryId: any }>();
  useEffect(() => {
    return () => {
      localParams.healthHistoryId = null;
    };
  }, [,]);
  useEffect(() => {
    if (params.selectedTabRoute) {
      setSelectedTab(params.selectedTabRoute);
    }
  }, [params.selectedTabRoute]);
  const handleListAnimal = () => {
    setIsOpen(!isOpen);
  };

  const handleLibraryUpload = async (type: string | null) => {
    if (type === 'cancel') {
      setSelectedImage(null);
      setHasCamera(false);

      return;
    }
    if (!hasCamera) {
      setHasCamera(!hasCamera);
      return;
    }
    setHasCamera(!hasCamera);
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
          userObj.userId,
          userObj.token
        );

        if (allAnimals.status === 400) {
          dispatch(fetchAnimalsSuccess([]));
          return;
        }
        dispatch(fetchAnimalsSuccess(allAnimals));
      } catch (error) {
        router.replace('/error-page/');
      }
    }
  }, []);
  const handlePredictAnimal = async () => {
    setIsLoading(true);
    const user = await AsyncStorage.getItem('@userAuthentication');
    if (user) {
      if (analyzedData.nameAnimal !== 'Aleatório') {
        const userObj = JSON.parse(user);
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

          console.log(predictAnimal, 'com id');
          router.push('/complete-analysis/');
        } catch (error) {
          setIsLoading(false);
          Toast.show({
            type: 'error',
            text1: 'Erro ao salvar animal',
            text2:
              'Ocorreu um erro ao enviar a imagem. Por favor, tente novamente.',
          });
        }
      } else {
        const user = await AsyncStorage.getItem('@userAuthentication');
        const userObj = JSON.parse(user!);
        try {
          const predictAnimal = await redBagApiService.predictAnimal(
            selectedImage,
            userObj.token
          );
          setAnalyzedData({
            analyzedImage: selectedImage ?? selectedImage.uri,
            predictedClass: predictAnimal.predicted_class,
            confidence: predictAnimal.confidence,
          });
          console.log(predictAnimal, 'sem id');

          router.push('/complete-analysis/');
        } catch (error) {
          setIsLoading(false);
          Toast.show({
            type: 'error',
            text1: 'Erro ao salvar animal',
            text2:
              'Ocorreu um erro ao enviar a imagem. Por favor, tente novamente.',
          });
        }
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

  if (isLoading) {
    return (
      <Loading textLoading="Explorando o mundo pelos olhos do cachorro, um pixel de cada vez." />
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
      <Container>
        <HeaderDate />
        {renderSelectedTab()}
        <Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </Container>
    </>
  );
};
export default Home;
