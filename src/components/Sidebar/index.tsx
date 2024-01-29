import useSidebar, { Props } from './hook';
import { ReceivedProps } from './type';
import './index.scss';
import { DownOutlined, EditOutlined } from '@ant-design/icons';
import Status from '../../assets/images/Status.svg';
import Canvases from '../../assets/images/canvases.svg';
import File from '../../assets/images/files.svg';
import ThreeDot from '../../assets/images/three-dots-vertical.svg';
import SlackConnect from '../../assets/images/slack-connect.svg';
import CaretDown from '../../assets/images/caret-down.svg';
import Hastag from '../../assets/images/Vector.svg';
import Lock from '../../assets/images/lock@2x.svg';
import Avatar from '../../assets/images/Avatar.svg';
import Huddle from '../../assets/images/huddle.svg';
import Edit from '../../assets/images/Frame 23.svg';
import { useState } from 'react';

const SidebarLayout = (Props: any) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    if (!showMore) {
      setShowMore(true);
      console.log(showMore);
    } else {
      setShowMore(false);
      console.log(showMore);
    }
  };

  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <div className='sidebar-infor'>
          <h3>
            Acme
            <DownOutlined className='w-[8.12px] h-[4.74px] ml-1' />
          </h3>
        </div>
        {/* <EditOutlined className='sidebar-edit' /> */}
        <img src={Edit} alt='' className='w-[34px]' />
      </div>

      <div className='sidebar-body'>
        <div className='sidebar-body-cate'>
          <div className='sidebar-item'>
            <img src={Canvases} alt='' className='h-[18px]' />
            <h4>Canvases</h4>
          </div>
          <div className='sidebar-item'>
            <img src={SlackConnect} alt='' className='h-[18px]' />
            <h4>Slack Connect</h4>
          </div>
          <div className='sidebar-item'>
            <img src={File} alt='' className='h-[18px]' />
            <h4>Files</h4>
          </div>
          <div className='sidebar-item'>
            <img src={ThreeDot} alt='' className='h-[18px]' />
            <h4>Browse Slack</h4>
          </div>
        </div>
        <div className='sidebar-body-channels'>
          <div
            className='item-header hover:cursor-pointer'
            onClick={handleShowMore}
          >
            <img src={CaretDown} alt='' className='h-[26px]' />
            Channels
          </div>

          {!showMore && (
            <>
              <div className='sidebar-item'>
                <img src={Hastag} className='h-[18px]' />
                general
              </div>
              <div className='sidebar-item'>
                <img src={Hastag} className='h-[18px]' />
                marketing
              </div>
              <div className='sidebar-item'>
                <img src={Hastag} className='h-[18px]' />
                product
              </div>
              <div className='sidebar-item'>
                <img src={Hastag} className='h-[18px]' />
                sales
              </div>
              <div className='sidebar-item'>
                <img src={Hastag} className='h-[18px]' />
                operations
              </div>
              <div className='sidebar-item'>
                <img src={Lock} alt='' className='h-[18px]' />
                fundraising
              </div>
              <div className='sidebar-item'>
                <img src={Lock} alt='' className='h-[18px]' />
                leadership
              </div>
              <div className='sidebar-add_channels'>
                <span className='add-channels'>+</span>
                Add channels
              </div>
            </>
          )}
        </div>
        <div className='sidebar-body-messages'>
          <div
            className='item-header hover:cursor-pointer'
            // onClick={handleShowMore}
          >
            <img src={CaretDown} alt='' className='h-[26px]' />
            Direct messages
          </div>
          {/* {!showMore && (
            <> */}
          <div className='sidebar-item'>
            <div className='item-user'>
              <img src={Avatar} alt='' className='' />
              <div className='item-user-status'>
                <img src={Status} alt='' />
              </div>
            </div>
            Slackbot
          </div>
          <div className='sidebar-item'>
            <div className='item-user'>
              <img src={Avatar} alt='' className='' />
              <div className='item-user-status'>
                <img src={Status} alt='' />
              </div>
            </div>
            Ali Sarraf
            <p>you</p>
          </div>
          <div className='sidebar-item sidebar-active'>
            <div className='item-user'>
              <img src={Avatar} alt='' className='' />
              <div className='item-user-status'>
                <img src={Status} alt='' />
              </div>
            </div>
            Decio Emanuel
          </div>
          <div className='sidebar-item'>
            <div className='item-user'>
              <img src={Avatar} alt='' className='' />
              <div className='item-user-status'>
                <img src={Status} alt='' />
              </div>
            </div>
            Slackbot
          </div>
          <div className='sidebar-item'>
            <div className='item-user'>
              <img src={Avatar} alt='' className='' />
              <div className='item-user-status'>
                <img src={Status} alt='' />
              </div>
            </div>
            Slackbot
          </div>
          <div className='sidebar-item'>
            <div className='item-user'>
              <img src={Avatar} alt='' className='' />
              <div className='item-user-status'>
                <img src={Status} alt='' />
              </div>
            </div>
            Slackbot
          </div>
          <div className='sidebar-item'>
            <div className='item-user'>
              <img src={Avatar} alt='' className='' />
              <div className='item-user-status'>
                <img src={Status} alt='' />
              </div>
            </div>
            Slackbot
          </div>
          <div className='sidebar-item'>
            <div className='item-user'>
              <img src={Avatar} alt='' className='' />
              <div className='item-user-status'>
                <img src={Status} alt='' />
              </div>
            </div>
            Slackbot
          </div>
          <div className='sidebar-item'>
            <div className='item-user'>
              <img src={Avatar} alt='' className='' />
              <div className='item-user-status'>
                <img src={Status} alt='' />
              </div>
            </div>
            Slackbot
          </div>
          <div className='sidebar-add_channels'>
            <span className='add-channels'>+</span>
            Add channels
          </div>
          {/* </>
          )} */}
        </div>
        <div className='sidebar-body-apps'>
          <div className='item-header'>
            <img src={CaretDown} alt='' className='h-[26px]' />
            Apps
          </div>
          <div className='sidebar-item'>
            <div className='item-app'>
              <img src={Avatar} alt='' />
              Good App
            </div>
            <div className='sidebar-app_noti'>1</div>
          </div>
          <div className='sidebar-add_channels'>
            <span className='add-channels'>+</span>
            Add apps
          </div>
        </div>
      </div>
      {/* <div className='sidebar-footer'>
        <div className='sidebar-footer-profile'>
          <h3>Decio Emanuel</h3>
          <DownOutlined className='w-[8.12px] h-[4.74px] ml-1 ' />
        </div>
        <div className='sidebar-footer-status'>
          <div className='elipse'></div>
          <img src={Huddle} alt='' />
        </div>
      </div> */}
    </div>
  );
};
const Sidebar = (props: ReceivedProps) => {
  return <SidebarLayout {...useSidebar(props)} />;
};
export default Sidebar;
