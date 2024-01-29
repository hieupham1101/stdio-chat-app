import useHeader from './hook';
import { ReceivedProps } from './type';
import { Avatar, Button } from 'antd';
import {
  UserOutlined,
  FieldTimeOutlined,
  SearchOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import './index.scss';
import { useRequest } from '../../hook/useRequest';
import { logOutApi } from '../../requests/authRequest';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router';

const HeaderLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { isLoading, mutate, isError, isSuccess, data } = useRequest(
    logOutApi,
    {
      onSuccess: (data) => {
        if (data) {
          const { redirect } = queryString.parse(location.search);
          navigate((redirect as string) || '/login');
        }
      },
    },
  );

  const onSubmit = () => {
    logOutApi();
  };

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
      <button onClick={onSubmit}>Log Out</button>
    </div>
  );
};
const Header = (props: ReceivedProps) => {
  return <HeaderLayout {...useHeader(props)} />;
};
export default Header;
