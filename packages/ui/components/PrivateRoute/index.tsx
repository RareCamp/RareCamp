import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Auth } from 'aws-amplify'
import LogoutButton from 'components/LogoutButton'

export default function PrivateRoute(
  Component: React.FunctionComponent<any>,
) {
  return function WithProtectionComponent(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const router = useRouter()
    useEffect(() => {
      Auth.currentAuthenticatedUser()
        .then(() => {
          setIsLoggedIn(true)
        })
        .catch(() => router.push('/auth/login'))
    })
    // TODO: LogoutButton to be removed once implemented on the AppLayout
    return isLoggedIn ? (
      <>
        <LogoutButton />

        <Component {...props} />
      </>
    ) : null
  }
}
