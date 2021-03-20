import React, { useState } from 'react';
import { ADD_TASK } from 'constants/labels';
import { INITIAL_TASK_VALUE } from 'constants/lists';
import { CaretDownOutlined, PlusOutlined } from '@ant-design/icons';
import { Dropdown, Button, Menu } from 'antd';
import { SectionHeader, TableRow } from 'components/Pages/Program';
import type { Task } from 'types';

export type Record = {
  id: string;
  title: string;
  description: string;
  items: Task[];
};
type RecordProps = {
  record: Record | any;
};

const TaskSection = ({ record }: RecordProps) => {
  const [rows, setRows] = useState(record.items);
  const [showTable, setShowTable] = useState(false);
  const addRow = () => {
    const newRows = [...rows, INITIAL_TASK_VALUE];
    setRows(newRows);
  };

  return (
    <tbody>
      <SectionHeader
        title={record.title}
        description={record.description}
        setShowTable={setShowTable}
        showTable={showTable}
      />
      {showTable && (
        <>
          {rows.map((item) => (
            <TableRow key={item.name} item={item} />
          ))}
          <tr>
            <td colSpan={6}>
              <Button icon={<PlusOutlined />}>{ADD_TASK}</Button>
            </td>
          </tr>
        </>
      )}
    </tbody>
  );
};

export default TaskSection;
