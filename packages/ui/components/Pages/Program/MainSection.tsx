import React, { useState } from 'react';
// import { Button } from 'components/Button';
import { Button, Dropdown, Icon as SemanticIcon } from 'semantic-ui-react';
import { Icon } from 'components/Icon';
import { ChildrenProps } from 'types';
import { Modal } from 'components/Modal';
import { ADD_TASK_OPTIONS } from './Program.constant';
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
        <div>
          <Button.Group style={{ border: 'none'}}>
            <Button
              className="p-2"
              content="Invite"
              color="black"
              style={{ border: 'none', width: 140 }}
              icon
              basic
              labelPosition="left"
            >
              <SemanticIcon 
                name="plus" 
                size="small" 
                style={{ 
                  backgroundColor: 'transparent', 
                  fontSize: 14,
                  fontWeight: 'normal'
                }} 
              />
              Add Task
            </Button>
              <Dropdown
                className='button icon'
                floating
                style={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #000', 
                  borderRadius: 0,
                  borderLeftWidth: 0,
                }}
                options={ADD_TASK_OPTIONS}
                onChange={() => {

                }}
                trigger={<></>}
              />
          </Button.Group> 
          {/* <Button
            label="Add Task"
            size="md"
            color="custom"
            icon={<span className="text-xl">+</span>}
            className="text-sm focus:outline-none border-none py-1"
            onClick={() => {}}
          /> */}
          {/* <Button
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
          /> */}
        </div>
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
