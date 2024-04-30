import React from 'react';
import Head from 'next/head';
import './globals.css';
import { Layout } from '../components';
import { Analytics } from '@vercel/analytics/react';
import { ThemeContextProvider } from '@/context/ThemeContext';
import ThemeProvider from '@/providers/ThemeProvider';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <ThemeProvider>
        <Layout>
          <Head>
            <title>Boundless</title>
          </Head>
          <Component {...pageProps} />
          <Analytics/>
        </Layout>
      </ThemeProvider>
    </ThemeContextProvider>

  );
}

export default MyApp;