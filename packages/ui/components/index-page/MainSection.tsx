import { Layout } from 'antd';
import { ChildrenProps } from 'types';

const MainSection = ({ children }: ChildrenProps) => {
  const { Content } = Layout;

  return (
    <Content className="mainAreaContainer">
      <div className="site-layout-background">{children}</div>
    </Content>
  );
};
export default MainSection;
