import { useAppDispatch } from 'redux/hook';
import { ReceivedProps } from './type';
import { signInApi } from '../../../requests/authRequest';
import { setTokens } from '../authSlice';
import { useRequest } from '../../../hook/useRequest';

const useLogin = (props: ReceivedProps) => {
  const { isLoading, mutate, isError } = useRequest(signInApi, {
    onSuccess: (accessToken) => {
      console.log(accessToken);
    },
  });

  return {
    ...props,
  };
};
export type Props = ReturnType<typeof useLogin>;
export default useLogin;
