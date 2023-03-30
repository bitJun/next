import React, { useEffect, useState } from 'react';
import Link from "next/link"
import Navbar from './navbar';
import { Layout, Menu, Breadcrumb, Button, Message } from '@arco-design/web-react';
import { IconHome, IconCalendar, IconCaretRight, IconCaretLeft } from '@arco-design/web-react/icon';
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Sider = Layout.Sider;
const HeaderHeader = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

export default function LayoutComponents({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Layout className='layout-collapse-demo'>
        <Sider
          collapsed={collapsed}
          onCollapse={handleCollapsed}
          collapsible
          trigger={collapsed ? <IconCaretRight /> : <IconCaretLeft />}
          breakpoint='xl'
        >
          <div className='logo' />
          <Menu
            defaultOpenKeys={['1']}
            defaultSelectedKeys={['0_3']}
            onClickMenuItem={(key) =>
              // Message.info({
              //   content: `You select ${key}`,
              //   showIcon: true,
              // })
              console.log(key)
            }
            style={{ width: '100%' }}
          >
            <MenuItem key='0_1' disabled>
              <IconHome />
              Home
            </MenuItem>
            <MenuItem key='0_2'>
              <Link href="/collection">
                <IconCalendar />
                Collection
              </Link>
            </MenuItem>
            <MenuItem key='0_3'>
              <IconCalendar />
              Transaction
            </MenuItem>
            <MenuItem key='0_4'>
              <IconCalendar />
              Event
            </MenuItem>
          </Menu>
        </Sider>
        <Layout>
          <div className="layout_view">
            <Navbar />
            <Layout className="layout_main">
              <main>{children}</main>
            </Layout>
          </div>
        </Layout>
      </Layout>
    </>
  )
}