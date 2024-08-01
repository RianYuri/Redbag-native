import { ApiServiceFactory } from './factories/ApiServiceFactory';

const useMock = true;
export const redBagApiService = ApiServiceFactory.create(useMock);
