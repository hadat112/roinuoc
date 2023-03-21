import { ConfigProvider } from 'antd';
import theme from '@/configs/antd';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'antd/dist/reset.css';
import '@/styles/globals.scss';
import ErrorBoundary from '@/components/ErrorBoundary';
import Header from '@/layouts/default/header';
import Navbar from '@/layouts/default/navbar';
import DefaultLayout from '@/layouts/default';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <ConfigProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <div className="flex flex-col overflow-x-hidden max-h-[100vh]">
            <main className="flex-1 flex flex-col overflow-y-hidden">
              <Header>
                <Navbar />
              </Header>
              <DefaultLayout>
                <Component {...pageProps} />
              </DefaultLayout>
            </main>
          </div>
        </ErrorBoundary>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ConfigProvider>
  );
}
