import { Container, Title } from "./styles";
import { router } from "expo-router";
setTimeout(()=>{
  router.push('/login/login')
},1500)
const Index = () => (
  <Container >
    <Title>Red Bag</Title>
  </Container>
);

export default Index;
