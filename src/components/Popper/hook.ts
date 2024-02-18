import { useFetch } from '../../hook/useFetch';
import { ReceivedProps } from './type';
import { useAppDispatch } from '../../redux/store';
import { api } from 'requests/api';
import { useQuery } from '@tanstack/react-query';
import { readUserApi } from '../../requests/userRequest';
import { UserModel } from '../../redux/type/userModels';
import { userAction } from '../../redux/slice/userSlice';
import { useEffect } from 'react';

const usePopper = (props: ReceivedProps) => {
  const dispatch = useAppDispatch();
  const { data } = useQuery({ queryKey: ['user'], queryFn: readUserApi });
  useEffect(() => {
    if (data) {
      dispatch(userAction.setUser(data as UserModel));
    }
  }, [data, dispatch]);

  return {
    ...props,
    data,
  };
};
export type Props = ReturnType<typeof usePopper>;
export default usePopper;
