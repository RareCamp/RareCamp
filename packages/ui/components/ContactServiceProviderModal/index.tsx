import { Button, Col, Form, Input, Modal, Row, Space } from 'antd'

export default function ContactServiceProviderModal({
  visible,
  hide,
}) {
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
            <h1>Send Message to Charles River</h1>
            <b>Briefly describe what you want to discuss</b>
            <Form layout="vertical">
              <Form.Item
                name="description"
                required={false}
                rules={[
                  {
                    required: true,
                    message: 'Please input your message',
                  },
                ]}
              >
                <Input.TextArea
                  style={{ height: 238 }}
                  rows={8}
                  required={false}
                />
              </Form.Item>
              <Button block htmlType="submit" type="primary">
                Send
              </Button>
            </Form>
          </Space>
        </Col>
      </Row>
    </Modal>
  )
}
