import { Button, Space } from 'antd'
import React, { useState } from 'react'
import { CommentOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import ContactServiceProviderModal from 'components/ContactServiceProviderModal'

const Container = styled(Space)`
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

export default function ServiceProvider({ serviceProvider, task }) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <Container>
      <Space size={16}>
        <img
          width="60px"
          src={serviceProvider.logoURL}
          alt={`${serviceProvider.name} logo`}
        />
        <div>
          <div className="sp-name">{serviceProvider.name}</div>
          <div className="sp-type">{serviceProvider.type}</div>
        </div>
      </Space>
      <Button
        type="link"
        onClick={() => setIsModalVisible(true)}
        icon={<CommentOutlined />}
        style={{
          border: '1px solid',
          borderRadius: 0,
        }}
      >
        Reach out
      </Button>
      <ContactServiceProviderModal
        task={task}
        serviceProvider={serviceProvider}
        visible={isModalVisible}
        hide={() => setIsModalVisible(false)}
      />
    </Container>
  )
}
