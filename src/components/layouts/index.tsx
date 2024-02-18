// Sidebar.tsx

import React from 'react';
import { Image, Layout, Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  MessageOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router';

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const { push } = useRouter();
  return (
    <Sider className="h-full" theme="dark">
      <Image
        onClick={() => push("/")}
        preview={false}
        src='https://www.designevo.com/res/templates/thumb_small/green-bubble-and-forum.webp'
        alt='logo'
        className='h-[100px] pb-[20px] w-[200px] cursor-pointer'
      />
      <Menu mode="vertical" theme="dark" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
        <Menu.Item key="/" icon={<HomeOutlined />} title="Home" >Home</Menu.Item>
        <Menu.Item key="profile" icon={<UserOutlined />} >Profile</Menu.Item>
        <Menu.Item key="notification" icon={<MessageOutlined />}>Notification</Menu.Item>
        <Menu.Item key="setting" icon={<SettingOutlined />} >Setting</Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
