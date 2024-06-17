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
import Toast from 'react-native-toast-message';
import { router } from 'expo-router';
import { redBagApiService } from '@/services/redBagApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const handleChangeProfile = React.useCallback(async (data: FormData) => {
    const user = await AsyncStorage.getItem('@userAuthentication');
    const userInfo = {
      ...data,
      username: data.name,
    };
    if (user) {
      const userObj = JSON.parse(user);
      try {
        await redBagApiService.updateUser(userObj.token, userInfo);
        router.replace('/login/');
        Toast.show({
          type: 'success',
          text1: 'Salvo',
          text2: `Os seus dados foram atualizados com sucesso!`,
        });
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Erro',
          text2: `Parece que algo deu errado ao tentar excluir seu perfil`,
        });
      }
    }
  }, []);
  const handleDeleteAccount = React.useCallback(async () => {
    const user = await AsyncStorage.getItem('@userAuthentication');
    if (user) {
      const userObj = JSON.parse(user);
      try {
        await redBagApiService.deleteUser(userObj.token);
        router.replace('/login/');
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Erro',
          text2: `Parece que algo deu errado ao tentar excluir seu perfil`,
        });
        setHasModal(false);
      }
    }
  }, []);
  return (
    <>
      {hasModal && (
        <Modal
          setHasModal={setHasModal}
          textDescription="Usuários excluídos não recuperam seus dados após sua exclusão."
          buttonDelete="Sim, excluir minha conta"
          handleDelete={handleDeleteAccount}
        />
      )}
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
