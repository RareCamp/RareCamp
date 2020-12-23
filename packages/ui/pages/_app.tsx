import type { AppProps } from 'next/app';
import { AppLayout } from 'components/AppLayout';
import 'tailwindcss/tailwind.css';
import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
