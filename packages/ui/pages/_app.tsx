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
    identityPoolId: 'us-west-2:b94093dd-9a02-4cd0-943d-6cf19bde3bf9',
    userPoolId: 'us-west-2_hqThd7i27',
    userPoolWebClientId: '5nhqnqgsq940amflb9np8stnrt',
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
