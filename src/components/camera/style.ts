import styled from 'styled-components/native';

export const StyledSafeAreaView = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;
export const CaptureOverlay = styled.View`
  width: 300px;
  align-self: center;
  height: 400px;
  background-color: #f1f1f14d;
  border-radius: 20px;
`;
export const Overlay = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 50px;
`;

export const CaptureButton = styled.View`
  width: 100%;
  position: relative;
  top: 60px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  z-index: 20;
`;

export const InnerCaptureButton = styled.TouchableOpacity`
  width: 86px;
  height: 86px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LibraryButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 20px;
  background-color: #fe5433;
  position: absolute;
  right: 20px;
`;
