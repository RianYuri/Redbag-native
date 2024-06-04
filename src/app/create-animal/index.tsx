import HeaderDate from "@/components/header-date/header-date.component";
import { BackContent, BackText, Container } from "./style";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";

const CreateAnimal = () =>{
    return(

        <Container>
    <HeaderDate/>
    <BackContent onTouchStart={() => router.back()}>
        <Entypo name="chevron-left" size={28} color="#9D2D15" />
        <BackText>Voltar</BackText>
      </BackContent>
</Container>
)
}

export default CreateAnimal;