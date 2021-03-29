import { useState } from 'react'
import {
  Avatar,
  Breadcrumb,
  Button,
  Divider,
  Dropdown,
  Layout,
  Menu,
  Space,
} from 'antd'
import Link from 'next/link'
import { FileOutlined } from '@ant-design/icons'
import { ChildrenProps } from 'types'
import styled from 'styled-components'
import PrivateRoute from 'components/PrivateRoute'

const { Footer, Sider, Content, Header } = Layout

const OTLayout = styled(Layout)`
  font-family: roboto, sans-serif;

  .logo {
    margin-top: 4px;
    margin-left: 4px;
    margin-bottom: 15px;
    width: 150px;
  }

  .ant-menu-dark.ant-menu-dark:not(.ant-menu-horant-layout-headerizontal) {
    .ant-menu-item-selected {
      background-color: #6c5ea1;
    }
  }

  .ant-layout-header {
    background-color: white;
  }
`
const OTDivider = styled('div')`
  padding-left: 20px;
  padding-right: 20px;

  .ant-divider {
    background-color: #ffffff7a;
    margin: 0;
  }
`
const OTHeader = styled(Header)`
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 24px;
    font-weight: 500;
    color: black;
  }

  .user-icon {
    background-color: #efdbff;
    color: black;
  }
  .ant-space {
    cursor: pointer;
  }
`

const menu = (
  <Menu>
    <Menu.Item>
      <Link href="/account/settings">My Account Settings</Link>
    </Menu.Item>
    <Menu.Item>
      <Link href="/auth/password">Update Password</Link>
    </Menu.Item>
    <Menu.Item>
      <Button type="text">Log Out</Button>
    </Menu.Item>
  </Menu>
)

const AppLayout = ({ children }: ChildrenProps) => {
  const [title, setTitle] = useState('Programs')
  return (
    <OTLayout style={{ minHeight: '100vh' }}>
      <Sider>
        <img
          className="logo"
          src="/opentreatments-logo.png"
          alt="open treatments foundation logo"
        />
        <Menu
          defaultSelectedKeys={['programs']}
          mode="inline"
          theme="dark"
        >
          <Menu.Item
            onSelect={() => setTitle('Programs')}
            key="programs"
            icon={<FileOutlined />}
          >
            Programs
          </Menu.Item>
          <OTDivider>
            <Divider plain />
          </OTDivider>
          <Menu.Item
            onSelect={() => setTitle('Disease Info')}
            key="disease_info"
            icon={<FileOutlined />}
          >
            Disease Info
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <OTHeader>
          <span className="title">{title}</span>
          <div>
            <Dropdown overlay={menu} visible>
              <Space>
                <Avatar className="user-icon">R</Avatar>
                <span>Ramya</span>
              </Space>
            </Dropdown>
          </div>
        </OTHeader>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </OTLayout>
  )
}

export default PrivateRoute(AppLayout)
