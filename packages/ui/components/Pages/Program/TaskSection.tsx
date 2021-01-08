import React, { useState } from 'react';
import { ADD_TASK } from 'constants/labels';
import { INITIAL_TASK_VALUE } from 'constants/lists';
import { Button } from 'components/Button';
import { SectionHeader, TableRow } from 'components/Pages/Program';
import type { Task } from 'types';

export type Record = {
  id: string;
  title: string;
  description: string;
  items: Task[];
};
type RecordProps = {
  record: Record;
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
      {showTable &&
        rows.map((item) => <TableRow key={item.name} item={item} />)}
      <Button
        onClick={() => addRow()}
        icon={<span className="mr-2">+</span>}
        label={ADD_TASK}
        color="tertiary"
        size="custom"
        className="w-32 py-4 focus:outline-none text-gray-300 hover:text-gray-400"
      />
    </tbody>
  );
};

export default TaskSection;
