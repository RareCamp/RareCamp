import { Icon } from 'components/Icon';
import { Button } from 'antd';
import React from 'react';

const ModalHeader = ({
  onClick,
  modalName,
}: {
  onClick: any;
  modalName: string;
}) => {
  return (
    <div className="flex justify-between items-center px-4 border-b border-gray-200 pb-6 pt-2">
      <h4 className="font-semibold">{modalName}</h4>
      <Button type="primary">Close</Button>
    </div>
  );
};

export default ModalHeader;
