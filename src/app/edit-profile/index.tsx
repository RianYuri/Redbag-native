import React from 'react';
import {
  Container,
  DeletePerfil,
  EditProfileContent,
  FormEditContent,
  UserProfile,
} from './style';
import HeaderDate from '@/components/header-date/header-date.component';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import ControlledInput from '@/components/controlled-input/controlled-input.component';
import { useForm } from 'react-hook-form';
import { editProfileList } from '@/data/editProfileList';
import { KeyboardAvoidingView } from 'react-native';
const EditProfile = () => {
  const { control, handleSubmit } = useForm();
  return (
    <KeyboardAvoidingView behavior="position">
      <Container>
        <HeaderDate />
        <EditProfileContent>
          <DeletePerfil>
            <AntDesign name="delete" size={26} color="#FF4545" />
          </DeletePerfil>
          <UserProfile>
            <FontAwesome5 name="user" size={100} color="#9D2D15" />
          </UserProfile>
        </EditProfileContent>
        <FormEditContent>
          {editProfileList.map((item) => (
            <ControlledInput
              name={item.name}
              labelName={item.labelName}
              inputMode={item.name}
              control={control}
              secureTextEntry={item.secureTextEntry}
            />
          ))}
        </FormEditContent>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;
