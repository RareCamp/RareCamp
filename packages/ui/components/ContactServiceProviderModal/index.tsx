import { Col, Modal, Row, Space } from 'antd'

export default function ContactServiceProviderModal({
  visible,
  setVisible,
}) {
  return (
    <Modal
      centered
      visible={visible}
      footer={null}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
      width={1000}
    >
      <Row>
        <Col span={12}>
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
            <h3>We are here to help you move along</h3>
            <p>
              We will meet with you to understand where you are and
              help you move along to the next step
            </p>
          </Space>
        </Col>
        <Col span={12} />
      </Row>
    </Modal>
  )
}
