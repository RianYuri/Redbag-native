import React from 'react';
import {
  Active,
  DropdownContent,
  Menu,
  MenuList,
  Select,
  Selected,
  SelectedText,
  Divider,
  DropwdownAndNewDog,
  NewDog,
  SelectionCat,
} from './style';
import CatIcon from '@/assets/catIcon';

import { AntDesign } from '@expo/vector-icons';
import Caret from '@/assets/caret.svg';
import { router } from 'expo-router';
import { DropdownCreateAnimalProps } from '../analysis/types';

const DropdownCreateAnimal = ({
  isOpen,
  handleListAnimal,
}: DropdownCreateAnimalProps) => {
  return (
    <DropwdownAndNewDog>
      <DropdownContent>
        <Select onTouchStart={handleListAnimal}>
          <Selected>
            <CatIcon color="#f1f1f1" />
            <SelectedText>Aleatório</SelectedText>
          </Selected>
          <Caret
            style={{
              width: 15,
              height: 10,
              transform: [{ rotate: isOpen ? '180deg' : '0deg' }],
            }}
          />
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
            <SelectionCat>
              <CatIcon color="#D8491D" />
              <Active color={'#D8491D'}>Aleatório</Active>
            </SelectionCat>
            <Divider />
          </MenuList>
        </Menu>
      </DropdownContent>
      <NewDog onPress={() => router.push('/create-animal/')}>
        <AntDesign name="plus" size={24} color="white" />
      </NewDog>
    </DropwdownAndNewDog>
  );
};

export default React.memo(DropdownCreateAnimal);
