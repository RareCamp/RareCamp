import React, { useState } from 'react';
import { LetterPic } from 'components/LetterPic';
import { Icon } from 'components/Icon';
import { Button } from 'components/Button';
import { DropDown } from 'components/DropDown';
import OWNER_DATA from 'fixtures/dropdown.json';

const Navbar = ({ username }: { username: string }) => {
  const [open, setOpenDropDown] = useState(false);
  const [isAccountDropDownOpen, setAccountDropDown] = useState(false);
  const [isUserDropDownOpen, setUserDropDown] = useState(false);

  return (
    <nav className="bg-white py-4 px-8 h-16 flex items-center justify-between">
      <ul className="flex items-center">
        <li className="text-2xl font-bold mr-1">SSMD Gene Therapy</li>
        <Button
          label=""
          size="xs"
          color="custom"
          icon={
            <Icon name="dot" className="w-6 cursor-pointer ml-2" />
          }
          className="text-xl text-black bg-gray-100 border-none focus:outline-none"
          onClick={() => {
            setOpenDropDown(!open);
          }}
        />

        {open && (
          <DropDown
            className="top-16 right-62 w-48 text-sm"
            data={[
              'Edit Program Details',
              'Duplicate Program',
              'Delete Program',
            ]}
            render={(item) => {
              return (
                <li className="text-black py-2 px-2 block hover:bg-gray-300">
                  {item}
                </li>
              );
            }}
          />
        )}
      </ul>
      <ul className="flex justify-between items-center w-2/5">
        <li
          className="flex cursor-pointer"
          role="presentation"
          onClick={() => {
            setUserDropDown(!isUserDropDownOpen);
          }}
        >
          <LetterPic
            letter="F"
            size="sm"
            color="primary"
            className="text-sm text-gray-600"
          />
          <LetterPic
            letter="J"
            size="sm"
            color="secondary"
            className="text-sm right-2"
            textColor="blue"
          />
          <LetterPic
            letter="P"
            size="sm"
            color="primary"
            className="text-sm text-red-300"
          />
          <LetterPic
            letter="+3"
            size="sm"
            color="secondary"
            className="text-sm mr-2"
            textColor="purple"
          />
        </li>
        {isUserDropDownOpen && (
          <DropDown
            data={OWNER_DATA}
            className="w-80 right-80 top-12 pt-2"
            render={(item) => {
              return (
                <div
                  key={item.ownerName}
                  className="flex items-center px-2 py-4 border-b border-gray-300"
                >
                  <LetterPic
                    letter={item.letter}
                    color={item.bgColor}
                    className=""
                    size="md"
                    textColor={item.letterColor}
                  />
                  <ul className="flex flex-col justify-between h-12 px-2 ml-2">
                    <li className="text-gray-500 text-base font-light block">
                      {item.ownerName}
                    </li>
                    <li className="text-gray-400 font-light text-sm block">
                      {item.ownerEmail}
                    </li>
                  </ul>
                </div>
              );
            }}
          />
        )}

        <Button
          label="Invite"
          size="md"
          color="primary"
          className="text-xs text-white focus:outline-none"
          onClick={() => {}}
        />
        <ul className="flex items-center">
          <li
            role="presentation"
            onClick={() => {
              setAccountDropDown(!isAccountDropDownOpen);
            }}
          >
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
                  key={item}
                  className="text-black py-4 px-2 block hover:bg-gray-300"
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
