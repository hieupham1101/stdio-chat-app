import useSignup, { Props } from './hook';
import { ReceivedProps } from './type';
import './index.scss';
import { Button } from 'antd';
import logo from '../../../assets/images/logo.svg';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { useState } from 'react';

import './index.scss';

const SignupLayout = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConf, setshowPasswordConf] = useState(false);
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
                Sign Up To Get Started!
              </h4>
            </div>
            <form>
              <div className='mb-4 text-lg w-full'>
                <input
                  className='rounded-md text-base border-none w-full bg-[#e6e6e6] bg-opacity-50 px-6 py-2 text-center text-[#6b6260]  placeholder-[#6b6260] outline-none backdrop-blur-md'
                  type='text'
                  name='username'
                  autoComplete='false'
                  // value={email}
                  // onChange={handleChange}
                  placeholder='Enter your username'
                />
              </div>
              <div className='mb-4 text-lg w-full'>
                <input
                  className='rounded-md text-base border-none w-full bg-[#e6e6e6] bg-opacity-50 px-6 py-2 text-center text-[#6b6260]  placeholder-[#6b6260] outline-none backdrop-blur-md'
                  type='text'
                  name='email'
                  autoComplete='false'
                  // value={email}
                  // onChange={handleChange}
                  placeholder='Enter your email'
                />
              </div>
              <div className='mb-4 text-lg relative '>
                <input
                  className='rounded-md text-base border-none w-full bg-[#e6e6e6] bg-opacity-50 px-6 py-2 text-center text-[#6b6260] placeholder-[#6b6260] outline-none backdrop-blur-md'
                  type={showPassword ? 'text' : 'password'}
                  // value={password}
                  // onChange={handleChange}
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
              <div className='mb-4 text-lg relative '>
                <input
                  className='rounded-md text-base border-none w-full bg-[#e6e6e6] bg-opacity-50 px-6 py-2 text-center text-[#6b6260] placeholder-[#6b6260] outline-none backdrop-blur-md'
                  type={showPasswordConf ? 'text' : 'password'}
                  // value={password}
                  // onChange={handleChange}
                  name='password'
                  placeholder='Enter your confirm password'
                  autoComplete='false'
                />
                {showPasswordConf ? (
                  <EyeOutlined
                    className='absolute right-3 top-3 text-xl cursor-pointer text-[#4F4746]'
                    onClick={() =>
                      setshowPasswordConf((prevState) => !prevState)
                    }
                  />
                ) : (
                  <EyeInvisibleOutlined
                    className='absolute right-3 top-3 text-xl cursor-pointer text-[#4F4746]'
                    onClick={() =>
                      setshowPasswordConf((prevState: any) => !prevState)
                    }
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
                  Sign Up
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
const Signup = (props: ReceivedProps) => {
  return <SignupLayout {...useSignup(props)} />;
};
export default Signup;
