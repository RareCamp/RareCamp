import { useState } from 'react';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import 'styles/antd.less';
import 'styles/example.less';
import '@aws-amplify/ui/dist/style.css';
import Amplify, { Auth } from 'aws-amplify';
import axios from 'axios';
import { ProgramsContext } from 'context/programs';

// Set Authorization header on all requests if user is signed in
axios.interceptors.request.use(async function (config) {
  try {
    const currentUserSession = await Auth.currentSession();
    const Authorization = currentUserSession
      .getIdToken()
      .getJwtToken();
    config.headers.Authorization = Authorization;
  } catch (e) {
    /* Auth.currentSession() throws if not signed in 🤷‍♂️ */
  }

  return config;
});

axios.defaults.baseURL = process.env.NEXT_PUBLIC_ApiEndpoint;

Amplify.configure({
  Auth: {
    region: 'ap-south-1',
    identityPoolRegion: 'ap-south-1',
    identityPoolId: 'ap-south-1:89d2a625-af3c-43b1-bba6-f5b309c14b83',
    userPoolId: 'ap-south-1_AnYbk8zYQ',
    userPoolWebClientId: '4rdvrmqsvsj8vkn6gdnc46sb6u',
    appClientSecret:
      '1k95g3nosj05g7euvarfr8dgn671liouqom3lnfu2j1sfaat6qil',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const [programs, setPrograms] = useState([]);
  // const [me, setMe] = useState(null)
  useEffect(() => {
    async function fetchAndSetPrograms() {
      try {
        const fetchProgramsResponse = await axios.get('/programs');
        setPrograms(
          fetchProgramsResponse?.data?.programs?.Items || [],
        );
      } catch {
        console.log('object');
      }
    }
    /*
    async function fetchAndSetMe() {
      const fetchMeResponse = await axios.get('/me')
      console.log('fetchMeResponse', fetchMeResponse)
      const me = fetchMeResponse.data
      setMe(me)
    }
    fetchAndSetMe()
    */
    fetchAndSetPrograms();
  }, []);

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <ProgramsContext.Provider value={{ programs }}>
      <Component {...pageProps} />
    </ProgramsContext.Provider>
  );
}

// HACK: Skip ConfirmSignUp view since e're auto-confirming via the Lambda Function
function ConfirmSignUpRedirectToSignIn({ authState, onStateChange }) {
  useEffect(() => {
    if (authState === 'confirmSignUp') onStateChange('signIn', {});
  }, [authState, onStateChange]);

  return null;
}

const signUpConfig = {
  hideAllDefaults: true,
  hiddenDefaults: ['phone_number'],
};

export default MyApp;
