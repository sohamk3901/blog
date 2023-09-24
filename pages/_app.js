import React from 'react';
import Head from 'next/head';
import '../styles/globals.scss';
import { Layout } from '../components';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (

    <Layout>
      <Head>
        <title>stellar insights</title>
      </Head>
      <Component {...pageProps} />
      <Analytics/>
    </Layout>
  );
}

export default MyApp;