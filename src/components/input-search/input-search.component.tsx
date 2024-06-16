import { theme } from '@/themes';
import { InputContainer, LabelInput, TextInput } from './style';
import React from 'react';
import SearchIcon from '@/assets/searchIcon.svg';
import ClearSearchIcon from '@/assets/clearSearchIcon.svg';

const InputSearch = ({ setSearchText }: any) => {
  const [text, setText] = React.useState('');

  const handleInputText = (event: string) => {
    setText(event);
    setSearchText(event);
  };
  const handleClearText = () => {
    setText('');
    setSearchText('');
  };
  return (
    <InputContainer>
      <TextInput
        underlineColorAndroid="transparent"
        cursorColor={theme.colors.thirdRedColor}
        isFocused={text !== ''}
        onChangeText={handleInputText}
        value={text}
      />
      <LabelInput isFocused={text !== ''}>Buscar</LabelInput>
      <SearchIcon style={{ position: 'absolute', left: 10 }} />
      {text && (
        <ClearSearchIcon
          style={{ position: 'absolute', right: 10 }}
          onPress={handleClearText}
        />
      )}
    </InputContainer>
  );
};

export default InputSearch;
