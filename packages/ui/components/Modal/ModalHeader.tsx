import { Icon } from 'components/Icon'
import { Button } from 'antd'
import React from 'react'

const ModalHeader = ({
  onClick,
  modalName,
}: {
  onClick: any
  modalName: string
}) => (
  <div className="flex justify-between items-center px-4 border-b border-gray-200 pb-6 pt-2">
    <h4 className="font-semibold">{modalName}</h4>
    {/* <Button
        icon={
          <Icon
            name="close"
            className="w-4 ml-2 text-gray-400 mt-1"
          />
        }
        label=""
        className="border-none"
        onClick={onClick}
        size="xs"
        color="tertiary"
      /> */}
    <Button type="primary">Close</Button>
  </div>
)

export default ModalHeader
