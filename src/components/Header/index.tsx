import useHeader from './hook';
import { ReceivedProps } from './type';
import { Avatar } from 'antd';
import {
  UserOutlined,
  FieldTimeOutlined,
  SearchOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import './index.scss';
import { useState } from 'react';
import Popper from '../Popper/index';

const HeaderLayout = () => {
  const [popperVisible, setPopperVislible] = useState(false);

  const handleAvatar = () => {
    setPopperVislible(!popperVisible);
  };

  return (
    <div className='header px-4'>
      <div className='header-left'>
        <FieldTimeOutlined className='icon-header-left' />
        {/*Avatar for logged in user */}
      </div>
      <div className='header-search'>
        <SearchOutlined />
        <input placeholder='Search' className='input-search' />
      </div>
      <div className='header-right relative'>
        <QuestionCircleOutlined className='icon-help' />
        <Avatar
          onClick={handleAvatar}
          icon={<UserOutlined />}
          className='cursor-pointer'
        />
        {!popperVisible && <Popper />}
      </div>
    </div>
  );
};
const Header = (props: ReceivedProps) => {
  return <HeaderLayout {...useHeader(props)} />;
};
export default Header;
