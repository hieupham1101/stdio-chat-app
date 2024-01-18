import { useRequest } from '../../hook/useRequest';
import { ReceivedProps } from './type';
import { createDialog } from '../../requests/dialogRequest';

const useSidebar = (props: ReceivedProps) => {
  const { isLoading, mutate, isError } = useRequest(createDialog, {
    onSuccess: (accessToken) => {
      console.log('endpoint', accessToken);
    },
  });

  return {
    ...props,
  };
};
export type Props = ReturnType<typeof useSidebar>;
export default useSidebar;
