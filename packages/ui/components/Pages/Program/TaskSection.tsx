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
      {showTable && (
        <>
          {rows.map((item) => (
            <TableRow key={item.name} item={item} />
          ))}
          <tr>
            <td colSpan={6}>
              <Button
                onClick={() => addRow()}
                icon={<span>+</span>}
                label={ADD_TASK}
                color="tertiary"
                size="custom"
                className="py-4 px-4 flex flex-start w-full focus:outline-none text-gray-300 hover:text-gray-400 border border-gray-300 hover:border-blue-400"
              />
            </td>
          </tr>
        </>
      )}
    </tbody>
  );
};

export default TaskSection;
