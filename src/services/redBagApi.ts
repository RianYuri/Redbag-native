import { ImagePickerAsset } from 'expo-image-picker';
import { FormDataLogin, SaveAnimalType } from './types';
export type FormDataRegister = {
  name: string;
  username: string;
  email: string;
  password: string;
};
class ApiService {
  baseUrl = 'https://18.234.67.220';

  async register(data: FormDataRegister) {
    try {
      const response = await fetch(`${this.baseUrl}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const dataRes = await response.json();
      if (!response.ok) {
        throw new Error(dataRes.message || 'Algo deu errado');
      }
      const loginData = {
        usernameOrEmail: data.email,
        password: data.password,
      };
      return await this.login(loginData);
    } catch (error) {
      throw error;
    }
  }

  async login(data: FormDataLogin) {
    try {
      const response = await fetch(`${this.baseUrl}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const dataRes = await response.json();
      if (!response.ok) {
        throw new Error(dataRes.message || 'Algo deu errado');
      }
      return dataRes;
    } catch (error) {
      throw error;
    }
  }
  async saveAnimal(data: SaveAnimalType, userId: number, userToken: string) {
    try {
      const response = await fetch(`${this.baseUrl}/api/animals/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: userToken,
        },
        body: JSON.stringify(data),
      });

      const dataRes = await response.json();
      if (!response.ok) {
        throw new Error(dataRes.message || 'Algo deu errado');
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
      const response = await fetch(
        `${this.baseUrl}/api/animals/upload/${animalId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: userToken,
          },
          body: formData,
        }
      );
      const dataRes = await response.json();
      if (!response.ok) {
        throw new Error(dataRes.message || 'Algo deu errado');
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
      const response = await fetch(`${this.baseUrl}/api/animals/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: userToken,
        },
      });

      const dataRes = await response.json();
      if (response === null) {
        throw new Error(dataRes.message || 'Algo deu errado');
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
      const response = await fetch(`${this.baseUrl}/predict/${animalId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: userToken,
        },
        body: formData,
      });

      const dataRes = await response.json();
      if (response.status === 400) {
        throw new Error('Algo deu errado durante o upload da imagem');
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
      const response = await fetch(`${this.baseUrl}/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: userToken,
        },
        body: formData,
      });

      const dataRes = await response.json();
      if (response.status === 400) {
        throw new Error('Algo deu errado durante o upload da imagem');
      }
      return dataRes;
    } catch (error) {
      throw error;
    }
  }
  async deleteUser(userToken: string) {
    try {
      await fetch(`${this.baseUrl}/api/users`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: userToken,
        },
      });
    } catch (error) {
      throw error;
    }
  }
  async updateUser(userToken: string, data: FormDataRegister) {
    try {
      await fetch(`${this.baseUrl}/api/users`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: userToken,
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      throw error;
    }
  }
  async deleteAnimal(userId: number, animalId: number, userToken: string) {
    try {
      await fetch(`${this.baseUrl}/api/animals/${userId}/${animalId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: userToken,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}

export const redBagApiService = new ApiService();
