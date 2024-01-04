import { ReceivedProps } from './type'

const useSignup = (props: ReceivedProps) => {
  const a = 10
  return {
    ...props,
    a
  }
}
export type Props = ReturnType<typeof useSignup>
export default useSignup
