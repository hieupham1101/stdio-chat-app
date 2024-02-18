import { api } from './api';

export function readUserApi() {
  return api.get({
    endpoint: '/api/v1/user/me',
  });
}
