import AppLayout from 'components/AppLayout'
import { Result } from 'antd'
import Link from 'next/link'
import React from 'react'
import PageTitle from 'components/PageTitle'

export default function Settings() {
  return (
    <AppLayout
      title={<PageTitle title="User Account Settings" />}
      selectedKey="settings"
    >
      <Result
        status="404"
        title="Work in progress"
        subTitle="Sorry, Page is not completed."
        extra={<Link href="/">Back Home</Link>}
      />
    </AppLayout>
  )
}
