import { ReceivedProps } from './type';

const useSidebar = (props: ReceivedProps) => {
  return {
    ...props,
  };
};
export type Props = ReturnType<typeof useSidebar>;
export default useSidebar;
