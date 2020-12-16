import { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  ProfileOutlined,
} from '@ant-design/icons';
import { APP_NAME } from 'constants/application';
import { SIDEBAR_LINKS } from 'constants/lists';

const ICONS = [<DashboardOutlined />, <ProfileOutlined />];
const { Sider } = Layout;
const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      style={{ backgroundColor: ' #4f397d' }}
    >
      <div className="logo-container">
        <p className="m-auto">{APP_NAME}</p>
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={['1']}
        mode="inline"
        style={{ backgroundColor: ' #4f397d' }}
      >
        {SIDEBAR_LINKS.map((link, i) => (
          <Menu.Item
            key={link}
            className="customclass"
            icon={ICONS[i]}
          >
            {link}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};
export default SideBar;
