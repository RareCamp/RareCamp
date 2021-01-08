import React, { useState } from 'react';
import { LetterPic } from 'components/LetterPic';
import { STATUS_TYPES } from 'constants/lists';
import styles from 'styles/program.module.css';
import { DropDown } from 'components/DropDown';
import type { Task } from 'types';

type TableRowProps = {
  item: Task;
};

const TableRow = ({ item }: TableRowProps) => {
  const [task, setTask] = useState(item.name);
  const [budget, setBudget] = useState(item.budget);
  const [duration, setDuration] = useState(item.duration);
  const [selectedStatus, setStatus] = useState(item.status);
  const [isOwnerDetailsVisible, setOwnerDetailsVisible] = useState(
    false,
  );
  const [startDate, setStartDate] = useState(item.startDate);
  const [endDate, setEndDate] = useState(item.endDate);

  return (
    <tr key={item.name} className={styles['table-item']}>
      <td>
        <input
          // autoFocus={task ? false : true}
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </td>
      <td>
        <select
          onChange={(e) => setStatus(e.target.value)}
          className={styles[`status-${selectedStatus}`]}
        >
          {STATUS_TYPES.map((status) => {
            return (
              <option
                key={status.id}
                className={styles[`status-${status.id}`]}
                value={status.id}
                selected={item.status === status.id}
              >
                {status.label}
              </option>
            );
          })}
        </select>
      </td>
      {item.owner !== '' ? (
        <td
          onClick={() => {
            setOwnerDetailsVisible(!isOwnerDetailsVisible);
          }}
          role="presentation"
          className="flex items-center"
        >
          <LetterPic
            letter={item.owner[0]}
            className="mr-1"
            color="primary"
            size="xs"
          />
          {item.owner}
        </td>
      ) : (
        <td />
      )}
      {isOwnerDetailsVisible && (
        <DropDown
          data={[
            {
              ownerName: 'Ramya Ramyaswamy',
              ownerEmail: 'ramyaramaswamy89@gmail.com',
            },
          ]}
          render={(i) => {
            return (
              <div className="flex items-center px-2 py-2">
                <LetterPic
                  letter="R"
                  color="primary"
                  className=""
                  size="md"
                  textColor="purple"
                />
                <span className="flex flex-col justify-between h-12 px-2 ml-2">
                  <span className="text-gray-500 text-base font-light block">
                    {i.ownerName}
                  </span>
                  <span className="text-gray-400 font-light text-sm block">
                    {i.ownerEmail}
                  </span>
                </span>
              </div>
            );
          }}
        />
      )}
      <td>
        <input
          type="text"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
      </td>

      <td>
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </td>
      <td>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </td>
      <td>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </td>
    </tr>
  );
};

export default TableRow;
