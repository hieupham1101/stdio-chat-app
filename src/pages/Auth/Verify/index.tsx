import { ReceivedProps } from './type';
import { useVerify } from './hook';
import logo from '../../../assets/images/logo.svg';
import { Button } from 'antd';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';

const VerifyLayout = (props) => {
  const [verifyEmail, setVerifyEmail] = useState<string>('');

  const verificationCodeSchema = z.object({
    verificationCode: z.string().min(1, 'Verification code is required'),
  });

  type ValidationSchemaType = z.infer<typeof verificationCodeSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchemaType>({
    resolver: zodResolver(verificationCodeSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchemaType> = () => {
    // mutate({ ...formData });
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
                Verify your email!
              </h4>
            </div>
            <form>
              <div className='mb-4 text-lg w-full '>
                <input
                  className='rounded-md text-base border-none w-full bg-[#e6e6e6] bg-opacity-50 px-6 py-2 text-center text-[#6b6260]  placeholder-[#6b6260] outline-none backdrop-blur-md'
                  type='text'
                  autoComplete='false'
                  value={verifyEmail}
                  placeholder='Enter your email address'
                  {...register('verificationCode')}
                  onChange={(e) => setVerifyEmail(e.target.value)}
                  name='verificationCode'
                />
                {errors.verificationCode && (
                  <span className='text-red-500 text-[14px]'>
                    {errors.verificationCode?.message}
                  </span>
                )}
              </div>

              <div className='my-8 flex justify-center text-lg text-black'>
                <Button
                  htmlType='submit'
                  size='large'
                  className='bg-black w-[200px] bg-opacity-50 border-none !text-white hover:bg-[#4f4746]'
                  onClick={handleSubmit(onSubmit)}
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
const Verify = (props: ReceivedProps) => {
  return <VerifyLayout {...useVerify(props)} />;
};
export default Verify;
