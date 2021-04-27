import React, { useState } from 'react'
import {
  Avatar,
  Button,
  Divider,
  Dropdown,
  Layout,
  Menu,
  notification,
  Space,
  Skeleton,
} from 'antd'
import Link from 'next/link'
import { FileOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from 'react-query'
import { Auth } from 'aws-amplify'
import axios from 'axios'
import EditProgram from '../EditProgram'

const { Sider, Content, Header } = Layout

const OTLayout = styled(Layout)`
  font-family: roboto, sans-serif;

  .logo {
    margin-top: 4px;
    margin-left: 4px;
    margin-bottom: 15px;
    width: 150px;
    cursor: pointer;
  }

  .ant-menu-dark.ant-menu-dark:not(.ant-menu-horant-layout-headerizontal) {
    .ant-menu-item-selected {
      background-color: #6c5ea1;
    }
  }

  .ant-layout-header {
    background-color: white;
  }
  .sub-menu {
    padding-left: 40px !important;
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
    color: #391085;
  }
  .ant-space {
    cursor: pointer;
  }
`
const OFMenu = styled(Menu)`
  &.ant-menu-root.ant-menu-vertical {
    border-radius: 2px;
    box-shadow: 0 9px 28px 8px rgba(0, 0, 0, 0.05),
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12);
    background-color: #ffffff;
    margin-top: -15px;
    li {
      height: 32px;
    }
    a,
    button {
      font-family: Roboto, serif;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.85);
    }
    button {
      padding: 0;
      border: none;
    }
  }
`

const AccountMenu = () => {
  const router = useRouter()
  const mutation = useMutation(() => Auth.signOut({ global: true }), {
    onSuccess: router.reload,
    onError: (err: Error) =>
      notification.error({
        message: 'Can not logout',
        description: err.message,
        placement: 'topRight',
        duration: 1.5,
      }),
  })
  return (
    <OFMenu>
      <Menu.Item>
        <Link href="/account/settings">My Account Settings</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/auth/password">Update Password</Link>
      </Menu.Item>
      <Menu.Item>
        <Button
          loading={mutation.isLoading}
          onClick={() => mutation.mutate()}
        >
          Logout
        </Button>
      </Menu.Item>
    </OFMenu>
  )
}

const AppLayout = ({ children, selectedKey, title }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()
  const { data, isLoading } = useQuery(
    'userInfo',
    () => Auth.currentAuthenticatedUser(),
    {
      onSuccess: () => setIsLoggedIn(true),
      onError: () => router.push('/auth/login'),
    },
  )

  const defaultWorkspace = useQuery<any>(
    'defaultWorkspace',
    () => axios.get('/workspaces/default'),
    { retry: false, enabled: isLoggedIn },
  )

  const programs =
    defaultWorkspace?.data?.data?.workspace?.programs || []
  return isLoggedIn && data ? (
    <OTLayout style={{ minHeight: '100vh' }}>
      <Sider>
        <Link href="/">
          <img
            className="logo"
            src="/opentreatments-logo.png"
            alt="open treatments foundation logo"
          />
        </Link>
        <Menu
          defaultSelectedKeys={[selectedKey || 'programs']}
          selectedKeys={[selectedKey || 'programs']}
          mode="inline"
          theme="dark"
        >
          <Menu.Item key="programs" icon={<FileOutlined />}>
            <Link href="/">Programs</Link>
          </Menu.Item>
          {programs?.map((program) => (
            <Menu.Item
              key={`program_${program.programId}`}
              className="sub-menu"
            >
              <Link
                key={program.name}
                href={`/programs/${program.workspaceId}/${program.programId}`}
              >
                <Space>
                  <span>{program.name}</span>
                  <EditProgram program={program} />
                </Space>
              </Link>
            </Menu.Item>
          ))}
          <OTDivider>
            <Divider plain />
          </OTDivider>
          <Menu.Item key="disease_info" icon={<FileOutlined />}>
            Disease Info
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <OTHeader>
          <div>{title}</div>
          <div>
            <Dropdown
              trigger={['click']}
              overlay={() => <AccountMenu />}
            >
              {data?.attributes?.name ? (
                <Space>
                  <Avatar className="user-icon">
                    {data.attributes.name[0]}
                  </Avatar>
                  <span>{data.attributes.name}</span>
                </Space>
              ) : null}
            </Dropdown>
          </div>
        </OTHeader>
        <Content>
          {isLoading || defaultWorkspace.isLoading ? (
            <Skeleton />
          ) : (
            <>{children}</>
          )}
        </Content>
      </Layout>
    </OTLayout>
  ) : null
}

export default AppLayout
