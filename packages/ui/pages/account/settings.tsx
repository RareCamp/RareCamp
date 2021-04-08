import { AppLayout } from 'components/AppLayout'
import { Result } from 'antd'
import Link from 'next/link'

export default function Settings() {
  return (
    <AppLayout>
      <Result
        status="404"
        title="Work in progress"
        subTitle="Sorry, Page is not completed."
        extra={<Link href="/">Back Home</Link>}
      />
    </AppLayout>
  )
}
