import { Layout, Badge } from 'antd';
import { BellOutlined } from '@ant-design/icons';

const { Header } = Layout;

const Navbar = ({ username }: { username: string }) => {
  return (
    <Header className="site-layout-header">
      <div className="site-page-header">
        <div className="header-items flex-col-center">
          <div className="flex-row m-auto">
            <div className="flex-col-center">
              <Badge size="default" count={3}>
                <BellOutlined className="bell" />
              </Badge>
            </div>
            <div>
              <Badge
                size="default"
                style={{
                  color: 'blue',
                  background: 'skyblue',
                  marginRight: '2px',
                }}
                count={username[0]}
              />
              <Badge
                style={{
                  color: 'gray',
                  fontSize: '18px',
                  background: 'none',
                }}
                count={username}
              />
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};
export default Navbar;
