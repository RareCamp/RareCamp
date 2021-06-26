import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Card, Col, Row, Skeleton, Space } from 'antd'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import { useEditTaskMutation } from 'helpers/API/mutation'
import AppLayout from 'components/AppLayout'
import SubHeader from 'components/SubHeader'
import PageHeading from 'components/PageHeading'
import EditProject from 'components/EditProject'
import EditTask from 'components/EditTask'
import { AssigneeAvatar } from 'components/TasksTable/TaskRow'
import TaskStatus from 'components/TaskStatus'
import TaskGuideCard from 'components/TaskGuideCard'
import ServiceProviderCard from 'components/ServiceProviderCard'
import TaskDateCell from 'components/TasksTable/TaskDateCell'
import TaskBudgetCell from 'components/TasksTable/TaskBudgetCell'

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
      position: relative;
      .task-meta {
        color: rgba(0, 0, 0, 0.45);
      }
    }
  }
  .quill {
    display: flex;
    flex-direction: column-reverse;
    border-top: 1px solid #ccc;
    .ql-editor {
      height: 350px;
    }
  }
`
let timeoutId

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
  const subTitle = task?.description
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

  const updateTaskMutation = useEditTaskMutation({
    programId,
    taskId: task?.taskId,
    projectId: task?.projectId,
  })
  const editTaskMutation = () => updateTaskMutation.mutate({ notes })
  return (
    <AppLayout
      title={projectTitle}
      selectedKey={`program_${programId}`}
    >
      {taskQuery.isLoading || projectQuery.isLoading ? (
        <Skeleton />
      ) : (
        <>
          <SubHeader title={element} subTitle={subTitle} />
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
                          {task?.status && (
                            <TaskStatus
                              task={task}
                              programId={programId}
                            />
                          )}
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
                        <TaskBudgetCell
                          task={task}
                          programId={programId}
                        />
                      </Space>
                      <Space
                        direction="vertical"
                        className="task-data"
                      >
                        <span className="task-meta">Start Date</span>
                        <TaskDateCell
                          task={task}
                          programId={programId}
                          dateKey="estimatedStartDate"
                        />
                      </Space>
                      <Space
                        direction="vertical"
                        className="task-data"
                      >
                        <span className="task-meta">End Date</span>
                        <TaskDateCell
                          task={task}
                          programId={programId}
                          dateKey="estimatedEndDate"
                        />
                      </Space>
                    </Space>
                    <div>
                      <ReactQuill
                        theme="snow"
                        value={notes}
                        onPaste={editTaskMutation}
                        onChange={(value) => {
                          if (value !== notes) {
                            if (timeoutId) clearTimeout(timeoutId)
                            timeoutId = setTimeout(
                              editTaskMutation,
                              1000,
                            )
                            setNotes(value)
                          }
                        }}
                        modules={{
                          toolbar: [
                            [
                              'bold',
                              'italic',
                              'underline',
                              { list: 'bullet' },
                              { list: 'ordered' },
                              'link',
                            ],
                          ],
                          clipboard: {
                            matchVisual: false,
                          },
                        }}
                      />
                      {updateTaskMutation.isLoading ? (
                        <span
                          style={{
                            position: 'absolute',
                            right: 35,
                            bottom: 35,
                            fontStyle: 'italic',
                          }}
                        >
                          saving ...
                        </span>
                      ) : null}
                    </div>
                  </Space>
                </Card>
              </Col>
              <Col span={8}>
                {task?.guide && <TaskGuideCard guide={task?.guide} />}
                {project?.serviceProviders && (
                  <ServiceProviderCard
                    task={task}
                    project={project}
                  />
                )}
              </Col>
            </Row>
          </TaskDetailsRow>
        </>
      )}
    </AppLayout>
  )
}
