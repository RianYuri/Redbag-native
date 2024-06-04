import styled from 'styled-components/native';

export const StyledSafeAreaView = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export const Overlay = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 50px;
`;

export const CaptureButton = styled.TouchableOpacity`
  width: 86px;
  height: 86px;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

export const InnerCaptureButton = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
