import { useAppDispatch } from 'redux/hook';
import { ReceivedProps } from './type';
import { useRequest } from '../../../hook/useRequest';

const useLogin = (props: ReceivedProps) => {
  return {
    ...props,
  };
};
export type Props = ReturnType<typeof useLogin>;
export default useLogin;
