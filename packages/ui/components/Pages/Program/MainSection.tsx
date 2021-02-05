import React, { useState } from 'react';
import { Button } from 'components/Button';
import { Icon } from 'components/Icon';
import { ChildrenProps } from 'types';
import { Modal } from 'components/Modal';
import EditProgramModal from './EditProgramModal';
import AccountSettingModal from './AccountSettingModal';

const MainSection = ({
  children,
  isEditProgramModalOpen,
  setEditProgramModalOpen,
  isAccountSettingModalOpen,
  setAccountSettingModalOpen,
}: {
  children: ChildrenProps | any;
  isEditProgramModalOpen: boolean;
  setEditProgramModalOpen: Function;
  isAccountSettingModalOpen: boolean;
  setAccountSettingModalOpen: Function;
}) => {
  const [isAddSectionOpen, setAddSectionOpen] = useState(false);
  return (
    <main className="bg-primary">
      <div className="py-6 px-6 flex flex-col mb-4">
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
            className="text-xs text-black border-none focus:outline-none py-1"
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
      {isEditProgramModalOpen && (
        <Modal>
          <EditProgramModal
            setEditProgramModalOpen={setEditProgramModalOpen}
          />
        </Modal>
      )}
      {isAccountSettingModalOpen && (
        <Modal>
          <AccountSettingModal
            setAccountSettingModalOpen={setAccountSettingModalOpen}
          />
        </Modal>
      )}
    </main>
  );
};
export default MainSection;
