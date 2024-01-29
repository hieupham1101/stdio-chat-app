import { UserModel } from '../redux/type/userModels';

export const persistUser = (user: UserModel): void => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const readUser = (): UserModel | null => {
  const userJson = localStorage.getItem('user');
  const user = userJson !== null ? JSON.parse(userJson) : [];
  return user;
};

export const deleteUser = (): void => localStorage.removeItem('user');
