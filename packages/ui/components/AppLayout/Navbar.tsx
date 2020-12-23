import { LetterPic } from 'components/LetterPic';
import { Icon } from 'components/Icon';
import styles from 'styles/layout.module.css';

const Navbar = ({ username }: { username: string }) => {
  return (
    <nav className="bg-white py-4 px-8 h-16">
      <ul className="flex justify-end items-center">
        <li className="relative mr-8">
          <Icon name="bell" className="w-6 bell-color" />
          <span className={styles['notification-count']}>
            <span className="m-auto text-xs text-white">5</span>
          </span>
        </li>
        <li>
          <LetterPic letter={username[0]} />
        </li>
        <li className="text-gray-500 leading-tight">{username}</li>
      </ul>
    </nav>
  );
};
export default Navbar;
