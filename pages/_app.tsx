import "../Components/assets/scss/themes.scss";
import React from 'react';
import Head from 'next/head';
import { Provider } from "react-redux";
import SSRProvider from 'react-bootstrap/SSRProvider';
import { wrapper } from '../Components/slices';

import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import type { NextComponentType } from 'next';
import { ReactNode } from 'react';
import Layout from '../Components/Common/Layout';

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
  ...rest
}: AppLayoutProps) => {
  const { store } = wrapper.useWrappedStore(rest);
  const getLayout = Component.getLayout || ((page: ReactNode) => <Layout>{page}</Layout>);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Hybrix | Next js & Admin Dashboard </title>
      </Head>
        <SSRProvider>
        <Provider store={store}>
          {getLayout(
            <Component {...pageProps} />
            )}
          </Provider>
        </SSRProvider>
    </>
  );
};

export default MyApp;