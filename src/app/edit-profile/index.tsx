import React from 'react';
import {
  ButtonSave,
  Container,
  DeletePerfil,
  EditProfileContent,
  FormEditContent,
  TextSave,
  UserProfile,
} from './style';
import HeaderDate from '@/components/header-date/header-date.component';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import ControlledInput from '@/components/controlled-input/controlled-input.component';
import { useForm } from 'react-hook-form';
import { editProfileList } from '@/data/editProfileList';
import { KeyboardAvoidingView } from 'react-native';
import Modal from '@/components/modal/modal.component';
const EditProfile = () => {
  const { control, handleSubmit } = useForm();
  return (
    <>
      <Modal />
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
                key={item.labelName}
                name={item.name}
                labelName={item.labelName}
                inputMode={item.name}
                control={control}
                secureTextEntry={item.secureTextEntry}
              />
            ))}
            <ButtonSave>
              <TextSave>SALVAR</TextSave>
            </ButtonSave>
          </FormEditContent>
        </Container>
      </KeyboardAvoidingView>
    </>
  );
};

export default EditProfile;
