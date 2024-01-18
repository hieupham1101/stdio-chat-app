import { Api } from './api/api';

Api.config({
  skipVersion: true,
  storage: localStorage,
  baseUrl: import.meta.env.VITE_REACT_APP_API_ENDPOINT,
});

export const api = Api;
