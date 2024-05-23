import RegisterStep from '@/components/register/register.component';
import React from 'react';
import { Container, Content, RectangleBot, RectangleTop } from './style';
import { FlatList } from 'react-native';
import { registerList } from '@/data/registerList';
import Loading from '@/components/loading/loading.component';
import { router } from 'expo-router';
const Register = () => {
  const [currentRegister, setCurrentRegister] = React.useState(0);
  const registerListRef = React.useRef<any>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const totalStepRegister = registerList.length - 1;

  const calculateNewIndex = (currentIndex: number, step: number) => {
    return Math.max(0, Math.min(currentIndex + step, 3));
  };
  const handleRegisterName = () => {
    if (currentRegister < totalStepRegister) {
      const newIndex = calculateNewIndex(currentRegister, 1);

      registerListRef.current?.scrollToIndex({
        index: newIndex,
        animated: true,
      });
      setCurrentRegister(newIndex);
    }
    if (currentRegister === 2) {
      console.log(currentRegister);
      setIsLoading(true);
      setTimeout(() => {
        router.replace('/home/');
      }, 2000);
    }
  };

  const handleRegisterBack = () => {
    const newIndex = calculateNewIndex(currentRegister, -1);
    registerListRef.current?.scrollToIndex({
      index: newIndex,
      animated: true,
    });
    setCurrentRegister(newIndex);
  };
  return isLoading ? (
    <Loading />
  ) : (
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
              handleRegisterName={handleRegisterName}
              handleRegisterBack={handleRegisterBack}
              description={item.description}
              image={item.image}
              labelName={item.labelName}
              name={item.name}
            />
          )}
          initialScrollIndex={currentRegister}
        />
      </Content>

      <RectangleBot source={require('@/assets/rectangleBotRegister.png')} />
    </Container>
  );
};

export default Register;
