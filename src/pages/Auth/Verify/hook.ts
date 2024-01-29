import { useRequest } from '../../../hook/useRequest';
import { ReceivedProps } from './type';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router';

export const useVerify = (props: ReceivedProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return {
    ...props,
  };
};
export type Props = ReturnType<typeof useVerify>;
