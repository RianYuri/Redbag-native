import { ActivityIndicator } from 'react-native';
import { Container, TextLoading } from './style';
import CatLoading from '@/assets/catLoading.svg';
const Loading = () => {
  return (
    <Container>
      <CatLoading />
      <ActivityIndicator size="large" color="#FFFFFF" />
      <TextLoading>Analisando suas informações...</TextLoading>
    </Container>
  );
};
export default Loading;
