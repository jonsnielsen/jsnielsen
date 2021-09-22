import '../styles/globals.css';
// import '@moxy/react-split-text/dist/index.css';
// import 'splitting/dist/splitting.css';
// import 'splitting/dist/splitting-cells.css';
// @ts-ignore
// import Splitting from 'splitting';

// Splitting();
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
