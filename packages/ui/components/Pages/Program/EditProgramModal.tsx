import React, { useRef } from 'react';
import { Button } from 'components/Button';
import { InputField } from 'components/InputField';
import { ModalHeader } from 'components/Modal';

const EditProgramModal = ({
  setEditProgramModalOpen,
}: {
  setEditProgramModalOpen: Function;
}) => {
  const inputRef = useRef(null);

  return (
    <>
      <ModalHeader
        modalName="Edit Program Details"
        onClick={() => {
          setEditProgramModalOpen(false);
        }}
      />
      <form className="flex flex-col px-2 mt-8 pb-6">
        <InputField
          label="Program Name"
          value="SSMD Gene Therapy"
          className="text-sm text-gray-500 text-light mt-8"
          name="Program Name"
          placeholder=""
          reference={inputRef}
        />

        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label
          htmlFor="Description"
          className="text-sm text-gray-500 text-light mt-4"
        >
          Description
        </label>
        <textarea
          rows={5}
          className="text-sm text-gray-500 text-light h-16 mt-4 px-4 border border-gray-200 rounded focus:outline-none"
          value="This program captures essential steps in the SSMD gene
        therapy roadmap"
        />
        <div className="flex justify-end mt-4">
          <Button
            label="Cancel"
            size="sm"
            color="tertiary"
            className="text-sm text-black focus:outline-none"
            onClick={() => setEditProgramModalOpen(false)}
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

export default EditProgramModal;
