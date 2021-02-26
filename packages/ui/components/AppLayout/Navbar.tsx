import React, { useState } from 'react';
import { LetterPic } from 'components/LetterPic';
import { Icon } from 'components/Icon';
import { Button as AntButton } from 'antd';
import { DropDown } from 'components/DropDown';
import { UserAddOutlined } from '@ant-design/icons';
import OWNER_DATA from 'fixtures/dropdown.json';
import styles from 'styles/layout.module.css';
import avatars from 'fixtures/avatar.json';

const Navbar = ({
  username,
  setEditProgramModalOpen,
  setAccountSettingModalOpen,
}: {
  username: string;
  setEditProgramModalOpen: Function;
  setAccountSettingModalOpen: Function;
}) => {
  const [open, setOpenDropDown] = useState(false);
  const [isAccountDropDownOpen, setAccountDropDown] = useState(false);
  const [isUserDropDownOpen, setUserDropDown] = useState(false);
  const [hover, setHover] = useState(false);

  const tooltipStyle = {
    display: hover ? 'block' : 'none',
  };
  const avatarStyle =
    'inline-block h-6 w-6 rounded-full ring-2 ring-white text-sm';
  return (
    <nav className={`${styles['nav-bar']}`}>
      <ul className="flex justify-between items-center">
        <li className="text-2xl font-bold mr-1">SSMD Gene Therapy</li>
        <span className="w-4 h-4 rounded-full flex flex-col border mt-2  border-gray-300">
          <span
            onMouseOver={() => setHover(true)}
            onFocus={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            onBlur={() => setHover(false)}
            className="m-auto text-gray-500 text-xs cursor-pointer"
          >
            i
          </span>
        </span>
        <span
          style={tooltipStyle}
          className="absolute  bg-black shadow-xl py-4 px-4 text-white text-sm z-50 flex flex-col w-72  top-12"
        >
          This program captures essential steps in the SSMD gene
          therapy roadmap.
        </span>
        <Button
          label=""
          size="xs"
          color="custom"
          icon={
            <Icon name="dot" className="w-4 cursor-pointer ml-2" />
          }
          className="text-xl text-black bg-gray-100 border-none focus:outline-none ml-2"
          onClick={() => {
            setOpenDropDown(!open);
          }}
        />

        {open && (
          <DropDown
            className="w-48 text-sm"
            data={['Edit Program Details', 'Delete Program']}
            render={(item) => {
              return (
                <li
                  onClick={() => setEditProgramModalOpen(true)}
                  className="text-black text-sm py-2 px-2 block  border border-gray-100 hover:border-blue-400"
                  role="presentation"
                >
                  {item}
                </li>
              );
            }}
          />
        )}
      </ul>
      <ul className="flex justify-between items-center w-2/5 px-12">
        <li
          className="flex cursor-pointer mr-4"
          role="presentation"
          onClick={() => {
            setUserDropDown(!isUserDropDownOpen);
          }}
        >
          <div className="flex -space-x-1 overflow-hidden">
            <LetterPic
              letter="F"
              size="sm"
              color="primary"
              className={`text-gray-600 ${avatarStyle}`}
            />
            {avatars.map((avatar): any => {
              return (
                <LetterPic
                  key={avatar.id}
                  letter={
                    <img
                      className="inline-block h-6 w-6 rounded-full ring-transparent"
                      src={avatar.src}
                      alt=""
                    />
                  }
                  size="sm"
                  color={avatar.color}
                  className={`${avatarStyle}`}
                  textColor="blue"
                />
              );
            })}

            <LetterPic
              letter="+3"
              size="sm"
              color="secondary"
              className={`mr-2 ${avatarStyle}`}
              textColor="purple"
            />
          </div>
        </li>
        {isUserDropDownOpen && (
          <DropDown
            data={OWNER_DATA}
            className="w-80 right-80 top-12 pt-2"
            render={(item) => {
              return (
                <div
                  key={item.ownerName}
                  className="flex items-center px-2 py-4 border-b border-gray-300 border hover:border-blue-400"
                >
                  <LetterPic
                    letter={item.letter}
                    color={item.bgColor}
                    className=""
                    size="md"
                    textColor={item.letterColor}
                  />
                  <div className="flex flex-col justify-between h-12 px-2 ml-2 cursor-pointer">
                    <span className="text-gray-500 text-base font-light block">
                      {item.ownerName}
                    </span>
                    <span className="text-gray-400 font-light text-sm block">
                      {item.ownerEmail}
                    </span>
                  </div>
                </div>
              );
            }}
          />
        )}

        {/* <Button
          label="Invite"
          size="md"
          color="tertiary"
          className="text-xs border border-blue-400 text-blue-400 focus:outline-none mr-4"
          onClick={() => {}}
        /> */}
         <AntButton 
          type="primary" 
          icon={<UserAddOutlined />} 
          ghost
          size="large" 
        >
          Invite
        </AntButton>
        <ul
          className="flex items-center cursor-pointer"
          role="presentation"
          data-testid="123"
          onClick={() => {
            setAccountDropDown(!isAccountDropDownOpen);
          }}
        >
          <li>
            <LetterPic
              letter={username[0]}
              className="cursor-pointer"
              color="primary"
              size="sm"
              textColor="purple"
            />
          </li>

          <li className="text-black font-light text-base ml-1">
            {username}
          </li>
        </ul>
        {isAccountDropDownOpen && (
          <DropDown
            className="top-16 right-0 text-sm"
            data={[
              'My Accounts Settings',
              'Update Password',
              'Logout',
            ]}
            render={(item) => {
              return (
                <li
                  className="border border-gray-100 hover:border-blue-400"
                  key={item}
                  role="presentation"
                  onClick={() => setAccountSettingModalOpen(true)}
                >
                  {item}
                </li>
              );
            }}
          />
        )}
      </ul>
    </nav>
  );
};
export default Navbar;
