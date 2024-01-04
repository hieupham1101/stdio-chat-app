import { ReceivedProps } from './type'

const useLogin = (props: ReceivedProps) => {
  const a = 10
  return {
    ...props,
    a
  }
}
export type Props = ReturnType<typeof useLogin>
export default useLogin
