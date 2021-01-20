import React, { useRef } from 'react';
import { Button } from 'components/Button';
import { InputField } from 'components/InputField';
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
            <InputField
              label="Full Name"
              value=""
              className="text-sm text-gray-500 text-light mt-8 inline-block"
              name="firstname"
              placeholder="first name"
              reference={inputRef}
            />
            <InputField
              label="."
              value=""
              className="text-sm text-gray-500 text-light mt-8 inline-block ml-2"
              name="lastname"
              placeholder="last name"
              reference={inputRef}
            />
          </div>
          <InputField
            label="Email"
            placeholder="Example@gmail.com"
            className="text-sm text-gray-500 text-light mt-8"
            name="email"
            value=""
            reference={inputRef}
          />
          <InputField
            label="Organization Name"
            placeholder="Example Foundation"
            className="text-sm text-gray-500 text-light mt-8"
            name="organization"
            reference={inputRef}
            value=""
          />
          <InputField
            label="Organization Website"
            placeholder="Foundation.org"
            className="text-sm text-gray-500 text-light mt-8"
            name="organization"
            reference={inputRef}
            value=""
          />
          <div className="flex justify-end mt-4">
            <Button
              label="Cancel"
              size="sm"
              color="tertiary"
              className="text-sm text-black focus:outline-none"
              onClick={() => setAccountSettingModalOpen(false)}
            />
            <Button
              label="Save"
              size="md"
              color="primary"
              className="text-sm text-white  focus:outline-none"
              onClick={() => {}}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AccountSettingModal;
