import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import 'antd/dist/antd.css';
import 'styles/globals.css';
import Amplify, { Auth } from 'aws-amplify'
import axios from 'axios'

const {
  ApiEndpoint,
  CognitoIdentityPoolId,
  CognitoUserPoolId,
  CognitoUserPoolClientId,
} = process.env
// Set Authorization header on all requests if user is signed in
axios.interceptors.request.use(async function (config) {
  try {
    const currentUserSession = await Auth.currentSession()
    const Authorization = currentUserSession.getIdToken().getJwtToken();
    config.headers.Authorization = Authorization
  } catch (e) { /* Auth.currentSession() throws if not signed in 🤷‍♂️ */ }

  return config
})

axios.defaults.baseURL = ApiEndpoint

Amplify.configure({
  Auth: {
    // region: process.env.region,
    identityPoolId: CognitoIdentityPoolId,
    userPoolId: CognitoUserPoolId,
    userPoolWebClientId: CognitoUserPoolClientId,
  },
})

console.log('process.env', process.env)
function MyApp({ Component, pageProps }: AppProps) {
  /* eslint-disable react/jsx-props-no-spreading */
console.log('1')
  return <Component {...pageProps} />;
}

export default MyApp;
