import { api } from './api';
import { IPostResponseSignIn, ISignIn, ISignUp } from './api/interfaces';

export function signInApi(data: ISignIn): Promise<IPostResponseSignIn> {
  return api.post<IPostResponseSignIn>({
    data,
    endpoint: '/api/v1/auth/login',
  });
}

export function logOutApi() {
  return api.get({
    endpoint: '/api/v1/auth/logout',
  });
}

export function signUpApi(data: ISignUp): Promise<IPostResponseSignIn> {
  return api.post<IPostResponseSignIn>({
    data,
    endpoint: '/api/v1/auth/signup',
  });
}
