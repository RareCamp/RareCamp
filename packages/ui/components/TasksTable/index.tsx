import { Form, Input, notification } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { useMutation, useQueryClient } from 'react-query'
import axios from 'axios'
import ProjectDetails from 'components/TasksTable/Projectdetails'
import { sortByCreated } from 'helpers/utils'

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
    tr.add-project-row {
      td {
        padding: 0 !important;
        .ant-form-item {
          margin: 0;
          input {
            height: 60px;
            padding-left: 60px;
            border: none;
            font-size: 20px;
            font-weight: 500;
            line-height: 1.4;
            color: rgba(0, 0, 0, 0.85);
            &::placeholder {
              font-size: 20px;
              font-weight: 500;
              line-height: 1.4;
              color: rgba(0, 0, 0, 0.45);
            }
          }
        }
      }
    }
    tr.add-task-row {
      td {
        padding: 0 !important;
        .ant-form-item {
          margin: 0;
          input {
            height: 60px;
            padding-left: 60px;
            border: none;
            &::placeholder {
              font-size: 14px;
              line-height: 1.57;
              color: rgba(0, 0, 0, 0.25);
            }
          }
        }
      }
    }
    tr > td {
      padding: 12px;
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
        padding-left: 85px;

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
        color: #391085;
      }
    }
  }
`

export default function OTTable({
  program,
  isAddProjectVisible,
  hideAddProjectBtn,
}) {
  const queryClient = useQueryClient()
  const [projectForm] = Form.useForm()
  const createProjectMutation = useMutation(
    (project) =>
      axios.post(`/programs/${program.programId}/projects`, {
        project,
      }),
    {
      async onSuccess() {
        notification.success({
          duration: 2,
          message: 'Project has been created successfully',
        })
        await queryClient.invalidateQueries([
          'program',
          program.programId,
        ])
        hideAddProjectBtn()
        projectForm.resetFields()
      },
      onError(err: Error) {
        notification.error({
          duration: 2,
          message: 'Error while creating project',
          description: String(err),
        })
      },
    },
  )

  function handleKeyUpOnAddProject(event) {
    // Enter
    if (event.keyCode === 13) {
      projectForm.validateFields().then((values) => {
        createProjectMutation.mutate({
          ...values,
          programId: program.programId,
        })
      })
    }
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
              {program?.projects
                ?.sort(sortByCreated)
                .map((project) => (
                  <ProjectDetails
                    key={JSON.stringify(project)}
                    project={project}
                  />
                ))}
              {isAddProjectVisible ? (
                <tr className="ant-table-row add-project-row">
                  <td colSpan={6} className="ant-table-cell">
                    <Form form={projectForm}>
                      <Form.Item
                        name="name"
                        required={false}
                        rules={[{ required: true, message: '' }]}
                      >
                        <Input
                          autoFocus
                          prefix={
                            createProjectMutation.isLoading ? (
                              <LoadingOutlined
                                style={{ fontSize: 20 }}
                              />
                            ) : null
                          }
                          placeholder="Enter Project Name"
                          onKeyUp={handleKeyUpOnAddProject}
                        />
                      </Form.Item>
                    </Form>
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </CustomTable>
  )
}
