import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  notification,
  Row,
  Space,
} from 'antd'
import { useMutation } from 'react-query'
import axios from 'axios'

export default function ContactServiceProviderModal({
  visible,
  hide,
  serviceProvider,
  task,
}) {
  const contactMutation = useMutation(
    (message) =>
      axios.post(
        `/projects/${task.projectId}/tasks/${task.taskId}/contactUs`,
        { message, task, spName: serviceProvider.name },
      ),
    {
      onSuccess: async () => {
        notification.success({
          duration: 2,
          message: `Message has been sent successfully`,
        })
      },
      onError: (err: Error) =>
        notification.error({
          duration: 2,
          message: `Message was not sent`,
          description: err.message,
        }),
    },
  )

  const onFinish = ({ message }) => contactMutation.mutate(message)

  return (
    <Modal
      centered
      visible={visible}
      footer={null}
      onOk={hide}
      onCancel={hide}
      width={850}
    >
      <Row gutter={[60, 60]}>
        <Col span={10}>
          <Space
            size={8}
            style={{ textAlign: 'center' }}
            direction="vertical"
          >
            <img
              width="337px"
              src="/OPenGT-contact-service-provider.png"
              alt="OPenGT contact service provider "
            />
            <h3 style={{ color: '#3e3465' }}>
              We are here to help you move along
            </h3>
            <p>
              We will meet with you to understand where you are and
              help you move along to the next step
            </p>
          </Space>
        </Col>
        <Col span={14}>
          <Space
            direction="vertical"
            style={{ width: '100%', height: '100%' }}
          >
            <h1>
              Send Message to
              {` ${serviceProvider.name}`}
            </h1>
            <b>Briefly describe what you want to discuss</b>
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                name="message"
                required={false}
                rules={[
                  {
                    required: true,
                    message: 'Please input task description!',
                  },
                ]}
              >
                <Input.TextArea
                  style={{ height: 238 }}
                  rows={8}
                  required={false}
                />
              </Form.Item>
              <Button
                loading={contactMutation.isLoading}
                block
                htmlType="submit"
                type="primary"
              >
                Send
              </Button>
            </Form>
          </Space>
        </Col>
      </Row>
    </Modal>
  )
}
