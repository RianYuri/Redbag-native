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
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';

const DropdownCreateAnimal = ({
  isOpen,
  handleListAnimal,
}: DropdownCreateAnimalProps) => {
  const allAnimals = useSelector((state:RootState)=>state.animals.animals)
  const filteredAnimals = allAnimals.map(animal => ({
    id: animal.id,
    name: animal.name,
    color: animal.color
  }));
  const [selectedAnimal, setSelectedAnimal] = React.useState({ name: 'Aleatório', color: '#f1f1f1' });
  
  const handleSelectChose = (animalName:string, color:string) =>{

  }
  return (
    <DropwdownAndNewDog>
      <DropdownContent>
        <Select onTouchStart={handleListAnimal}>
          <Selected>
            <CatIcon color={selectedAnimal.color} />
            <SelectedText color={selectedAnimal.color}>{selectedAnimal.name}</SelectedText>
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
          {filteredAnimals.map((item)=>(
            <React.Fragment key={item.id}>
            <SelectionCat onPress={()=>setSelectedAnimal({name:item.name, color:item.color})}>
              <CatIcon color={item.color} />
              <Active color={item.color}>{item.name}</Active>
            </SelectionCat>
            <Divider />
            </React.Fragment>
            ))}
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
