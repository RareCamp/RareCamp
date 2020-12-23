import React from 'react';
import { Icon } from 'components/Icon';

type SectionHeaderProps = {
  title: string;
  description: string;
};

const SectionHeader = ({
  title,
  description,
}: SectionHeaderProps) => {
  return (
    <tr className="justify-between border border-1 border-gray-100">
      <td colSpan={6} className="py-4 px-2 items-center">
        <Icon
          name="chevron-down"
          className="inline-block mr-2 w-10 h-5"
        />
        <h1 className="text-xl text-black text-bold inline-block mr-5">
          {title}
        </h1>
        <p className="text-gray-400 inline text-sm ml-2">
          {description}
        </p>
      </td>
      <td className="flex justify-center py-4">
        <button
          type="button"
          className="px-4 py-1 w-32 h-8 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-500 rounded shadow ripple hover:shadow hover:bg-blue-600 focus:outline-none"
        >
          Identify Tasks
        </button>
        <button
          type="button"
          className="ml-4 border border-1 border-gray-100 px-3 py-0"
        >
          ...
        </button>
      </td>
    </tr>
  );
};

export default SectionHeader;
