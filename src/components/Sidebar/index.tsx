import useSidebar, { Props } from './hook'
import { ReceivedProps } from './type'
import './index.scss'
import { EditOutlined } from '@ant-design/icons'
import GreenDot from '../../assets/images/green-dot.png'

const SidebarLayout = (Props) => {
  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <div className='sidebar-infor'>
          <h2>Admin App</h2>
          <h3>
            <img src={GreenDot} className='w-[15px] h-[15px] mr-[2px] mt-[1px]' />
            Pham Van Hieu
          </h3>
        </div>
        <EditOutlined className='sidebar-edit' />
      </div>
    </div>
  )
}
const Sidebar = (props: ReceivedProps) => {
  return <SidebarLayout {...useSidebar(props)} />
}
export default Sidebar
