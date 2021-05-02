import React from 'react'
import { AppLayout } from 'components/AppLayout'

import { Button, Space, Typography } from 'antd'
import styled from 'styled-components'
import Link from 'next/link'
import UserHeader from 'components/UserHeader'
import PageTitle from 'components/PageTitle'

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

const questionnaireIntro = () => {
  return (
    <AppLayout title="" selectedKey="programs">
      <QuestionnaireLayout>
        <UserHeader />
        <QuestionnaireIntro>
          <Space
            direction="vertical"
            align="center"
            style={{ width: 600, textAlign: 'center' }}
          >
            <img
              src="/eligibility_1.png"
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
