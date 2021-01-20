import React, { useRef } from 'react';
import { Button } from 'components/Button';
import { InputField } from 'components/InputField';
import { ModalHeader } from 'components/Modal';

const EditProjectModal = ({
  setProjectModalOpen,
}: {
  setProjectModalOpen: Function;
}) => {
  const inputRef = useRef(null);

  return (
    <>
      <ModalHeader
        modalName="Edit Project Details"
        onClick={() => {
          setProjectModalOpen(false);
        }}
      />

      <form className="flex flex-col px-2 mt-8 pb-6">
        <InputField
          label="Project Name"
          value="Disease models"
          className="text-sm text-gray-500 text-light mt-8"
          name="Project Name"
          placeholder=""
          reference={inputRef}
        />
        <label
          htmlFor="description"
          className="text-sm text-gray-500 text-light mt-4"
        >
          Description
          <textarea
            id="description"
            rows={5}
            className="w-full text-sm text-gray-500 text-light h-16 mt-4 px-4 border border-gray-200 rounded focus:outline-none"
            value="Understand what models are relevant to your disease"
          />
        </label>
        <div className="flex justify-end mt-4">
          <Button
            label="Cancel"
            size="sm"
            color="tertiary"
            className="text-sm text-black focus:outline-none"
            onClick={() => setProjectModalOpen(false)}
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
    </>
  );
};

export default EditProjectModal;
