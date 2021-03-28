import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { FileOutlined } from '@ant-design/icons';
import { ChildrenProps } from 'types';
import styles from './AppLayout.module.css';
import PrivateRoute from '../PrivateRoute'

const { Footer, Sider } = Layout;

const AppLayout = ({ children }: ChildrenProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = () => {
    setCollapsed(!collapsed);
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        className={styles.sider}
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        <div data-testid="AppLayout-logo" className={styles.logo} />
        <Menu defaultSelectedKeys={['programs']} mode="inline">
          <Menu.Item key="programs" icon={<FileOutlined />}>
            Programs
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        {children}
        <Footer style={{ textAlign: 'center' }}>
          RareCamp ©2021
        </Footer>
      </Layout>
    </Layout>
  );
}

export default PrivateRoute(AppLayout);
