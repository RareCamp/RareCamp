import React, { useState } from 'react';
import { Icon } from 'components/Icon';
import { Button } from 'components/Button';
import { DropDown } from 'components/DropDown';

type SectionHeaderProps = {
  title: string;
  description: string;
  setShowTable: Function;
  showTable: boolean;
};

const SectionHeader = ({
  title,
  setShowTable,
  description,
  showTable,
}: SectionHeaderProps) => {
  const [hover, setHover] = useState(false);
  const [isSectionDropDownOpen, setSectionDropDown] = useState(false);

  const tooltipStyle = {
    display: hover ? 'block' : 'none',
  };
  return (
    <tr className="justify-between">
      <td
        colSpan={6}
        className="py-4 px-2 items-center cursor-pointer"
        onClick={() => setShowTable(!showTable)}
        role="presentation"
      >
        <span>
          <Icon
            name="chevron-down"
            className="float-left mr-2 w-10 h-5 mt-1"
          />
        </span>
        <h1 className="text-xl text-bl text-bold float-left mr-2">
          {title}
        </h1>
        {/* <p className="text-gray-400 inline text-sm ml-2">
          {description}
        </p> */}
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
          className="absolute  bg-black shadow-xl py-4 px-4 text-white text-sm z-50 flex flex-col w-72"
        >
          {description}
        </span>
      </td>
      <td className="flex justify-center py-4">
        <Button
          onClick={() => {
            setSectionDropDown(!isSectionDropDownOpen);
          }}
          label=""
          icon={
            <Icon name="dot" className="w-6 cursor-pointer ml-2" />
          }
          color="tertiary"
          size="xs"
          className="text-black border-gray-300  focus:outline-none"
        />
        {isSectionDropDownOpen && (
          <DropDown
            data={[
              'Edit Project Details',
              'Duplicate Project',
              'Delete Project',
            ]}
            render={(item) => (
              <li className="text-black py-4 px-2 block hover:bg-gray-300">
                {item}
              </li>
            )}
            className="right-2 top-60 text-sm"
          />
        )}
      </td>
    </tr>
  );
};

export default SectionHeader;
