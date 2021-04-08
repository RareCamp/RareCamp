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
    identityPoolId: process.env.NEXT_PUBLIC_CognitoIdentityPoolId,
    userPoolId: process.env.NEXT_PUBLIC_CognitoUserPoolId,
    userPoolWebClientId:
      process.env.NEXT_PUBLIC_CognitoUserPoolClientId,
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
  return (
    <div>
      <ReactQueryDevtools initialIsOpen={false} />
      <Component {...pageProps} />
         </div>
  );
}

// HACK: Skip ConfirmSignUp view since e're auto-confirming via the Lambda Function
function ConfirmSignUpRedirectToSignIn({ authState, onStateChange }) {
  useEffect(() => {
    if (authState === 'confirmSignUp') onStateChange('signIn', {})
  }, [authState, onStateChange])

  return null
}


export default MyAppWrapper

