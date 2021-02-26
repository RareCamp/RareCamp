import { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  FileOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router';
import { ChildrenProps } from 'types';
import axios from 'axios'
import styles from './AppLayout.module.css'

const { Footer, Sider } = Layout;

const AppLayout = ({ children }: ChildrenProps) => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = () => {
    setCollapsed(!collapsed)
  };

  useEffect(() => {
    const isAuthenticated = true;
    // if unauthenicated redirect to signin page
    if (!isAuthenticated) router.push('/signin');
  }, []);

  async function createProject() {
    const createProjectResponse = await axios.post('/projects', {
      project: {
        name: 'test',
      }
    })
    console.log(createProjectResponse)
  }

  return <Layout style={{ minHeight: '100vh' }}>
  <Sider
  className={styles.sider}
  collapsible
  collapsed={collapsed}
  onCollapse={onCollapse}
  >
    <div data-testid="AppLayout-logo" className={styles.logo} />
    <Menu defaultSelectedKeys={['create-project']} mode="inline">
      <Menu.Item key="create-project" icon={<FileOutlined />} onClick={createProject}>
        Create Project
      </Menu.Item>
    </Menu>
  </Sider>
  <Layout className={styles['site-layout']}>
    {children}
    <Footer style={{ textAlign: 'center' }}>RareCamp ©2021</Footer>
  </Layout>
</Layout>
};

export default AppLayout;
