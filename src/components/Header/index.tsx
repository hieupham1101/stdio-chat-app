import useHeader from './hook'
import { ReceivedProps } from './type'
import { Avatar } from 'antd'
import { UserOutlined, FieldTimeOutlined, SearchOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import './index.scss'

const HeaderLayout = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <Avatar icon={<UserOutlined />} />
        <FieldTimeOutlined className='icon-header-left' />
        {/*Avatar for logged in user */}
      </div>
      <div className='header-search'>
        <SearchOutlined />
        <input placeholder='Search' className='input-search' />
      </div>
      <div className='header-right'>
        <QuestionCircleOutlined className='icon-help' />
      </div>
    </div>
  )
}
const Header = (props: ReceivedProps) => {
  return <HeaderLayout {...useHeader(props)} />
}
export default Header
