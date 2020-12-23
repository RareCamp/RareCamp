import React from 'react';
import { APP_NAME } from 'constants/application';
import { SIDEBAR_LINKS } from 'constants/lists';
import { Icon } from 'components/Icon';
import styles from 'styles/layout.module.css';

const SideBar = () => {
  const [toggleSideBar] = React.useState(true);
  return (
    <aside
      className={`min-h-screen relative bg-secondary ${
        toggleSideBar ? 'w-2/12' : 'w-40'
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
                key={item.name}
                type="button"
                className={styles['sidebar-item']}
              >
                <Icon
                  name={item.icon}
                  className={`mr-4 w-${
                    toggleSideBar ? 6 : 10
                  } text--white`}
                />
                {toggleSideBar && <a href="/">{item.name}</a>}
              </button>
            );
          })}
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
