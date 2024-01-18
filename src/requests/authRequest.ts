import { api } from './api';
import { IRequestBody, IRequestProps } from './api/interfaces';

export function signInApi(data: IRequestProps): Promise<IRequestBody> {
  return api.post<IRequestBody>({
    data,
    endpoint: '/api/v1/auth/login',
  });
}
