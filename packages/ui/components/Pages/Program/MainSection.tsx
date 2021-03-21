import React, { useState } from 'react';
import { Dropdown, Button, Menu } from 'antd';
import { CaretDownOutlined, PlusOutlined } from '@ant-design/icons';
import { ChildrenProps } from 'types';
import { Modal } from 'components/Modal';
import EditProgramModal from './EditProgramModal';
import AccountSettingModal from './AccountSettingModal';

const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
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
          <Dropdown.Button
            overlay={menu}
            placement="bottomCenter"
            icon={<CaretDownOutlined />}
          >
            <div className="flex items-center">
              <PlusOutlined />{' '}
              <p style={{ marginLeft: 10 }}>Add task</p>
            </div>
          </Dropdown.Button>
        </div>
        {isAddSectionOpen && (
          <Button type="primary" icon={<PlusOutlined />}>
            add
          </Button>
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
