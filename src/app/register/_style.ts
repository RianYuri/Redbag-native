import styled from 'styled-components/native';
export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const Content = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
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
