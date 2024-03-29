import styled from 'styled-components/native';
export const Container = styled.View`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100%;
`;
export const Content = styled.View`
  width: 100%;
 display: flex;
  align-items: center;

  
`;
export const RectangleTop = styled.Image`
  position: absolute;
  top: 0;
`;

export const RectangleBot = styled.Image`
  position: relative;
  z-index: -1;
  bottom: 0;
`;

