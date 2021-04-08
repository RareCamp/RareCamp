import React from 'react'
import { AppLayout } from 'components/AppLayout'

import { Avatar, Button, Space, Spin, Typography } from 'antd'
import styled from 'styled-components'
import { useQuery } from 'react-query'
import { Auth } from 'aws-amplify'
import Link from 'next/link'

const { Title } = Typography

const QuestionnaireLayout = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const QuestionnaireIntro = styled('div')`
  flex-grow: 1;
  background-color: #ffffff;
  margin: 24px;
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    height: 270px;
  }
`
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
`

const questionnaireIntro = () => {
  const { data, isLoading: isUserLoading } = useQuery(
    'userInfo',
    () => Auth.currentAuthenticatedUser(),
  )
  return (
    <AppLayout>
      <QuestionnaireLayout>
        <PageHeader>
          <Avatar size={72}>
            {isUserLoading ? <Spin /> : data?.attributes.name[0]}
          </Avatar>
          <div>
            <h3>{`Welcome ${data?.attributes?.name}, we are glad you are here!`}</h3>
            <span>
              Our goal today is to get you one step ahead in your gene
              therapy treatment roadmap
            </span>
          </div>
        </PageHeader>
        <QuestionnaireIntro>
          <Space
            direction="vertical"
            align="center"
            style={{ width: 600, textAlign: 'center' }}
          >
            <img
              src="/illustration25.png"
              alt="OT feasibility illustration"
            />
            <Title level={3}>
              Let's determine your gene therapy eligibility
            </Title>
            <p>
              We'll ask a few questions to see if your disease might
              qualify for gene therapy. This short questionnaire will
              help our team of specialists determine eligibility.
            </p>
            <Button type="primary">
              <Link href="/workspace/questionnaire">
                Start eligibility questionnaire
              </Link>
            </Button>
          </Space>
        </QuestionnaireIntro>
      </QuestionnaireLayout>
    </AppLayout>
  )
}

export default questionnaireIntro
