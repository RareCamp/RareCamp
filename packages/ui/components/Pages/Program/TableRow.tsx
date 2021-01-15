import React, { useState } from 'react';
import { LetterPic } from 'components/LetterPic';
import { STATUS_TYPES } from 'constants/lists';
import styles from 'styles/program.module.css';
import { DropDown } from 'components/DropDown';
import type { Task } from 'types';
import { Icon } from 'components/Icon';

type TableRowProps = {
  item: Task;
};

const TableRow = ({ item }: TableRowProps) => {
  const [task, setTask] = useState(item.name);
  const [budget, setBudget] = useState(item.budget);
  const [showDropdown, setshowDropdown] = useState(false);
  const [selectedStatus, setStatus] = useState(item.status);
  const [isOwnerDetailsVisible, setOwnerDetailsVisible] = useState(
    false,
  );
  const [startDate, setStartDate] = useState(item.startDate);
  const [endDate, setEndDate] = useState(item.endDate);
  const [hover, setHover] = useState(false);

  let statusClass = 'status-not-started';
  if (selectedStatus === 'completed') {
    statusClass = 'status-completed';
  }

  if (selectedStatus === 'in-progress') {
    statusClass = 'status-in-progress';
  }
  if (selectedStatus === 'not-started') {
    statusClass = 'status-not-started';
  }
  const tooltipStyle = hover ? 'block' : 'hidden';

  return (
    <tr key={item.name} className={styles['table-item']}>
      <td
        className="flex items-center h-14 w-full"
        onMouseOver={() => setHover(true)}
        onFocus={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        onBlur={() => setHover(false)}
      >
        <Icon
          name="dot"
          className={`w-4 text-gray-300 hover:text-gray-400 cursor-pointer ${tooltipStyle}`}
        />
        <input
          // autoFocus={task ? false : true}
          className="text-sm"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </td>
      <td
        role="presentation"
        onClick={() => setshowDropdown(!showDropdown)}
      >
        {/* <select
          value={selectedStatus}
          onChange={(e) => setStatus(e.target.value)}
          className={styles[`status-${selectedStatus}`]}
        >
          {STATUS_TYPES.map((status) => {
            return (
              <option
                key={status.id}
                // className={styles[`status-${status.id}`]}
                style={{
                  padding: '20px 10px',
                  backgroundColor: '#fff',
                  color: '#000',
                  height: '120px',
                }}
                value={status.id}
                selected={item.status === status.id}
              >
                {status.label}
              </option>
            );
          })}
        </select> */}
        <span className={styles[statusClass]}> {selectedStatus}</span>
        {showDropdown && (
          <DropDown
            className="text-sm w-36"
            data={STATUS_TYPES}
            render={(status) => {
              return (
                <li
                  className="border border-gray-300 hover:border-blue-400"
                  key={status.id}
                  role="presentation"
                  onClick={() => {
                    setStatus(status.id);
                    setshowDropdown(false);
                  }}
                >
                  {status.label}
                </li>
              );
            }}
          />
        )}
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
              <div className="flex items-center px-2 py-2 hover:bg-gray-200 cursor-pointer">
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
