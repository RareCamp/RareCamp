import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { useQueryClient, useQuery, QueryClient, QueryClientProvider } from "react-query";
 import { ReactQueryDevtools } from 'react-query/devtools'
import "styles/antd.less";
import "styles/example.less";
import "@aws-amplify/ui/dist/style.css";
import Amplify, { Auth, Hub, withSSRContext } from "aws-amplify";
import axios from "axios";
import LogoutButton from "../components/LogoutButton";
import { ProgramsContext } from "context/programs";
import { Button, notification } from "antd";
import { useRouter } from "next/router";

// Set Authorization header on all requests if user is signed in
// export async function getServerSideProps(context) {
//   const { Auth } = withSSRContext(context);
//   try {
//
//     console.log("user: ", user);
//     return {
//       props: { user }
//     };
//   } catch (err) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/auth/login"
//       }
//     };
//   }
// }

axios.interceptors.request.use(async function(config) {
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
    // region: process.env.NEXT_PUBLIC_region,
    identityPoolId: "us-west-2:dd3bb405-f76e-4bd2-a2d0-f571e8293c01",
    userPoolId: "us-west-2_wGOZ73uUe",
    userPoolWebClientId: "2og4jjqcv8jm4v8faccvh1omc2"
  },
  ssr: true
});
const queryClient = new QueryClient();

function MyAppWrapper(props: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MyApp {...props} />
    </QueryClientProvider>
  );
}

function MyApp({ Component, pageProps }: AppProps) {

  return <ProgramsContext.Provider value={{programs: workspaces?.[0]?.programs || []}}>
    <ReactQueryDevtools initialIsOpen={false} />
    <Component {...pageProps} />
  </ProgramsContext.Provider>
}

// HACK: Skip ConfirmSignUp view since e're auto-confirming via the Lambda Function
function ConfirmSignUpRedirectToSignIn({ authState, onStateChange }) {
  useEffect(() => {
    if (authState === "confirmSignUp") onStateChange("signIn", {});
  }, [authState, onStateChange]);

  return null;
}


export default MyAppWrapper;
