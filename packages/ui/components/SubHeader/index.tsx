import { ArrowLeftOutlined } from '@ant-design/icons'
import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { Button } from 'antd'

const PageHeader = styled('div')`
  padding: 24px;
  background-color: #ffffff;
  display: flex;
  align-items: baseline;
  border: 1px solid #eee;

  .anticon.anticon-arrow-left {
    margin-right: 17.5px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.85);
  }
  .description {
    max-width: 1030px;
    line-height: 1.75;
  }
`

export default function SubHeader({ title, subTitle }) {
  const router = useRouter()
  return (
    <PageHeader>
      <Button type="link" onClick={() => router.back()}>
        <ArrowLeftOutlined />
      </Button>
      <div>
        {title}
        <div className="description">{subTitle}</div>
      </div>
    </PageHeader>
  )
}
