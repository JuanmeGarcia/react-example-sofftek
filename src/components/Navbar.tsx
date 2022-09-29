import { Logo } from "./Logo"
import { Thumbail } from "./Thumbail"
import { DownOutlined, LogoutOutlined, UpOutlined, UsergroupDeleteOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space, Typography } from 'antd';
import { useState } from 'react'



export const Navbar = () => {

  const menu = (
    <Menu
      items={[
        {
          label: <a href="#"><UserOutlined /> My Profile</a>,
          key: '0',
        },
        {
          label: <a href="#"><UsergroupDeleteOutlined /> Group Chat</a>,
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: <Typography.Paragraph><LogoutOutlined /> Logout</Typography.Paragraph>,
          key: '3',
        },
      ]}
    />
  );


  const toggleDropdown = (e: any) => {
    e.preventDefault()
  }

  return (
    <nav className="navbar">
      <Logo />

      <div className="navbar__right">
        <Dropdown   overlay={menu} trigger={['click']}>
          <a onClick={toggleDropdown}
            style={{
              display: 'flex',
              gap: '10px',
            }}
          >
            <Thumbail
              image={'https://thispersondoesnotexist.com/image'}
            />
            <Space style={{ display: 'flex', alignItems: 'center' }}>
                  <DownOutlined
                    style={{
                      color: '#fff',
                    }}
                  />
            </Space>
          </a>
        </Dropdown>
      </div>
    </nav>
  )
}
