import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Auth } from 'aws-amplify'

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
    return isLoggedIn ? <Component {...props} /> : null
  }
}
