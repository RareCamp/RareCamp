import React, { useState } from 'react';
import Link from 'next/link';
import { APP_NAME } from 'constants/application';
import { SIDEBAR_LINKS } from 'constants/lists';
import { Icon } from 'components/Icon';
import styles from 'styles/layout.module.css';
import { DropDown } from 'components/DropDown';

const SideBar = () => {
  const [toggleSideBar] = React.useState(true);
  const [open, setOpen] = useState(false);
  return (
    <aside
      style={{ minHeight: '100vh' }}
      className={`min-h-screen relative bg-secondary ${
        toggleSideBar ? 'w-1/5' : 'w-40'
      }`}
    >
      <ul>
        <li className="h-12 flex flex-col justify-start">
          <span className="px-5 text-white uppercase my-auto">
            {APP_NAME.slice(0, 4)}
            <span className="inline text-2xl">
              {APP_NAME.slice(4, 6)}
            </span>
          </span>
        </li>
        <li className="flex flex-col py-2 bg-secondary">
          {SIDEBAR_LINKS.map((item) => {
            return (
              <button
                key={item.link}
                type="button"
                className={styles['sidebar-item']}
              >
                <Icon
                  name={item.icon}
                  className={`mr-4 w-${
                    toggleSideBar ? 6 : 10
                  } text--white`}
                />
                {toggleSideBar && (
                  <Link href={`/${item.link}`}>{item.name}</Link>
                )}
              </button>
            );
          })}
          <div className={styles['sidebar-item']}>
            {toggleSideBar && <Link href="/">SSMD Gene Therapy</Link>}
            <span role="presentation" onClick={() => setOpen(!open)}>
              <Icon name="dot" className="mr-4 w-6" />
            </span>
          </div>
          {open && (
            <DropDown
              className="w-48 text-sm right-0 px-2 py-1"
              data={['Edit Program Details', 'Delete Program']}
              render={(item) => {
                return (
                  <li
                    key={item}
                    className="text-black py-2 px-2 block border border-gray-100 hover:border-blue-400"
                  >
                    {item}
                  </li>
                );
              }}
            />
          )}
          <div className={styles['sidebar-item']}>
            {toggleSideBar && (
              <Link href="/">SSMD Drug Repurposing</Link>
            )}
          </div>
        </li>

        {/* <li>
          <Icon
            name="chevron-right"
            className="w-full h-16 absolute bottom-0 flex flex-col justify-center border-t border-white text-white"
          />
        </li> */}
      </ul>
    </aside>
  );
};
export default SideBar;
