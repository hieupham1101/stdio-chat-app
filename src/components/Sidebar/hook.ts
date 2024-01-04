import { ReceivedProps } from './type'

const useSidebar = (props: ReceivedProps) => {
  const a = 10
  return {
    ...props,
    a
  }
}
export type Props = ReturnType<typeof useSidebar>
export default useSidebar
