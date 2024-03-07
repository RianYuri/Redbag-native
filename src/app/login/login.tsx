import { Path, Svg, SvgUri, Text } from "react-native-svg";
import * as React from "react";
import { Container } from "./styles";
import RectangleTop from "@/assets/rectangleTop";
import ReactangleBot from "@/assets/rectangleBot.svg";
const Login = () => {
  return (
    <Container>
      <RectangleTop />
      
      <ReactangleBot width="100" height="100"/>

    </Container>
  );
};

export default Login;
