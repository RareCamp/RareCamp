import { Card, Space } from 'antd'
import React from 'react'

export default function TaskGuideCard({ guide }) {
  const guideLink = (
    <>
      <a
        href={guide?.detailsUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          width={16}
          alt="external link"
          src="https://image.flaticon.com/icons/svg/25/25284.svg"
        />
      </a>
    </>
  )
  return (
    <>
      <Card
        title={guide?.title}
        bordered={false}
        style={{ marginBottom: 24 }}
        extra={guideLink}
      >
        <Space direction="vertical">
          <img
            width="100%"
            src={guide?.imageUrl}
            alt={guide?.title || 'Guide title'}
          />
          <div>{guide?.about}</div>
          <a
            href={guide?.detailsUrl as string}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </Space>
      </Card>
    </>
  )
}
