import React, { useState, useEffect } from 'react';
import { Table, Collapse, Badge } from 'antd';
import { MainSection, TaskSection } from 'components/Pages/Program';
import Navbar from 'components/AppLayout/Navbar';
import { AppLayout } from 'components/AppLayout';
import records from 'fixtures/dashboard.json';
import { TASK_TABLE_HEADINGS } from 'constants/tableHeaders';
import styles from 'styles/program.module.css';
import { Button } from 'components/Button';


export const TASK_SUB_TABLE_HEADINGS = [
  {
    title: 'TaskName',
    dataIndex: 'taskname',
    key: 'taskname',
    width: '40%'
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (text, value, index) => {
      if (text === 'COMPLETE') {
        return (
          <Badge
            count={text}
            style={{ backgroundColor: '#52c41a', borderRadius: 0 }}
          />
        )
      }
      return text
    }
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


const USER_NAME = 'Ramya';
const Home = () => {
  const [isEditProgramModalOpen, setEditProgramModalOpen] = useState(
    false,
  );
  const [
    isAccountSettingModalOpen,
    setAccountSettingModalOpen,
  ] = useState(false);

  useEffect(() => {
    if (isEditProgramModalOpen || isAccountSettingModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isAccountSettingModalOpen, isEditProgramModalOpen]);

  function expandedRowRender() {
    return (
      <Table 
        columns={TASK_SUB_TABLE_HEADINGS}
        pagination={false}
        bordered
        dataSource={[
          {
            taskname: 'Consult with an expert to identify gaps and create a plan',
            status: 'COMPLETE',
            owner: 'Rachel',
            budget: '0',
            start_date: '12/5/2021',
            end_date: '12/23/2021',
          }
        ]}
        components={{
          header: {
            row: (props) => null
          }
        }}
      />
    )
  }

  return (
    <AppLayout>
      <Navbar
        setEditProgramModalOpen={setEditProgramModalOpen}
        setAccountSettingModalOpen={setAccountSettingModalOpen}
        username={USER_NAME}
      />
      <MainSection
        setEditProgramModalOpen={setEditProgramModalOpen}
        isEditProgramModalOpen={isEditProgramModalOpen}
        setAccountSettingModalOpen={setAccountSettingModalOpen}
        isAccountSettingModalOpen={isAccountSettingModalOpen}
      >
        {/* <table className="table-fixed">
          <thead>
            <tr className={`${styles['table-header']}`}>
              {HOME_TABLE_HEADINGS.map((heading) => (
                <th key={heading}>{heading}</th>
              ))}
            </tr>
          </thead>
          {records.map((record) => (
            <TaskSection record={record} key={record.title} />
          ))}

          <tr>
            <td colSpan={6}>
              <Button
                onClick={() => {}}
                icon={<span>+</span>}
                label="Add Project"
                color="tertiary"
                size="custom"
                className="py-4  px-4 text-xl border border-gray-300 w-full flex flex-start font-semibold focus:outline-none text-gray-300 hover:text-gray-400 hover:border-blue-400"
              />
            </td>
          </tr>
        </table> */}
      
       
            <Table 
              dataSource={[
                {
                  taskname: 'Initial Planning',
                  status: '',
                  owner: '',
                  budget: '',
                  start_date: '',
                  end_date: '',
                  key: "1"
                },
                {
                  taskname: 'ADD_TASK',
                  status: '',
                  owner: '',
                  budget: '',
                  start_date: '',
                  end_date: '',
                  key: "2"
                },
              ]}
              expandable={{ expandedRowRender }}
              columns={TASK_TABLE_HEADINGS}
            />
      </MainSection>
    </AppLayout>
  );
};

export default Home;
