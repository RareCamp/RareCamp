import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Button, Result, Skeleton, Space } from 'antd'
import Link from 'next/link'
import AppLayout from 'components/AppLayout'
import styled from 'styled-components'
import { PlusOutlined } from '@ant-design/icons'
import OTTable from 'components/TasksTable'
import { useState } from 'react'
import EditProgram from 'components/EditProgram'
import PageHeading from 'components/PageHeading'

function BackToHome() {
  return (
    <Link href="/">
      <Button type="link" href="/">
        Back Home
      </Button>
    </Link>
  )
}

const ProgramDetailsLayout = styled('div')`
  padding: 24px;
`

const MainContent = styled(Space)`
  width: 100%;
`

export default function ProgramDetails() {
  const router = useRouter()
  const { id } = router.query
  let workspaceId
  let programId
  if (id) [workspaceId, programId] = id as string[]
  const programQuery = useQuery(
    ['program', programId],
    () =>
      axios.get(`/workspaces/${workspaceId}/programs/${programId}`),
    { retry: 0, enabled: Boolean(workspaceId && programId) },
  )
  const [isAddProjectVisible, setIsAddProjectVisible] =
    useState(false)
  const hideAddProjectBtn = () => setIsAddProjectVisible(false)
  const program = programQuery?.data?.data?.program
  const ProgramTitle = (
    <PageHeading
      title={program?.name}
      description={program?.description}
      renderEdit={() => program && <EditProgram program={program} />}
    />
  )
  return (
    <AppLayout
      title={ProgramTitle}
      selectedKey={`program_${program?.programId}`}
    >
      {programQuery.isLoading ? (
        <Skeleton />
      ) : (
        <ProgramDetailsLayout>
          {programQuery.isError ? (
            <Result
              status="500"
              title="Program can not be found"
              subTitle="Sorry, something went wrong."
              extra={<BackToHome />}
            />
          ) : (
            <MainContent direction="vertical" size={16}>
              <Button
                onClick={() => setIsAddProjectVisible(true)}
                icon={<PlusOutlined />}
              >
                Add Project
              </Button>
              <OTTable
                program={program}
                isAddProjectVisible={isAddProjectVisible}
                hideAddProjectBtn={hideAddProjectBtn}
              />
            </MainContent>
          )}
        </ProgramDetailsLayout>
      )}
    </AppLayout>
  )
}
