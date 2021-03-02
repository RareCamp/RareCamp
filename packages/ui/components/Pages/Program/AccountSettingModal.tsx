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
<<<<<<< HEAD
            <Input placeholder="first name" />

            <Input placeholder="last name" />
          </div>
          <Input placeholder="Example@gmail.com" />

          <Input placeholder="Example Foundation" />
=======
            {/* <InputField
              label="Full Name"
              value=""
              className="text-sm text-gray-500 text-light mt-8 inline-block"
              name="firstname"
              placeholder="first name"
              reference={inputRef}
            /> */}
            <Input placeholder="first name" />

            {/* <InputField
              label="."
              value=""
              className="text-sm text-gray-500 text-light mt-8 inline-block ml-2"
              name="lastname"
              placeholder="last name"
              reference={inputRef}
            /> */}
            <Input placeholder="last name" />
          </div>
          {/* <InputField
            label="Email"
            placeholder="Example@gmail.com"
            className="text-sm text-gray-500 text-light mt-8"
            name="email"
            value=""
            reference={inputRef}
          /> */}
          <Input placeholder="Example@gmail.com" />

          {/* <InputField
            label="Organization Name"
            placeholder="Example Foundation"
            className="text-sm text-gray-500 text-light mt-8"
            name="organization"
            reference={inputRef}
            value=""
          /> */}
          <Input placeholder="Example Foundation" />

          {/* <InputField
            label="Organization Website"
            placeholder="Foundation.org"
            className="text-sm text-gray-500 text-light mt-8"
            name="organization"
            reference={inputRef}
            value=""
          /> */}
>>>>>>> pipe/feat/antd-comp
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
