import React, { useRef } from 'react';
import { ModalHeader } from 'components/Modal';
import { Button, Input } from 'antd';

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
        <Input placeholder="Basic usage" />
        <label
          htmlFor="description"
          className="text-sm text-gray-500 text-light mt-4"
        >
          Description
          <textarea
            id="description"
            rows={5}
            className="text-sm text-gray-500 text-light h-16 mt-4 px-4 border border-gray-200 rounded focus:outline-none w-full"
            value="This program captures essential steps in the SSMD gene
        therapy roadmap"
          />
        </label>

        <div className="flex justify-end mt-4">
          <Button onClick={() => setEditProgramModalOpen(false)}>
            Cancel
          </Button>
          <Button
            type="primary"
            onClick={() => setEditProgramModalOpen(false)}
          >
            Save
          </Button>
        </div>
      </form>
    </>
  );
};

export default EditProgramModal;
