import React, { useState } from 'react';
import {
  Active,
  Caret,
  Container,
  DropdownContent,
  Menu,
  MenuList,
  Select,
  Selected,
  SelectedText,
  Divider,
  OpenCamera,
  OpenCameraText,
} from './style';
import SelectCatDefault from '@/assets/select-cat.svg';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import { Image } from 'react-native';
import { AnalysisProps } from './types';

const Analysis = ({ handleListAnimal, isOpen }: AnalysisProps) => {
  const device = useCameraDevice('back');
  const { hasPermission, requestPermission } = useCameraPermission();
  const [permission, setPermission] = useState<null | boolean>(null);
  return (
    <Container>
      <DropdownContent>
        <Select onTouchStart={handleListAnimal}>
          <Selected>
            <SelectCatDefault color="#D8491D" />
            <SelectedText>Aleatório</SelectedText>
          </Selected>
          <Caret source={require('@/assets/caret.png')} isOpen={isOpen} />
        </Select>
        <Menu
          scrollEnabled
          isOpen={isOpen}
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 3,
          }}
        >
          <MenuList>
            <Active>Aleatório</Active>
            <Divider />
            <Active>Aleatório</Active>
            <Divider />
            <Active>Aleatório</Active>
            <Divider />
            <Active>Aleatório</Active>
          </MenuList>
        </Menu>
      </DropdownContent>
      <OpenCamera>
        <Image source={require('@/assets/cat-analysis.png')} />
        <OpenCameraText>Abrir câmera</OpenCameraText>
      </OpenCamera>
    </Container>
  );
};

export default Analysis;
