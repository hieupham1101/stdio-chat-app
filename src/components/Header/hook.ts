import { ReceivedProps } from './type'

const useHeader = (props: ReceivedProps) => {
  return {
    ...props
  }
}
export type Props = ReturnType<typeof useHeader>
export default useHeader
