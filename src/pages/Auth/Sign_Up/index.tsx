import useSignup, { Props } from './hook'
import { ReceivedProps } from './type'
import './index.scss'

const SignupLayout = (Props) => {
  return (
    <div className='sidebar'>
      <h1>abc</h1>
    </div>
  )
}
const Signup = (props: ReceivedProps) => {
  return <SignupLayout {...useSignup(props)} />
}
export default Signup
