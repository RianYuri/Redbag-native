import { ActivityIndicator } from 'react-native';
import { Container, TextLoading } from './style';
import CatLoading from '@/assets/catLoading.svg';
interface LoadingProps {
  textLoading: string;
}
const Loading = ({ textLoading }: LoadingProps) => {
  return (
    <Container>
      <CatLoading />
      <ActivityIndicator size="large" color="#FFFFFF" />
      <TextLoading>{textLoading}</TextLoading>
    </Container>
  );
};
export default Loading;
