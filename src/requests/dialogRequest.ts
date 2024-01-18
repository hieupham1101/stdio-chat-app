import { api } from './api';
import { IRequestBody, IRequestParams, IRequestProps } from './api/interfaces';

export function createDialog(data: IRequestBody): Promise<IRequestProps> {
  console.log('dataCreateDialog', data);
  return api.post<IRequestProps>({
    data,
    endpoint: '/api/v1/dialog',
  });
}

export function getAllDialog(params: IRequestParams): Promise<IRequestParams> {
  console.log('getAllDialog', params);
  return api.get<IRequestParams>({
    params,
    endpoint: '/api/v1/dialog',
  });
}
