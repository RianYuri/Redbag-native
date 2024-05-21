import React from 'react';
import {
  Active,
  Caret,
  Container,
  DropdownContent,
  Menu,
  Select,
  Selected,
  SelectedText,
} from './style';
import SelectCatDefault from '@/assets/select-cat.svg';
const Analysis = () => {
  return (
    <Container>
      <DropdownContent>
        <Select>
          <Selected>
            <SelectCatDefault color="#D8491D" />
            <SelectedText>Aleatório</SelectedText>
          </Selected>
          <Caret source={require('@/assets/caret.png')} />
        </Select>
        <Menu>
          <Active>Aleatório</Active>
          <Active>Aleatório</Active>
        
        </Menu>
      </DropdownContent>
    </Container>
  );
};

export default Analysis;
