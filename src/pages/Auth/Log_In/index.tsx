import useLogin from './hook'
import { ReceivedProps } from './type'
import './index.scss'

const LoginLayout = (Props) => {
  return <div>abc</div>
}
const Login = (props: ReceivedProps) => {
  return <LoginLayout {...useLogin(props)} />
}
export default Login
