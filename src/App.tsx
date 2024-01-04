import Login from './pages/Auth/Log_In'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    // <div>
    //   <HomePage />
    //   <Login />
    // </div>
    <Router>
      <main className='container content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
