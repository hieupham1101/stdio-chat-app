import { ReceivedProps } from './type';
import { createDialog, getAllDialog } from '../../requests/dialogRequest';

const useSidebar = (props: ReceivedProps) => {
  // const { isLoading, mutate, isIdle, isSuccess, data } = useRequest(
  //   createDialog,
  //   {
  //     onSuccess: () => {
  //       console.log('endpoint', isLoading);
  //     },
  //   },
  // );

  // const { data, status, isSuccess, variables, mutate, context } = useRequest(
  //   getAllDialog,
  //   {
  //     onSuccess() {

  //     },
  //   },
  // );
  

  return {
    ...props,
    // data,
    // status,
    // isSuccess,
    // variables,
    // mutate,
    // context,
  };
};
export type Props = ReturnType<typeof useSidebar>;
export default useSidebar;
