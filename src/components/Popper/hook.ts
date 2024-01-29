import { ReceivedProps } from './type';

const usePopper = (props: ReceivedProps) => {
  return {
    ...props,
  };
};
export type Props = ReturnType<typeof usePopper>;
export default usePopper;
