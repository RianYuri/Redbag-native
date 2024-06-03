import { FormData } from '@/app/login/types';
export type FormDataRegister = {
  name: string;
  username: string;
  email: string;
  password: string;
};
class ApiService {
  baseUrl = 'https://redbag-api-java.onrender.com';

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
      return dataRes;
    } catch (error) {
      throw error;
    }
  }

  async login(data: FormData) {
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
}

export const redBagApiService = new ApiService();
