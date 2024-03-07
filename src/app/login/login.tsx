import { Path, Svg, SvgUri, Text } from "react-native-svg";
import * as React from "react";
import { Container } from "./styles";
import Rectangle from "@/assets/rectangle";

const Login = () => {
  return (
    <Container>
      <Rectangle />
      
      <Rectangle transform={"rotate(180 214 69.5)"} />
    </Container>
  );
};

export default Login;
