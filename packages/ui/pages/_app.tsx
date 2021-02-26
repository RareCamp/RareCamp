import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import 'antd/dist/antd.css';
import 'styles/globals.css';
import '@aws-amplify/ui/dist/style.css'
import Amplify, { Auth } from 'aws-amplify'
import {
  withAuthenticator,
  Loading,
  SignIn,
  ConfirmSignIn,
  VerifyContact,
  SignUp,
  ForgotPassword,
  RequireNewPassword,
  Greetings
} from 'aws-amplify-react'
import axios from 'axios'

// Set Authorization header on all requests if user is signed in
axios.interceptors.request.use(async function (config) {
  try {
    const currentUserSession = await Auth.currentSession()
    const Authorization = currentUserSession.getIdToken().getJwtToken();
    config.headers.Authorization = Authorization
  } catch (e) { /* Auth.currentSession() throws if not signed in 🤷‍♂️ */ }

  return config
})

axios.defaults.baseURL = process.env.NEXT_PUBLIC_ApiEndpoint

Amplify.configure({
  Auth: {
    // region: process.env.NEXT_PUBLIC_region,
    identityPoolId: process.env.NEXT_PUBLIC_CognitoIdentityPoolId,
    userPoolId: process.env.NEXT_PUBLIC_CognitoUserPoolId,
    userPoolWebClientId: process.env.NEXT_PUBLIC_CognitoUserPoolClientId,
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  /* eslint-disable react/jsx-props-no-spreading */
  return <Component {...pageProps} />;
}

// HACK: Skip ConfirmSignUp view since e're auto-confirming via the Lambda Function
function ConfirmSignUpRedirectToSignIn({ authState, onStateChange }) {
  useEffect(() => {
    if (authState === 'confirmSignUp') onStateChange('signIn', {})
  }, [authState, onStateChange])

  return null
}

const signUpConfig = {
  hideAllDefaults: true,
  hiddenDefaults: ['phone_number'],
}

const federated = {
  // google_client_id: 'abc123abc123abc123abc123',
  // facebook_app_id: 'abc123abc123abc123abc123',
  // amazon_client_id: 'abc123abc123abc123abc123',
}

// @ts-ignore
export default withAuthenticator(MyApp, {
  usernameAttributes: 'email',
  signUpConfig,
  includeGreetings: false,
  hideDefault: true,
  authenticatorComponents: [
    <SignIn federated={federated} />,
    <ConfirmSignIn />,
    <VerifyContact />,
    <SignUp signUpConfig={signUpConfig} />,
    // @ts-ignore
    <ConfirmSignUpRedirectToSignIn override="ConfirmSignUp" />,
    <ForgotPassword />,
    <RequireNewPassword />,
    <Loading />,
    <Greetings />
  ],
})