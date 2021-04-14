import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import axios from 'axios'
import {
  Avatar,
  Button,
  Dropdown,
  Menu,
  Result,
  Skeleton,
  Space,
  Tag,
  Tooltip,
} from 'antd'
import Link from 'next/link'
import { AppLayout } from 'components/AppLayout'
import styled from 'styled-components'
import {
  CaretDownOutlined,
  PlusOutlined,
  InfoCircleOutlined,
  CaretUpOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
import dayjs from 'dayjs'

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
const CustomTable = styled('div')`
  .ant-table-container {
    .project-header:focus {
      outline: none;
    }
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;

    font-family: Roboto, sans-serif;

    .ant-table-thead > tr > th {
      background-color: white;
      padding: 14px;

      &:first-child {
        padding-left: 32px;
        width: 580px;
      }
    }

    tr > td {
      flex-grow: 0;
      font-family: Roboto, sans-serif;
      line-height: 1.57;

      &.project-name {
        font-size: 20px;
        font-weight: 500;
        line-height: 1.4;
        cursor: pointer;

        .anticon {
          font-size: 14px;
        }
      }

      &:first-child {
        padding-left: 64px;

        &.project-name {
          padding-left: 32px;
        }
      }

      .ant-tag {
        border-radius: 2px;
        font-size: 14px;
      }

      .ant-avatar {
        background-color: #efdbff;
        color: rgba(23, 18, 18, 0.85);
      }
    }
  }
`
function OTTable({ program }) {
  const [areProjectsVisible, setAreProjectsVisible] = useState([
    true,
    true,
  ])
  const toggleTasks = (index) => {
    const result = [...areProjectsVisible]
    result[index] = !result[index]
    setAreProjectsVisible(result)
  }
  return (
    <CustomTable className="ant-table ant-table-bordered">
      <div className="ant-table-container">
        <div className="ant-table-content">
          <table style={{ tableLayout: 'auto' }}>
            <colgroup />
            <thead className="ant-table-thead">
              <tr>
                <th className="ant-table-cell">Task Name</th>
                <th className="ant-table-cell">Status</th>
                <th className="ant-table-cell">Owner</th>
                <th className="ant-table-cell">Budget</th>
                <th className="ant-table-cell">Start Date</th>
                <th className="ant-table-cell">End Date</th>
              </tr>
            </thead>
            <tbody className="ant-table-tbody">
              {program.projects.map((project, index) => {
                return (
                  <>
                    <tr
                      key={project.projectId}
                      data-row-key={index}
                      className={`ant-table-row ant-table-row-level-${index}`}
                    >
                      <td
                        colSpan={6}
                        className="ant-table-cell project-name"
                      >
                        <div
                          className="project-header"
                          onClick={() => toggleTasks(index)}
                          onKeyPress={() => toggleTasks(index)}
                          role="button"
                          tabIndex={index}
                        >
                          <Space size={9}>
                            {areProjectsVisible[index] ? (
                              <CaretDownOutlined />
                            ) : (
                              <CaretUpOutlined />
                            )}
                            <span>{project.name}</span>
                            <Tooltip
                              placement="bottom"
                              title="lorem upsum dolar"
                            >
                              <InfoCircleOutlined />
                            </Tooltip>
                          </Space>
                        </div>
                      </td>
                    </tr>
                    {areProjectsVisible[index] ? (
                      <>
                        {project.tasks.map((task) => {
                          return (
                            <>
                              <tr
                                data-row-key="2"
                                className="ant-table-row ant-table-row-level-0"
                              >
                                <td className="ant-table-cell">
                                  {task.name}
                                </td>
                                <td className="ant-table-cell">
                                  <Tag>{task.status}</Tag>
                                </td>
                                <td className="ant-table-cell">
                                  <Space>
                                    {task.assignees.map(
                                      (assignee) => (
                                        <Space size={4}>
                                          <Avatar>
                                            {assignee.name?.[0]}
                                          </Avatar>
                                          <span>{assignee.name}</span>
                                        </Space>
                                      ),
                                    )}
                                  </Space>
                                </td>
                                <td className="ant-table-cell">
                                  {task.budget?.currency}
                                  {task.budget?.amount}
                                </td>
                                <td className="ant-table-cell">
                                  {dayjs(
                                    task.estimatedStartDate,
                                  ).format('DD/MM/YYYY')}
                                </td>
                                <td className="ant-table-cell">
                                  {dayjs(
                                    task.estimatedEndDate,
                                  ).format('DD/MM/YYYY')}
                                </td>
                              </tr>
                            </>
                          )
                        })}
                      </>
                    ) : null}
                  </>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </CustomTable>
  )
}

export default function ProgramDetails() {
  const router = useRouter()
  const { id } = router.query
  let workspaceId
  let programId
  if (id) [workspaceId, programId] = id as string[]
  const programQuery = useQuery(
    ['program', workspaceId, programId],
    () =>
      axios.get(`/workspaces/${workspaceId}/programs/${programId}`),
    { retry: 0, enabled: Boolean(workspaceId && programId) },
  )
  return (
    <AppLayout title={programQuery?.data?.data?.program?.name}>
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
              <Dropdown.Button
                icon={<CaretDownOutlined />}
                overlay={<Menu />}
              >
                <>
                  <PlusOutlined />
                  <span>Add Task</span>
                </>
              </Dropdown.Button>
              <OTTable program={programQuery?.data?.data?.program} />
            </MainContent>
          )}
        </ProgramDetailsLayout>
      )}
    </AppLayout>
  )
}
