import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AppLayout } from 'components/AppLayout'
import { useMutation, useQuery } from 'react-query'
import axios from 'axios'
import {
  Button,
  Card,
  Col,
  notification,
  Row,
  Skeleton,
  Space,
} from 'antd'
import SubHeader from 'components/SubHeader'
import PageHeading from 'components/PageHeading'
import EditProject from 'components/EditProject'
import styled from 'styled-components'
import EditTask from 'components/EditTask'
import { PoweroffOutlined, CommentOutlined } from '@ant-design/icons'
import {
  AssigneeAvatar,
  renderTaskStatus,
} from 'components/TasksTable/TaskRow'
import dayjs from 'dayjs'
import dynamic from 'next/dynamic'
import ContactServiceProviderModal from '../../components/ContactServiceProviderModal'

const ReactQuill: any = dynamic(() => import('react-quill'), {
  ssr: false,
})

const TaskDetailsRow = styled('div')`
  width: 100%;
  padding: 24px;
  .ant-avatar {
    background-color: #efdbff;
    color: #391085;
    .ant-avatar-string {
      font-size: 14px;
    }
  }
  .tasks {
    width: 100%;
    display: flex;
    justify-content: space-between;
    max-width: 750px;
    .task-data {
      height: 60px;
      justify-content: space-between;
      .task-meta {
        color: rgba(0, 0, 0, 0.45);
      }
    }
  }
  .quill {
    display: flex;
    flex-direction: column-reverse;
    border-top: 1px solid #ccc;
    //height: 350px;
    .ql-editor {
      height: 350px;
    }
  }
`
const ServiceProvider = styled(Space)`
  height: 60px;
  width: 100%;
  border-bottom: 1px solid #f0f0f0;
  justify-content: space-between;
  .sp-name {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.85);
  }
  .sp-type {
    font-size: 12px;
    line-height: 1.38;
    color: rgba(0, 0, 0, 0.45);
  }
`
export default function TaskDetails() {
  const router = useRouter()
  const { id, programId } = router.query
  let projectId
  let taskId
  if (id) [projectId, taskId] = id as string[]
  const taskQuery = useQuery(
    ['task', taskId],
    () => axios.get(`/projects/${projectId}/tasks/${taskId}`),
    { retry: 0, enabled: Boolean(projectId && taskId) },
  )
  const projectQuery = useQuery(
    ['project', projectId],
    () => axios.get(`/programs/${programId}/projects/${projectId}`),
    { retry: 0, enabled: Boolean(projectId && programId) },
  )
  const task = taskQuery?.data?.data?.task
  const project = projectQuery?.data?.data?.project

  const renderEditProject = () =>
    project && (
      <EditProject project={project} onDeleted={router.back} />
    )
  const projectTitle = (
    <PageHeading
      title={project?.name}
      description={project?.description}
      renderEdit={renderEditProject}
    />
  )
  const title = task?.name
  const subTitle =
    task?.description ||
    'This task is to gain an understanding of what knock-in mouse model is, the high level process to design and build and the cost/time it takes to develop a model. \n' +
      'Please work with an expert to determine if this is the right model for you.'
  const backLink = '/'
  const element = (
    <Space align="baseline">
      <h3>{title}</h3>
      <EditTask task={task} styles={{ position: 'inherit' }} />
    </Space>
  )
  const [notes, setNotes] = useState('')
  if (task?.notes && !notes) {
    setNotes(task?.notes)
  }

  const updateTaskMutation = useMutation(
    () =>
      axios.put(`/projects/${task.projectId}/tasks/${task.taskId}`, {
        task: { notes },
      }),
    {
      onSuccess: () => {
        notification.success({
          message: 'Task has been updated successfully',
          duration: 2,
        })
      },
      onError: (err: Error) => {
        notification.error({
          message: 'Error occur while updating task',
          description: String(err),
          duration: 2,
        })
      },
    },
  )

  return (
    <AppLayout
      title={projectTitle}
      selectedKey={`program_${programId}`}
    >
      {taskQuery.isLoading || projectQuery.isLoading ? (
        <Skeleton />
      ) : (
        <>
          <SubHeader
            title={element}
            subTitle={subTitle}
            backLink={backLink}
          />
          <TaskDetailsRow>
            <Row gutter={[24, 24]}>
              <Col span={16}>
                <Card>
                  <Space
                    size={38}
                    direction="vertical"
                    style={{ width: '100%' }}
                  >
                    <Space className="tasks">
                      <Space
                        className="task-data"
                        direction="vertical"
                      >
                        <span className="task-meta">Status</span>
                        <span>
                          {task?.status &&
                            renderTaskStatus(task.status)}
                        </span>
                      </Space>
                      <Space
                        direction="vertical"
                        className="task-data"
                      >
                        <span className="task-meta">Owner</span>
                        <AssigneeAvatar
                          size={24}
                          assignee={task?.assignees[0]}
                        />
                      </Space>
                      <Space
                        direction="vertical"
                        className="task-data"
                      >
                        <span className="task-meta">Budget</span>
                        <span>
                          {task?.budget?.currency +
                            task?.budget?.amount}
                        </span>
                      </Space>
                      <Space
                        direction="vertical"
                        className="task-data"
                      >
                        <span className="task-meta">Start Date</span>
                        <span>
                          {task?.estimatedStartDate
                            ? dayjs(task.estimatedStartDate).format(
                                'DD/MM/YYYY',
                              )
                            : ''}
                        </span>
                      </Space>
                      <Space
                        direction="vertical"
                        className="task-data"
                      >
                        <span className="task-meta">End Date</span>
                        <span>
                          {task?.estimatedEndDate
                            ? dayjs(task.estimatedEndDate).format(
                                'DD/MM/YYYY',
                              )
                            : ''}
                        </span>
                      </Space>
                    </Space>
                    <ReactQuill
                      theme="snow"
                      value={notes}
                      onChange={setNotes}
                      modules={{
                        toolbar: [
                          ['bold', 'italic', 'underline'],
                          [{ list: 'bullet' }, { list: 'ordered' }],
                          ['link'],
                        ],
                        clipboard: {
                          matchVisual: false,
                        },
                      }}
                    />
                    <Button
                      block
                      loading={updateTaskMutation.isLoading}
                      type="primary"
                      onClick={() => updateTaskMutation.mutate()}
                    >
                      Save
                    </Button>
                  </Space>
                </Card>
              </Col>
              <Col span={8}>
                {task?.guide ? (
                  <Card
                    title={task?.guide?.title}
                    bordered={false}
                    style={{ marginBottom: 24 }}
                    extra={
                      <a
                        href={task.guide?.detailsUrl}
                        target="_blank"
                      >
                        <img
                          width={16}
                          alt="external link"
                          src="https://image.flaticon.com/icons/svg/25/25284.svg"
                        />
                      </a>
                    }
                  >
                    <Space direction="vertical">
                      <img
                        width="100%"
                        src={task.guide?.imageUrl}
                        alt={task.guide?.title}
                      />
                      <div>{task.guide?.about}</div>
                      <a
                        href={task.guide?.detailsUrl as string}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read More
                      </a>
                    </Space>
                  </Card>
                ) : null}
                {task?.serviceProviders?.length ? (
                  <Card
                    title="Connect with Service Providers"
                    bordered={false}
                  >
                    {task.serviceProviders?.map((serviceProvider) => {
                      return (
                        <ServiceProvider>
                          <Space size={16}>
                            <img
                              width="60px"
                              src={serviceProvider.logoURL}
                              alt={`${serviceProvider.name} logo`}
                            />
                            <div>
                              <div className="sp-name">
                                {serviceProvider.name}
                              </div>
                              <div className="sp-type">
                                {serviceProvider.type}
                              </div>
                            </div>
                          </Space>
                          <Button
                            type="link"
                            icon={<CommentOutlined />}
                            style={{
                              border: '1px solid',
                              borderRadius: 0,
                            }}
                          >
                            Reach out
                          </Button>
                          {/* <ContactServiceProviderModal */}
                          {/*  visible */}
                          {/*  setVisible={() => {}} */}
                          {/* /> */}
                        </ServiceProvider>
                      )
                    })}
                  </Card>
                ) : null}
              </Col>
            </Row>
          </TaskDetailsRow>
        </>
      )}
    </AppLayout>
  )
}
