import RegisterStep from '@/components/register/register.component';
import React from 'react';
import { Container, Content } from './_style';
import {
  Alert,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { registerList } from '@/data/registerList';
import Loading from '@/components/loading/loading.component';
import { router } from 'expo-router';
import { FormData } from './_types';
import { redBagApiService } from '@/services/redBagApi';
import RectangleTop from '@/assets/rectangleTop.svg';
import RectangleBot from '@/assets/rectangleBot.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchAnimalsSuccess } from '@/redux/reducer/home/home.reducer';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
const Register = () => {
  const { t } = useTranslation('register');
  const [currentRegister, setCurrentRegister] = React.useState(0);
  const registerListRef = React.useRef<any>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [formData, setFormData] = React.useState<FormData>({
    username: '',
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const totalStepRegister = registerList.length - 1;

  const calculateNewIndex = (currentIndex: number, step: number) => {
    return Math.max(0, Math.min(currentIndex + step, 3));
  };
  const handleRegisterName = () => {
    if (
      (currentRegister === 0 && formData.name) ||
      (currentRegister === 1 && formData.email)
    ) {
      if (currentRegister < totalStepRegister) {
        const newIndex = calculateNewIndex(currentRegister, 1);

        registerListRef.current?.scrollToIndex({
          index: newIndex,
          animated: true,
        });
        setCurrentRegister(newIndex);
      }
    }
    if (currentRegister === 2 && formData.password) {
      fetchRegister();
    }
  };
  const fetchRegister = async () => {
    const updatedFormData = {
      ...formData,
      username: formData.name,
    };
    setIsLoading(true);
    dispatch(fetchAnimalsSuccess([]));
    try {
      const response = await redBagApiService.register(updatedFormData);
      const user = response;
      await AsyncStorage.setItem('@userAuthentication', JSON.stringify(user));
      router.replace('/step-by-step');
    } catch (error: any) {
      Alert.alert(t('toastError.title'), t('toastError.subtitle'));
      router.replace('/login');

      setIsLoading(false);
    }
  };
  const handleRegisterBack = () => {
    const newIndex = calculateNewIndex(currentRegister, -1);
    registerListRef.current?.scrollToIndex({
      index: newIndex,
      animated: true,
    });
    if (currentRegister === 0) {
      router.push('/login');
    }
    setCurrentRegister(newIndex);
  };
  return isLoading ? (
    <Loading textLoading={t('loading')} />
  ) : (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView scrollEnabled style={{ width: '100%' }}>
          <Container>
            <RectangleTop style={{ position: 'absolute', top: 0, zIndex: 1 }} />
            <Content>
              <FlatList
                ref={registerListRef}
                data={registerList}
                keyExtractor={(item) => item.name}
                horizontal
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                renderItem={({ item }) => (
                  <RegisterStep
                    step={currentRegister}
                    handleRegisterName={handleRegisterName}
                    handleRegisterBack={handleRegisterBack}
                    description={item.description}
                    labelName={item.labelName}
                    name={item.name}
                    setFormData={setFormData}
                  />
                )}
                initialScrollIndex={currentRegister}
              />
            </Content>

            <RectangleBot style={{ position: 'relative', bottom: -20 }} />
          </Container>{' '}
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Register;
