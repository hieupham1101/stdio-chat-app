import Content from '../../components/Content';
import Header from '../../components/Header/index';
import Sidebar from '../../components/Sidebar/index';
import { Button } from 'antd';

function HomePage() {
  return (
    <div>
      <Header />
      <div className='flex'>
        <div>
          <Sidebar />
        </div>
        <div>
          <Content />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
