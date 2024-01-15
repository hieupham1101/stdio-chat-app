import { ReceivedProps } from './type';
import { useState } from 'react';

const useSignup = (props: ReceivedProps) => {
  return {
    ...props,
  };
};
export type Props = ReturnType<typeof useSignup>;
export default useSignup;
