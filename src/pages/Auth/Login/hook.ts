import { ReceivedProps } from './type';
import { useRequest } from '../../../hook/useRequest';
import { signInApi } from '../../../requests/authRequest';
import { AuthService } from '../../../requests/AuthServices';
import { useLocation, useNavigate } from 'react-router';
import queryString from 'query-string';
import { useAppDispatch } from '../../../redux/store';
import { setToken } from '../authSlice';

const useLogin = (props: ReceivedProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const { isLoading, mutate, isError, isSuccess, data } = useRequest(
    signInApi,
    {
      onSuccess: async ({ accessToken }) => {
        if (accessToken) {
          const { redirect } = queryString.parse(location.search);
          await AuthService.setToken(accessToken);
          dispatch(setToken(accessToken));
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
