declare module 'MyModels' {
  export interface User {
    accessToken: string | null;
    refreshToken: string | null;
  }

  export type AuthState = {
    isLoggedIn: boolean;
    user: User;
    error: string;
  };

  export type UserCredentials = {
    email: string;
    password: string;
  };

  export type UserRegister = {
    username: string;
    email: string;
    password: string;
    passwordConf: string;
  };
}
