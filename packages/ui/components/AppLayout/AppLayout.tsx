import { ChildrenProps } from 'types';
import Navbar from './Navbar';
import SideBar from './Sidebar';

const USER_NAME = 'Ramya';
const AppLayout = ({ children }: ChildrenProps) => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full min-h-screen">
        <Navbar username={USER_NAME} />
        <div className="w-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
