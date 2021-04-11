import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import axios from 'axios'
import {
  Avatar,
  Button,
  Dropdown,
  Menu,
  Popover,
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
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;

    font-family: Roboto;

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
      font-family: Roboto;
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
  const [areProjectsVisible, setAreProjectsVisible] = useState([true])
  const toggleTasks = () =>
    setAreProjectsVisible([!areProjectsVisible[0]])
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
              <tr
                data-row-key="1"
                className="ant-table-row ant-table-row-level-0"
              >
                <td
                  colSpan={6}
                  className="ant-table-cell project-name"
                >
                  <div
                    onClick={toggleTasks}
                    onKeyPress={toggleTasks}
                    role="button"
                    tabIndex={0}
                  >
                    <Space size={9}>
                      {areProjectsVisible[0] ? (
                        <CaretDownOutlined />
                      ) : (
                        <CaretUpOutlined />
                      )}
                      <span>Planning</span>
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
              {areProjectsVisible[0] ? (
                <>
                  <tr
                    data-row-key="2"
                    className="ant-table-row ant-table-row-level-0"
                  >
                    <td className="ant-table-cell">
                      Expert consultation to identify gaps and create
                      a plan
                    </td>
                    <td className="ant-table-cell">Complete</td>
                    <td className="ant-table-cell">
                      <Space size={4}>
                        <Avatar>R</Avatar>
                        <span>Ramya</span>
                      </Space>
                    </td>
                    <td className="ant-table-cell">$0</td>
                    <td className="ant-table-cell">12/05/2020</td>
                    <td className="ant-table-cell">12/23/2020</td>
                  </tr>
                  <tr
                    data-row-key="2"
                    className="ant-table-row ant-table-row-level-0"
                  >
                    <td className="ant-table-cell">
                      Expert consultation to identify gaps and create
                      a plan
                    </td>
                    <td className="ant-table-cell">
                      <Tag color="#389e0d">Complete</Tag>
                    </td>
                    <td className="ant-table-cell">
                      <Space size={4}>
                        <Avatar>R</Avatar>
                        <span>Ramya</span>
                      </Space>
                    </td>
                    <td className="ant-table-cell">$0</td>
                    <td className="ant-table-cell">12/05/2020</td>
                    <td className="ant-table-cell">12/23/2020</td>
                  </tr>
                  <tr
                    data-row-key="2"
                    className="ant-table-row ant-table-row-level-0"
                  >
                    <td className="ant-table-cell">
                      Expert consultation to identify gaps and create
                      a plan
                    </td>
                    <td className="ant-table-cell">Complete</td>
                    <td className="ant-table-cell">
                      <Space size={4}>
                        <Avatar>R</Avatar>
                        <span>Ramya</span>
                      </Space>
                    </td>
                    <td className="ant-table-cell">$0</td>
                    <td className="ant-table-cell">12/05/2020</td>
                    <td className="ant-table-cell">12/23/2020</td>
                  </tr>
                  <tr
                    data-row-key="2"
                    className="ant-table-row ant-table-row-level-0"
                  >
                    <td className="ant-table-cell">
                      Expert consultation to identify gaps and create
                      a plan
                    </td>
                    <td className="ant-table-cell">Complete</td>
                    <td className="ant-table-cell">
                      <Avatar>R</Avatar>
                      <span>Ramya</span>
                    </td>
                    <td className="ant-table-cell">$0</td>
                    <td className="ant-table-cell">12/05/2020</td>
                    <td className="ant-table-cell">12/23/2020</td>
                  </tr>
                </>
              ) : null}
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
  if (!id) return null
  const [workspaceId, programId] = String(id).split('-')
  const programQuery = useQuery(
    ['program', programId, workspaceId],
    () =>
      axios.get(`/workspaces/${workspaceId}/programs/${programId}`),
    { retry: 0 },
  )
  return (
    <AppLayout>
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
