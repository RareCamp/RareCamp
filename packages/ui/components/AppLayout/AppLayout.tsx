import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ChildrenProps } from 'types';
import SideBar from './Sidebar';

const AppLayout = ({ children }: ChildrenProps) => {
  const router = useRouter();
  useEffect(() => {
    const isAuthenticated = true;
    // if unauthenicated redirect to signin page
    if (!isAuthenticated) router.push('/signin');
  }, []);
  return (
    <div className="flex">
      <SideBar />
      <div data-testid="121" className="w-full min-h-screen">
        <div className="w-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
