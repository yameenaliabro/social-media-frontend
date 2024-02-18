import React from 'react';
import { Layout, Input, Dropdown, Menu, Badge, Modal } from 'antd';
import { BellOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Header } = Layout;

const notifications: string[] = [
    // Your notification data goes here
];

const TopBar: React.FC = () => {
    const handleSearch = (value: string) => {
        // Handle search functionality
        console.log('Search:', value);
    };

    const handleNotificationClick = () => {
        Modal.info({
            title: 'Notifications',
            content: (
                <div>
                    {notifications.map((notification, index) => (
                        <p key={index}>{notification}</p>
                    ))}
                </div>
            ),
            onOk() { },
        });
    };

    const menu = (
        <Menu>
            {/* Your dropdown menu items go here */}
        </Menu>
    );

    return (
        <Header style={{ background: '#fff', padding: 0 }} className='w-full !p-[0px]'>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px' }} className='w-full'>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: "15px" }} className='w-full'>
                    <Input
                        prefix={<SearchOutlined />}
                        placeholder="Search"
                        style={{ marginRight: '16px' }}
                        onPressEnter={(e) => handleSearch(e.currentTarget.value)}
                        className='w-[80%]'
                        size='large'
                    />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', }} className='gap-x-[20px] p-[20px]'>
                    <Badge count={notifications.length} >
                        <BellOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
                    </Badge>
                    <Badge count={notifications.length} >
                        <Link href="/auth/login">
                            <UserOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
                        </Link>
                    </Badge>
                </div>
            </div>
        </Header >
    );
};

export default TopBar;
