import { ImagePickerAsset } from 'expo-image-picker';
import { FormDataLogin, IApiService, SaveAnimalType } from '../types';
export type FormDataRegister = {
  name: string;
  username: string;
  email: string;
  password: string;
};
export class MockApiService implements IApiService {
  async register(data: FormDataRegister) {
    try {
      const response = {
        status: 200,
        json: async () => ({
          name: 'Gustavo',
          username: 'eyros',
          email: 'eyros@guga.com',
          password: '12345',
        }),
      };
      const dataRes = await response.json();
      if (response.status !== 200) {
      }
      const loginData = {
        usernameOrEmail: dataRes.email,
        password: dataRes.password,
      };
      return await this.login(loginData);
    } catch (error) {
      throw error;
    }
  }

  async login(data: FormDataLogin) {
    try {
      const response = {
        status: 200,
        json: async () => ({
          token: 'tokenzin',
          userId: 0,
        }),
      };
      const dataRes = await response.json();
      if (response.status !== 200) {
      }
      return dataRes;
    } catch (error) {
      throw error;
    }
  }

  async saveAnimal(data: SaveAnimalType, userId: number, userToken: string) {
    try {
      const response = {
        status: 200,
        json: async () => ({
          id: 0,
          name: 'Astolfo',
          color: 'Marrom',
          imageDetails: {
            publicId: '123',
            url: 'https://s2-g1.glbimg.com/SJIfPDRvzdcYP_-v02YIBgYBnQs=/0x0:636x431/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/F/z/Totj33SFGWrhT9MGXnug/dog.png',
          },
          healthHistory: [
            {
              id: 0,
              healthStatus: 'HEALTHY',
              accuracy: 98.5,
              time: '2024-08-01T14:07:51.192Z',
              image: {
                publicId: '123',
                url: 'https://s2-g1.glbimg.com/SJIfPDRvzdcYP_-v02YIBgYBnQs=/0x0:636x431/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/F/z/Totj33SFGWrhT9MGXnug/dog.png',
              },
            },
          ],
        }),
      };
      const dataRes = await response.json();
      if (response.status !== 200) {
      }
      return dataRes;
    } catch (error) {
      throw error;
    }
  }

  async saveAnimalImage(imageUri: any, animalId: number, userToken: string) {
    const formData = new FormData();

    formData.append('file', {
      uri: imageUri.uri ?? imageUri,
      name: imageUri.fileName ?? imageUri.split('/').pop(),
      type: imageUri.mimeType ?? `image/${imageUri?.split('.').pop()}`,
      lastModified: new Date().getTime(),
    } as any);

    try {
      const response = {
        status: 200,
        json: async () => ({
          id: 0,
          name: 'Astolfo',
          color: 'Marrom',
          imageDetails: {
            publicId: '123',
            url: 'https://s2-g1.glbimg.com/SJIfPDRvzdcYP_-v02YIBgYBnQs=/0x0:636x431/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/F/z/Totj33SFGWrhT9MGXnug/dog.png',
          },
          healthHistory: [
            {
              id: 0,
              healthStatus: 'HEALTHY',
              accuracy: 98.5,
              time: '2024-08-01T14:09:48.225Z',
              image: {
                publicId: '123',
                url: 'https://s2-g1.glbimg.com/SJIfPDRvzdcYP_-v02YIBgYBnQs=/0x0:636x431/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/F/z/Totj33SFGWrhT9MGXnug/dog.png',
              },
            },
          ],
        }),
      };
      const dataRes = await response.json();
      if (response.status !== 200) {
      }
      return dataRes;
    } catch (error) {
      throw error;
    }
  }

  async saveAnimalAndImage(
    animalData: SaveAnimalType,
    imageUri: ImagePickerAsset,
    userId: number,
    userToken: string
  ) {
    try {
      const saveAnimalResult = await this.saveAnimal(
        animalData,
        userId,
        userToken
      );
      const animalId = saveAnimalResult.id;

      const saveImageResult = await this.saveAnimalImage(
        imageUri,
        animalId,
        userToken
      );

      return {
        saveAnimalResult,
        saveImageResult,
      };
    } catch (error) {
      throw error;
    }
  }

  async getAllAnimalsById(userId: number, userToken: string) {
    try {
      const response = {
        status: 200,
        json: async () => [
          {
            id: 0,
            name: 'Astolfo',
            color: 'Marrom',
            imageDetails: {
              publicId: '123',
              url: 'https://s2-g1.glbimg.com/SJIfPDRvzdcYP_-v02YIBgYBnQs=/0x0:636x431/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/F/z/Totj33SFGWrhT9MGXnug/dog.png',
            },
            healthHistory: [
              {
                id: 0,
                healthStatus: 'HEALTHY',
                accuracy: 98.5,
                time: '2024-08-01T14:07:51.192Z',
                image: {
                  publicId: 'string',
                  url: 'https://s2-g1.glbimg.com/SJIfPDRvzdcYP_-v02YIBgYBnQs=/0x0:636x431/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/F/z/Totj33SFGWrhT9MGXnug/dog.png',
                },
              },
            ],
          },
        ],
      };
      const dataRes = await response.json();
      if (response.status !== 200) {
      }
      return dataRes;
    } catch (error) {
      throw error;
    }
  }

  async predictByAnimalId(
    imageUri: any,
    animalId: number | null | undefined,
    userToken: string
  ) {
    const formData = new FormData();

    formData.append('file', {
      uri: imageUri.uri ?? imageUri,
      name: imageUri.fileName ?? imageUri.split('/').pop(),
      type: imageUri.mimeType ?? `image/${imageUri?.split('.').pop()}`,
      lastModified: new Date().getTime(),
    } as any);
    try {
      const response = {
        status: 200,
        json: async () => ({
          predicted_class: 'HEALTHY',
          confidence: 0,
        }),
      };
      const dataRes = await response.json();
      if (response.status !== 200) {
      }
      return dataRes;
    } catch (error) {
      throw error;
    }
  }

  async predictAnimal(imageUri: any, userToken: string) {
    const formData = new FormData();

    formData.append('file', {
      uri: imageUri.uri ?? imageUri,
      name: imageUri.fileName ?? imageUri.split('/').pop(),
      type: imageUri.mimeType ?? `image/${imageUri?.split('.').pop()}`,
      lastModified: new Date().getTime(),
    } as any);
    try {
      const response = {
        status: 200,
        json: async () => ({
          predicted_class: 'HEALTHY',
          confidence: 0,
        }),
      };
      const dataRes = await response.json();
      if (response.status !== 200) {
      }
      return dataRes;
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(userToken: string) {
    try {
      const response = {
        status: 200,
      };
      if (response.status !== 200) {
      }
    } catch (error) {
      throw error;
    }
  }

  async updateUser(userToken: string, data: FormDataRegister) {
    try {
      const response = {
        status: 200,
        json: async () => ({
          id: 0,
          name: 'Gustavo',
          username: 'eyros',
          email: 'eyros@guga.com',
        }),
      };
      const dataRes = await response.json();
      if (response.status !== 200) {
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteAnimal(userId: number, animalId: number, userToken: string) {
    try {
      const response = {
        status: 200,
      };
      if (response.status !== 200) {
      }
    } catch (error) {
      throw error;
    }
  }
}
