import Header from '../../components/Header/index.tsx'
import Sidebar from '../../components/Sidebar/index.tsx'

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
  )
}

export default HomePage
