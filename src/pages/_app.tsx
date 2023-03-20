import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { ConfigProvider } from 'antd';
import theme from '@/configs/antd';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'antd/dist/reset.css';
import '@/styles/globals.scss';
import ErrorBoundary from '@/components/ErrorBoundary';
import Header from '@/layouts/default/header';
import Navbar from '@/layouts/default/navbar';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ConfigProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <div className="flex flex-col overflow-x-hidden max-h-[100vh]">
            <main className="flex-1 flex flex-col overflow-y-hidden">
              <Header>
                <Navbar />
              </Header>
              {getLayout(<Component {...pageProps} />)}
            </main>
          </div>
        </ErrorBoundary>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ConfigProvider>
  );
}
