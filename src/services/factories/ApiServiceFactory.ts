import { MockApiService } from '../strategies/MockApiService';
import { RealApiService } from '../strategies/RealApiService';
import { IApiService } from '../types';

export class ApiServiceFactory {
  static create(useMock: boolean): IApiService {
    if (useMock) {
      return new MockApiService();
    }
    return new RealApiService();
  }
}
