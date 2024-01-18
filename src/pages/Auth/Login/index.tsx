import useLogin from './hook';
import { ReceivedProps } from './type';
import { Button } from 'antd';
import logo from '../../../assets/images/logo.svg';
import { useState } from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const LoginLayout = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  

  return (
    <section>
      <div
        className='flex h-screen w-full items-center justify-center bg-cover bg-no-repeat bg-opacity-90'
        style={{
          backgroundColor: ' #611f69',
        }}
      >
        <div className='rounded-xl bg-[#FFFF] md:w-[430px] max-sm:w-[350px] bg-opacity-50 px-8 py-10 shadow-lg backdrop-blur-sm max-sm:px-8'>
          <div className='flex items-center justify-center h-[50px]'>
            <img
              src={logo}
              width={130}
              height={50}
              alt='Picture of the author'
            />
          </div>
          <div className='text-white w-full'>
            <div className='mb-8 flex flex-col items-center'>
              <h4 className='mb-2 mt-2 text-[16px] text-center text-[#564f4e]'>
                Login to have access!
              </h4>
            </div>
            <form>
              <div className='mb-4 text-lg w-full'>
                <input
                  className='rounded-md text-base border-none w-full bg-[#e6e6e6] bg-opacity-50 px-6 py-2 text-center text-[#6b6260]  placeholder-[#6b6260] outline-none backdrop-blur-md'
                  type='text'
                  name='email'
                  id='email'
                  autoComplete='false'
                  value={email}
                  onChange={onChange}
                  placeholder='Enter your email address'
                />
              </div>
              <div className='mb-4 text-lg relative '>
                <input
                  className='rounded-md text-base border-none w-full bg-[#e6e6e6] bg-opacity-50 px-6 py-2 text-center text-[#6b6260] placeholder-[#6b6260] outline-none backdrop-blur-md'
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  id='password'
                  onChange={onChange}
                  name='password'
                  placeholder='Enter your password'
                  autoComplete='false'
                />
                {showPassword ? (
                  <EyeOutlined
                    className='absolute right-3 top-3 text-xl cursor-pointer text-[#4F4746]'
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                ) : (
                  <EyeInvisibleOutlined
                    className='absolute right-3 top-3 text-xl cursor-pointer text-[#4F4746]'
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                )}
              </div>
              <div className='my-8 flex justify-center text-lg text-black'>
                <Button
                  htmlType='submit'
                  size='large'
                  // loading={isSubmitting}
                  className='bg-black w-[200px] bg-opacity-50 border-none !text-white hover:bg-[#4f4746]'
                >
                  Log in
                </Button>
              </div>
              <span className='text-[#4F4746]'>
                Need an account? <Link to={'/register'}>Sign Up Here</Link>
              </span>
              <div />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
const Login = (props: ReceivedProps) => {
  return <LoginLayout {...useLogin(props)} />;
};
export default Login;
