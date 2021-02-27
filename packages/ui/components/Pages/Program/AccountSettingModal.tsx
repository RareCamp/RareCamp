import React, { useRef } from 'react';
import { Button, Input } from 'antd';
import { LetterPic } from 'components/LetterPic';
import { ModalHeader } from 'components/Modal';

const AccountSettingModal = ({
  setAccountSettingModalOpen,
}: {
  setAccountSettingModalOpen: Function;
}) => {
  const inputRef = useRef(null);

  return (
    <>
      <ModalHeader
        modalName="My Account Settings"
        onClick={() => setAccountSettingModalOpen(false)}
      />
      <div className="flex flex-start justify-between px-4">
        <div>
          <LetterPic
            letter="R"
            size="lg"
            color="primary"
            textColor="purple"
            className="mt-10"
          />
        </div>
        <form className="flex flex-col px-2 pb-6">
          <div className="flex items-center">
            <Input placeholder="first name" />

            <Input placeholder="last name" />
          </div>
          <Input placeholder="Example@gmail.com" />

          <Input placeholder="Example Foundation" />
          <Input placeholder="Foundation.org" />
          <div className="flex justify-end mt-4">
            <Button onClick={() => setAccountSettingModalOpen(false)}>
              Cancel
            </Button>
            <Button type="primary" onClick={() => {}}>
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AccountSettingModal;
