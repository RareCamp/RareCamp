import React from 'react';
import { Tag, Badge } from 'antd';

export const dashboardColumns = [
  {
    title: 'Task Name',
    dataIndex: 'name',
    // render: (text) => <a>{text}</a>,
    render: (value, index) => {
      if (index > 0) {
        return <p>{value}</p>;
      }

      return {
        children: <p>{value}</p>,
        // props: {
        //   colSpan: 7,
        // },
      };
    },
  },
  {
    title: 'Status',
    render: (text) => {
      let color = '#d5d5d5';
      if (text === 'In progress') {
        color = 'rgba(246 ,140 ,49,1)';
      }
      if (text === 'Completed') {
        color = 'rgba(90 ,170 ,45,1)';
      }

      return (
        <div className="flex-row-center">
          <Tag color={color}>{text}</Tag>
        </div>
      );
    },
    dataIndex: 'status',
    align: 'right',
  },
  {
    title: 'Owner',
    dataIndex: 'owner',
    render: (text) => {
      if (text !== '') {
        return (
          <div
            className="flex-row-center m-auto"
            style={{
              width: '75%',
              margin: 'auto',
            }}
          >
            <Badge
              size="default"
              style={{
                color: 'blue',
                background: 'skyblue',
                margin: 'auto',
              }}
              count="R"
            />
            <p className="m-auto">{text}</p>
          </div>
        );
      }
      return null;
    },
  },
  {
    title: 'Budget',
    className: 'column-money',
    dataIndex: 'budget',
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
  },
  {
    title: 'Start Date',
    dataIndex: 'startDate',
  },
  {
    title: 'End Date',
    dataIndex: 'endDate',
  },
];
export const dashboardData = [
  {
    key: '1',
    name:
      'Planning Foundational steps to execute a Gene therapy program',
    status: null,
    owner: '',
    budget: null,
    duration: null,
    startDate: null,
    endDate: null,
  },
  {
    key: '2',
    name: 'Expert consultation to identify gaps and create a plan',
    status: 'Completed',
    owner: 'Ramya',
    budget: '$10,000',
    duration: '1 week',
    startDate: '12/05/2020',
    endDate: '12/05/2020',
  },

  {
    key: '3',
    name: 'Create a budget & fundraising plan',
    status: 'In progress',
    owner: 'Ramya',
    budget: '$10,000',
    duration: '1 week',
    startDate: '12/05/2020',
    endDate: '12/05/2020',
  },
  {
    key: '4',
    name: 'Create a approximate clinical trial plan',
    status: 'Not Started',
    owner: '',

    budget: '$10,000',
    duration: '1 week',
    startDate: '',
    endDate: '',
  },
  {
    key: '5',
    name: 'Identify disease models best used for gene therapy',
    status: 'Not Started',
    owner: '',
    budget: '$10,000',
    duration: '1 week',
    startDate: '',
    endDate: '',
  },
  {
    key: '6',
    name: 'Identify the target organs/cell types',
    status: 'Not Started',
    owner: '',
    budget: '$10,000',
    duration: '1 week',
    startDate: '',
    endDate: '',
  },
];

export const diseaseColumns = [
  {
    dataIndex: 'name',
    render: (value, row, index) => {
      if (index > 0) {
        return <p>{value}</p>;
      }

      return {
        children: <p>{value}</p>,
        // props: {
        //   colSpan: 7,
        // },
      };
    },
  },
  {
    dataIndex: 'status',
    render: (text) => (
      <div className="flex-row-center">
        <Tag color="#d5d5d5">{text}</Tag>
      </div>
    ),
    align: 'right',
  },
  {
    dataIndex: 'owner',
  },
  {
    className: 'column-money',
    dataIndex: 'budget',
  },
  {
    dataIndex: 'duration',
  },
  {
    dataIndex: 'startDate',
  },
  {
    dataIndex: 'endDate',
  },
];
export const diseaseData = [
  {
    key: '1',
    name:
      'Disease Models Understand what models are relevant to your disease',
    status: null,
    owner: null,
    budget: null,
    duration: null,
    startDate: null,
    endDate: null,
  },
  {
    key: '2',
    name: 'Identify Models Available',
    status: 'Not Started',
    owner: '',
    budget: '$10,000',
    duration: '4 weeks',
    startDate: '12/05/2020',
    endDate: '12/05/2020',
  },

  {
    key: '3',
    name: 'Construct knock-in-mice',
    status: 'Not Started',
    owner: '',
    budget: '$10,000',
    duration: '10 week',
    startDate: '12/05/2020',
    endDate: '12/05/2020',
  },
  {
    key: '4',
    name: 'Characterization of knock-in mice',
    status: 'Not Started',
    owner: '',

    budget: '$10,000',
    duration: '10 week',
    startDate: '',
    endDate: '',
  },
];
