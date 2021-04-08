import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Layout, Table, Badge, Skeleton } from 'antd'
import { MainSection } from 'components/Pages/Program'
import Navbar from 'components/AppLayout/Navbar'
import { AppLayout } from 'components/AppLayout'
import { TASK_TABLE_HEADINGS } from 'constants/tableHeaders'
import styles from 'styles/program.module.css'
import { useQuery, useQueryClient } from 'react-query'
import axios from 'axios'

export const TASK_SUB_TABLE_HEADINGS = [
  {
    title: 'TaskName',
    dataIndex: 'taskname',
    key: 'taskname',
    width: '40%',
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
    },
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
  },
]
const USER_NAME = 'Ramya'
const Home = () => {
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<any>('defaultWorkspace')
  const router = useRouter()
  useEffect(() => {
    if (!data?.data?.workspace?.programs?.length)
      router.push('/workspace/intro')
  }, [data])

  const [isEditProgramModalOpen, setEditProgramModalOpen] = useState(
    false,
  )
  const [
    isAccountSettingModalOpen,
    setAccountSettingModalOpen,
  ] = useState(false)

  useEffect(() => {
    if (isEditProgramModalOpen || isAccountSettingModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isAccountSettingModalOpen, isEditProgramModalOpen])

  function expandedRowRender() {
    return (
      <Table
        columns={TASK_SUB_TABLE_HEADINGS}
        pagination={false}
        bordered
        dataSource={[
          {
            taskname:
              'Consult with an expert to identify gaps and create a plan',
            status: 'COMPLETE',
            owner: 'Rachel',
            budget: '0',
            start_date: '12/5/2021',
            end_date: '12/23/2021',
          },
        ]}
        components={{
          header: {
            row: (props) => null,
          },
        }}
      />
    )
  }
  return (
    <AppLayout>
      {!data?.data?.workspace?.programs?.length ? (
        <Skeleton />
      ) : (
        <>
          <h3>Workspace</h3>
          <pre>{JSON.stringify(data?.data, null, 2)}</pre>
        </>
      )}
    </AppLayout>
  )
}

export default Home
