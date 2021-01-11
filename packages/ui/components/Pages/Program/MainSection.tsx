import React, { useState } from 'react';
import { Button } from 'components/Button';
import { Icon } from 'components/Icon';
import { ChildrenProps } from 'types';

const MainSection = ({ children }: ChildrenProps) => {
  const [isAddSectionOpen, setAddSectionOpen] = useState(false);
  return (
    <main className="py-6 px-6 bg-tertiary">
      <div className="flex flex-col mb-4">
        <div className="flex border border-gray-400 w-36">
          <Button
            label="Add Task"
            size="md"
            color="custom"
            icon={<span className="text-xl">+</span>}
            className="text-sm focus:outline-none border-none py-1"
            onClick={() => {}}
          />
          <Button
            label=""
            size="xs"
            color="custom"
            icon={
              <Icon
                name="chevron-down"
                className="w-6 ml-2 cursor-pointer"
              />
            }
            className="text-xs  font-extralight text-black border-none focus:outline-none"
            onClick={() => setAddSectionOpen(!isAddSectionOpen)}
          />
        </div>
        {isAddSectionOpen && (
          <Button
            label="Add Section"
            size="md"
            color="tertiary"
            icon="+"
            className="absolute z-50 ml-28 mt-8 text-sm focus:outline-none"
            onClick={() => {}}
          />
        )}
      </div>
      <div className="py-6 px-6 bg-primary w-full">{children}</div>
    </main>
  );
};
export default MainSection;
