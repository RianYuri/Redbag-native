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
import { FieldError, useForm } from 'react-hook-form';
import { editProfileList } from '@/data/editProfileList';
import { KeyboardAvoidingView } from 'react-native';
import Modal from '@/components/modal/modal.component';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormData } from './types';

const EditProfile = () => {
  const [hasModal, setHasModal] = React.useState<boolean>(false);
  const schema = yup.object({
    password: yup.string().required('Informe sua senha'),
    name: yup.string().required('Informe sua senha'),
    email: yup
      .string()
      .email('E-mail inválido')
      .required('Informe o seu email'),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
  });
  const handleChangeProfile = (data: FormData) => {
    console.log(data);
  };
  return (
    <>
      {hasModal && <Modal setHasModal={setHasModal} />}
      <KeyboardAvoidingView behavior="position">
        <Container>
          <HeaderDate />
          <EditProfileContent>
            <DeletePerfil
              onPress={() => {
                setHasModal(true);
              }}
            >
              <AntDesign name="delete" size={26} color="#FF4545" />
            </DeletePerfil>
            <UserProfile>
              <FontAwesome5 name="user" size={100} color="#9D2D15" />
            </UserProfile>
          </EditProfileContent>
          <FormEditContent>
            {editProfileList.map((item) => {
              const error = errors[item.name] as FieldError | undefined;
              return (
                <ControlledInput
                  key={item.labelName}
                  name={item.name}
                  labelName={item.labelName}
                  inputMode={item.name}
                  control={control}
                  secureTextEntry={item.secureTextEntry}
                  error={error}
                />
              );
            })}

            <ButtonSave onPress={handleSubmit(handleChangeProfile)}>
              <TextSave>SALVAR</TextSave>
            </ButtonSave>
          </FormEditContent>
        </Container>
      </KeyboardAvoidingView>
    </>
  );
};

export default EditProfile;
