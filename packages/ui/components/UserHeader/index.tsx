import { useQuery } from 'react-query'
import { Auth } from 'aws-amplify'
import { Avatar, Spin } from 'antd'
import React from 'react'
import styled from 'styled-components'

const PageHeader = styled('div')`
  padding: 24px 16px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  border: 1px solid #eee;

  .ant-avatar {
    background-color: #efdbff;
    color: #391085;
    margin-right: 30px;
  }
  .ant-avatar-string {
    font-size: 32px;
    color: #818181;
  }
`

export default function UserHeader({
  getContent,
}: {
  getContent?: any
}) {
  const { data, isLoading } = useQuery('userInfo', () =>
    Auth.currentAuthenticatedUser(),
  )
  return (
    <PageHeader>
      <Avatar size={72}>
        {isLoading ? <Spin /> : data?.attributes.name[0]}
      </Avatar>
      <div>
        <h3>
          {getContent
            ? getContent(data?.attributes).title
            : `Welcome ${data?.attributes?.name}, we are glad you are here!`}
        </h3>
        <span>
          {getContent
            ? getContent(data?.attributes).description
            : `Our goal today is to get you one step ahead in your gene
          therapy treatment roadmap`}
        </span>
      </div>
    </PageHeader>
  )
}
