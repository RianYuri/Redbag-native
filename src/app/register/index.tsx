import RegisterStep from '@/components/register/register.component';
import React from 'react';
import { Container, Content, RectangleBot, RectangleTop } from './style';
import {
  Alert,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import { registerList } from '@/data/registerList';
import Loading from '@/components/loading/loading.component';
import { router } from 'expo-router';
import { FormData } from './types';
import { redBagApiService } from '@/services/redBagApi';
const Register = () => {
  const [currentRegister, setCurrentRegister] = React.useState(0);
  const registerListRef = React.useRef<any>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [formData, setFormData] = React.useState<FormData>({
    username: '',
    name: '',
    email: '',
    password: '',
  });

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
    try {
      const response = await redBagApiService.register(updatedFormData);
      console.log('Register successful', response);
      router.replace('/step-by-step/');
    } catch (error: any) {
      console.error('Registration failed', error.message);
      Alert.alert('Erro de registro', error.message);
    } finally {
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
      router.push('/login/');
    }
    setCurrentRegister(newIndex);
  };
  return isLoading ? (
    <Loading />
  ) : (
    <KeyboardAvoidingView behavior="position">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <RectangleTop source={require('@/assets/rectangleTop.png')} />
          <Content>
            <FlatList
              ref={registerListRef}
              data={registerList}
              keyExtractor={(item) => item.name}
              horizontal
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <RegisterStep
                  step={currentRegister}
                  handleRegisterName={handleRegisterName}
                  handleRegisterBack={handleRegisterBack}
                  description={item.description}
                  image={item.image}
                  labelName={item.labelName}
                  name={item.name}
                  setFormData={setFormData}
                />
              )}
              initialScrollIndex={currentRegister}
            />
          </Content>

          <RectangleBot source={require('@/assets/rectangleBotRegister.png')} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Register;
