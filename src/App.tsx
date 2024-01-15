import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';

import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <main className='container content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
