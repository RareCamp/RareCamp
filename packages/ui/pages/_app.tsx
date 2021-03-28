import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import 'styles/antd.less'
import 'styles/example.less'
import Amplify, { Auth } from 'aws-amplify'
import axios from 'axios'

axios.interceptors.request.use(async function (config) {
  try {
    const currentUserSession = await Auth.currentSession()
    const Authorization = currentUserSession
      .getIdToken()
      .getJwtToken()
    config.headers.Authorization = Authorization
  } catch (e) {
    /* Auth.currentSession() throws if not signed in 🤷‍♂️ */
  }

  return config
})

axios.defaults.baseURL = process.env.NEXT_PUBLIC_ApiEndpoint

Amplify.configure({
  Auth: {
    // region: process.env.NEXT_PUBLIC_region,
    identityPoolId: "us-west-2:dd3bb405-f76e-4bd2-a2d0-f571e8293c01",
    userPoolId: "us-west-2_wGOZ73uUe",
    userPoolWebClientId: "2og4jjqcv8jm4v8faccvh1omc2"
  },
  ssr: true,
})
const queryClient = new QueryClient()

function MyAppWrapper(props: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MyApp {...props} />
    </QueryClientProvider>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return <>
      <ReactQueryDevtools initialIsOpen={false} />
      <Component {...pageProps} />
      </>
}

// HACK: Skip ConfirmSignUp view since e're auto-confirming via the Lambda Function
function ConfirmSignUpRedirectToSignIn({ authState, onStateChange }) {
  useEffect(() => {
    if (authState === 'confirmSignUp') onStateChange('signIn', {})
  }, [authState, onStateChange])

  return null
}


export default MyAppWrapper
