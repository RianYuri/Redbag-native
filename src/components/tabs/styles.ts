import { theme } from '@/themes';
import styled from 'styled-components/native';
type IsSelectProps = {
  isSelect?: boolean;
};
export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: row;
  position: absolute;
  gap: 35px;
  bottom: 50px;
  z-index: 1;
`;

export const BoxTabs = styled.View<IsSelectProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  background-color: ${(props) =>
    props.isSelect ? theme.colors.secondRedColor : '#eeeeee'};
  border-radius: 8px;
  position: relative;
  top: ${(props) => (props.isSelect ? '-40px' : '0px')};
`;
export const ImageTabs = styled.Image``;
