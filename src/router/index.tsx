import Signup from '../pages/Auth/Signup';
import Login from '../pages/Auth/Login';
import HomePage from '../pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RequireAuth from './routerPrivate';

export const AppRouter: React.FC = () => {
  const protectedLayout = (
    <RequireAuth>
      <HomePage />
    </RequireAuth>
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={protectedLayout} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
