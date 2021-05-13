import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Typography, Skeleton, Card, Space } from 'antd'
import AppLayout from 'components/AppLayout'
import { useQuery } from 'react-query'
import axios from 'axios'
import UserHeader from 'components/UserHeader'
import styled from 'styled-components'
import Link from 'next/link'
import PageTitle from 'components/PageTitle'
import EditProgram from 'components/EditProgram'
import { PlusCircleTwoTone } from '@ant-design/icons'

const { Title } = Typography
const ProgramCards = styled('div')`
  h4 {
    cursor: pointer;
  }
  padding: 24px;
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  .ant-card-body {
    height: 100%;
    .list-content {
      width: 100%;
    }
  }
  .add-program {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    .anticon {
      margin-bottom: 8px;
    }
  }
`
const Home = () => {
  const router = useRouter()
  const { data, isLoading } = useQuery<any>(
    'defaultWorkspace',
    () => axios.get('/workspaces/default'),
    { retry: false },
  )
  if (!isLoading && !data?.data?.workspace?.programs?.length)
    router.push('/workspace/intro')
  useEffect(() => {}, [data])

  return (
    <AppLayout
      title={<PageTitle title="Programs" />}
      selectedKey="programs"
    >
      <UserHeader
        getContent={(userInfo) => ({
          title: `Hello ${userInfo.name}, welcome back!`,
          description: `Here's info about your programs`,
        })}
      />
      {isLoading || !data?.data?.workspace?.programs?.length ? (
        <Skeleton />
      ) : (
        <ProgramCards>
          {data?.data?.workspace?.programs.map((program) => (
            <Card bordered style={{ width: 284 }}>
              <Space
                style={{
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Link
                  href={`/programs/${program.workspaceId}/${program.programId}`}
                >
                  <Title level={4}>{program.name}</Title>
                </Link>
                <EditProgram program={program} />
              </Space>
              <p>{program.description}</p>
            </Card>
          ))}
          <Card bordered style={{ width: 284 }}>
            <Link href="/workspace/intro">
              <div className="add-program">
                <PlusCircleTwoTone style={{ fontSize: 33 }} />
                <div>Add program</div>
              </div>
            </Link>
          </Card>
        </ProgramCards>
      )}
    </AppLayout>
  )
}

export default Home
