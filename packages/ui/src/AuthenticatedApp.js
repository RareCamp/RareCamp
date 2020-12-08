import React from 'react'
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
import '@aws-amplify/ui/dist/style.css'
import axios from 'axios'

const {
  REACT_APP_ApiEndpoint,
  REACT_APP_CognitoIdentityPoolId,
  REACT_APP_CognitoUserPoolId,
  REACT_APP_CognitoUserPoolClientId,
} = process.env

// Set Authorization header on all requests if user is signed in
axios.interceptors.request.use(async function (config) {
  try {
    const currentUserSession = await Auth.currentSession()
    const Authorization = currentUserSession.idToken.jwtToken
    config.headers.Authorization = Authorization
  } catch (e) { /* Auth.currentSession() throws if not signed in 🤷‍♂️ */ }

  return config
})

axios.defaults.baseURL = REACT_APP_ApiEndpoint

async function fetchAndSetUsers({ setUsers }) {
  const fetchUsersResponse = await axios.get('/users')
  const users = fetchUsersResponse.data
  setUsers(users)
}

function AuthenticatedApp() {
  const [users, setUsers] = React.useState(null)
  React.useEffect(() => {
    fetchAndSetUsers({ setUsers })
  }, [])

  return <div className="AuthenticatedApp">
    <ul>
      {users && users.Items.map(user => <li key={user.id}>{user.id}</li>)}
    </ul>
  </div>
}

Amplify.configure({
  Auth: {
    // region: process.env.region,
    identityPoolId: REACT_APP_CognitoIdentityPoolId,
    userPoolId: REACT_APP_CognitoUserPoolId,
    userPoolWebClientId: REACT_APP_CognitoUserPoolClientId,
  },
})

// We're auto-confirming via the Lambda Function
// Hack to skip the ConfirmSignUp view
function ConfirmSignUpRedirectToSignIn({ authState, onStateChange }) {
  React.useEffect(() => {
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

export default withAuthenticator(AuthenticatedApp, {
  usernameAttributes: 'email',
  signUpConfig,
  includeGreetings: true,
  hideDefault: true,
  authenticatorComponents: [
    <SignIn federated={federated} />,
    <ConfirmSignIn />,
    <VerifyContact />,
    <SignUp signUpConfig={signUpConfig} />,
    <ConfirmSignUpRedirectToSignIn override="ConfirmSignUp" />,
    <ForgotPassword />,
    <RequireNewPassword />,
    <Loading />,
    <Greetings />
  ],
})