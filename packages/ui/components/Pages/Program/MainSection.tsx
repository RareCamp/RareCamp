import React, { useState } from 'react';
import { Button } from 'components/Button';
import { Dropdown, Button as AntButton, Menu } from 'antd';
import { CaretDownOutlined, PlusOutlined } from '@ant-design/icons';
import { Icon } from 'components/Icon';
import { ChildrenProps } from 'types';
import { Modal } from 'components/Modal';
import EditProgramModal from './EditProgramModal';
import AccountSettingModal from './AccountSettingModal';

const menu = (
  <Menu>
    <Menu.Item key="1">
      1st menu item
    </Menu.Item>
  </Menu>
);

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
          {/* <Button
            label="Add Task"
            size="md"
            color="custom"
            icon={<span className="text-xl">+</span>}
            className="text-sm focus:outline-none border-none py-1"
            onClick={() => {}}
          /> */}
          <Dropdown.Button overlay={menu} placement="bottomCenter" icon={<CaretDownOutlined />}>
            {/* <AntButton 
              type="primary"
              icon={<PlusOutlined />} 
              ghost
              size="large" 
            > */}
            <div className="flex items-center">
              <PlusOutlined /> <p style={{ marginLeft: 10 }}>Add task</p>
            </div>
            
            {/* </AntButton> */}
          </Dropdown.Button>
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
