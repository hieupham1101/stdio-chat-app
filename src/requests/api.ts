import { Api } from './api/api';

Api.config({
  skipVersion: true,
  storage: localStorage,
  baseUrl: process.env.REACT_APP_API_ENDPOINT,
});

export const api = Api;
