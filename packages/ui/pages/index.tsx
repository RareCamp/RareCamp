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
import UserHeader from '../components/UserHeader'

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
  const router = useRouter()
  const { data, isLoading } = useQuery<any>(
    'defaultWorkspace',
    () => axios.get('/workspaces/default'),
    { retry: false },
  )
  useEffect(() => {
    if (!isLoading && !data?.data?.workspace?.programs?.length)
      router.push('/workspace/intro')
  }, [data])

  return (
    <AppLayout>
      <UserHeader
        getContent={(userInfo) => ({
          title: `Hello ${userInfo.name}, welcome back!`,
          description: `Here's info about your programs`,
        })}
      />
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
