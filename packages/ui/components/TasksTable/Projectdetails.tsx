import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { Form, Input, notification, Space, Tooltip } from 'antd'
import axios from 'axios'
import Error from 'next/error'
import {
  CaretDownOutlined,
  CaretUpOutlined,
  InfoCircleOutlined,
  LoadingOutlined,
} from '@ant-design/icons'
import EditProject from 'components/EditProject'
import TaskRow from './TaskRow'

function addTaskToProject(program, projectId, task) {
  for (let i = 0; i < program.projects.length; i++) {
    const project = program.projects[i]
    if (project.projectId === projectId) project.tasks.push(task)
  }
}
export default function ProjectDetails({ project }) {
  const [isProjectVisible, setIsProjectVisible] = useState(true)
  const queryClient = useQueryClient()
  const [taskForm] = Form.useForm()
  const createTaskMutation = useMutation(
    (task: any) =>
      axios.post(`/projects/${task.projectId}/tasks`, {
        task,
      }),
    {
      async onSuccess(resp) {
        notification.success({
          duration: 2,
          message: 'Task has been created successfully',
        })
        const { data } = await queryClient.getQueryData<any>([
          'program',
          project.programId,
        ])
        addTaskToProject(
          data.program,
          project.projectId,
          resp.data.task,
        )
        queryClient.setQueryData(['program', project.programId], {
          data,
        })
        taskForm.resetFields()
      },
      onError(err: Error) {
        notification.error({
          duration: 2,
          message: 'Error while creating Task',
          description: String(err),
        })
      },
    },
  )

  function submitTask(evt) {
    if (evt.keyCode === 13) {
      taskForm.validateFields().then((values) => {
        createTaskMutation.mutate({
          ...values,
          projectId: project.projectId,
        })
      })
    }
  }

  const toggleTasksVisibility = () =>
    setIsProjectVisible(!isProjectVisible)
  return (
    <>
      <tr key={project.projectId} className="ant-table-row">
        <td colSpan={6} className="ant-table-cell project-name">
          <div className="project-header">
            <Space size={9}>
              <EditProject project={project} />
              <div
                onClick={toggleTasksVisibility}
                onKeyPress={toggleTasksVisibility}
                role="button"
                tabIndex={project.projectId}
              >
                <Space>
                  {isProjectVisible ? (
                    <CaretDownOutlined />
                  ) : (
                    <CaretUpOutlined />
                  )}
                  <span>{project.name}</span>
                </Space>
              </div>
              <Tooltip placement="bottom" title={project.description}>
                <InfoCircleOutlined />
              </Tooltip>
            </Space>
          </div>
        </td>
      </tr>
      {isProjectVisible ? (
        <>
          {project.tasks.map((task) => (
            <TaskRow
              key={task.taskId}
              task={task}
              programId={project.programId}
            />
          ))}
        </>
      ) : null}
      <tr className="ant-table-row add-task-row">
        <td colSpan={6} className="ant-table-cell">
          <Form form={taskForm}>
            <Form.Item
              name="name"
              required={false}
              rules={[
                {
                  required: true,
                  message: '',
                },
              ]}
            >
              <Input
                prefix={
                  createTaskMutation.isLoading ? (
                    <LoadingOutlined style={{ fontSize: 20 }} />
                  ) : null
                }
                placeholder="+ Add Task"
                onKeyUp={submitTask}
              />
            </Form.Item>
          </Form>
        </td>
      </tr>
    </>
  )
}
