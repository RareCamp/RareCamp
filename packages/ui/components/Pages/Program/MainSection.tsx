import { ChildrenProps } from 'types';

const MainSection = ({ children }: ChildrenProps) => {
  return (
    <main className="py-6 px-6 bg-tertiary">
      <div className="py-6 px-6 bg-primary w-full">{children}</div>
    </main>
  );
};
export default MainSection;
