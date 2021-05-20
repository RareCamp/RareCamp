import 'react-quill/dist/quill.snow.css'
import 'styles/antd.less'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

import Amplify, { Auth } from 'aws-amplify'
import axios from 'axios'
import { useRouter } from 'next/router'
import GlobalLoadingIndicator from 'components/GlobalLoadingIndicator'

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
  const router = useRouter()
  axios.interceptors.request.use(async function (config) {
    try {
      const currentUserSession = await Auth.currentSession()
      const Authorization = currentUserSession
        .getIdToken()
        .getJwtToken()
      config.headers.Authorization = Authorization
    } catch (e) {
      await router.push('/auth/login')
    }

    return config
  })

  return (
    <QueryClientProvider client={queryClient}>
      <MyApp {...props} />
    </QueryClientProvider>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalLoadingIndicator />
      <Component {...pageProps} />
    </>
  )
}

export default MyAppWrapper
