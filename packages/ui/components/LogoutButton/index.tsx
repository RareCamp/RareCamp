import { Button, notification } from 'antd'
import { useRouter } from 'next/router'
import { Auth } from 'aws-amplify'
import { useMutation } from 'react-query'

export default function Logout() {
  const router = useRouter()
  const mutation = useMutation(() => Auth.signOut({ global: true }), {
    onSuccess: router.reload,
    onError: (err: Error) =>
      notification.error({
        message: 'Can not logout',
        description: err.message,
        placement: 'topRight',
        duration: 1.5,
      }),
  })
  return (
    <Button
      loading={mutation.isLoading}
      type="text"
      onClick={() => mutation.mutate()}
    >
      Logout
    </Button>
  )
}
