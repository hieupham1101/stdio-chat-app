import Header from '../../components/Header/index';
import Sidebar from '../../components/Sidebar/index';

function HomePage() {
  return (
    <div>
      <Header />
      {/*Header*/}
      {/*Sidebar*/}
      {/*React Router Dom */}
      <div className='app-body'>
        <Sidebar />
      </div>
    </div>
  );
}

export default HomePage;
