import { Layout } from 'antd';
import { ChildrenProps } from 'types';
import Navbar from './Navbar';
import SideBar from './Sidebar';

const { Footer } = Layout;

const USER_NAME = 'Ramya';
const AppLayout = ({ children }: ChildrenProps) => {
  return (
    <Layout style={{ maxHeight: '100vh', overflow: 'hidden' }}>
      <SideBar />
      <Layout className="site-layout">
        <Navbar username={USER_NAME} />
        {children}
        <Footer />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
