import { useRequest } from 'hook/useRequest';
import { api } from './api';
import { IRequestBody, IRequestProps } from './api/interfaces';
import { useState } from 'react';

export function signInApi(data: IRequestBody): Promise<IRequestProps> {
  return api.post<IRequestProps>({
    data,
    endpoint: '/api/v1/auth/login',
  });
}
