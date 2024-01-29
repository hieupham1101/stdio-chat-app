import { useRequest } from '../../../hook/useRequest';
import { ReceivedProps } from './type';
import { signUpApi } from '../../../requests/authRequest';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router';

const useSignup = (props: ReceivedProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { isLoading, mutate, isError, isSuccess, data } = useRequest(
    signUpApi,
    {
      onSuccess: () => {
        const { redirect } = queryString.parse(location.search);
        navigate((redirect as string) || '/login');
      },
    },
  );

  return {
    ...props,
    isLoading,
    mutate,
    isError,
    isSuccess,
    data,
  };
};
export type Props = ReturnType<typeof useSignup>;
export default useSignup;
