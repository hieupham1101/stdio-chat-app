import { ReceivedProps } from './type';
import { useRequest } from '../../../hook/useRequest';
import { signInApi } from '../../../requests/authRequest';
import { AuthService } from '../../../requests/AuthServices';
import { useLocation, useNavigate } from 'react-router';
import { message, Space } from 'antd';
import queryString from 'query-string';
import { useState } from 'react';

const useLogin = (props: ReceivedProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { isLoading, mutate, isError, isSuccess, data } = useRequest(
    signInApi,
    {
      onSuccess: async ({ accessToken }) => {
        if (accessToken) {
          const { redirect } = queryString.parse(location.search);
          await AuthService.setToken(accessToken);
          navigate((redirect as string) || '/');
        }
      },
    },
  );

  return {
    ...props,
    isLoading,
    mutate,
    isError,
    isSuccess,
  };
};
export type Props = ReturnType<typeof useLogin>;
export default useLogin;
