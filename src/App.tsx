import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import HomePage from './pages/HomePage';
import Verify from './pages/Auth/Verify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <main className=''>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/verifyemail' element={<Verify />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
