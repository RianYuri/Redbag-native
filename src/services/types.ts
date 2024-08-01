import { ImagePickerAsset } from 'expo-image-picker';

export type FormDataLogin = {
  usernameOrEmail: string;
  password: string;
};

export type SaveAnimalType = {
  name: string;
  color: string;
};

export type FormDataRegister = {
  name: string;
  username: string;
  email: string;
  password: string;
};

export interface IApiService {
  register(data: FormDataRegister): Promise<any>;
  login(data: FormDataLogin): Promise<any>;
  saveAnimal(
    data: SaveAnimalType,
    userId: number,
    userToken: string
  ): Promise<any>;
  saveAnimalImage(
    imageUri: any,
    animalId: number,
    userToken: string
  ): Promise<any>;
  saveAnimalAndImage(
    animalData: SaveAnimalType,
    imageUri: ImagePickerAsset,
    userId: number,
    userToken: string
  ): Promise<any>;
  getAllAnimalsById(userId: number, userToken: string): Promise<any>;
  predictByAnimalId(
    imageUri: any,
    animalId: number | null | undefined,
    userToken: string
  ): Promise<any>;
  predictAnimal(imageUri: any, userToken: string): Promise<any>;
  deleteUser(userToken: string): Promise<void>;
  updateUser(userToken: string, data: FormDataRegister): Promise<void>;
  deleteAnimal(
    userId: number,
    animalId: number,
    userToken: string
  ): Promise<void>;
}
