import React from 'react';

export const TASK_TABLE_HEADINGS = [
    {
      title: 'TaskName',
      dataIndex: 'taskname',
      key: 'taskname',
      render: (text, value, index) => {
          if (text !== 'ADD_TASK') {
            return <p style={{ fontSize: 20 }}>{text}</p>
          }
          return (
              <p style={{ color: '#ccc' }}>Add Task</p>
          )
      },
      width: '40%'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
      key: 'owner',
    },
    {
      title: 'Budget',
      dataIndex: 'budget',
      key: 'budget',
    },
    {
      title: 'Start Date',
      dataIndex: 'start_date',
      key: 'start_date',
    },
    {
      title: 'End Date',
      dataIndex: 'end_date',
      key: 'end_dates',
    }
  ];
  