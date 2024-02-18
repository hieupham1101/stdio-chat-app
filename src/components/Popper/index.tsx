import React from 'react';
import usePopper, { Props } from './hook';
import { ReceivedProps } from './type';
import GreenDot from '../../assets/images/green-dot.png';
import Avatar from '../../assets/images/Avatar.svg';
import { RightOutlined, SmileOutlined } from '@ant-design/icons';

const PopperLayout = ({ data }: Props) => {
  return (
    <div className='absolute right-0 top-[38px] shadow-lg rounded-md bg-gray-50 w-[300px] text-gray-600'>
      <div className='px-6 pt-5 pb-2'>
        <div className='flex items-center gap-2'>
          <img className='w-10 h-10' src={Avatar} alt='' />
          <div>
            <p className='text-black font-bold'>{data?.name}</p>
            <div className='flex text-gray-500 items-center gap-1 text-xs'>
              <img className='w-4 h-4' src={GreenDot} alt='' />
              Active
            </div>
          </div>
        </div>
        <div className='flex items-center h-9 border-[1px] rounded-[4px] text-gray-500 bg-white px-3 gap-4 mt-4 mb-3'>
          <SmileOutlined />
          <p>Update your profile</p>
        </div>
      </div>
      <div className='px-6 py-2 pb-3'>Sign out of Name Space</div>
    </div>
  );
};

const Popper = (props: ReceivedProps) => {
  return <PopperLayout {...usePopper(props)} />;
};

export default Popper;
