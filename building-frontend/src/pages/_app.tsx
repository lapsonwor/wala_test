import { ReactQueryDevtools } from 'react-query/devtools';
import { FC, useState, ReactNode } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { TabContext } from 'contexts/useTabContext'
import { Provider } from 'react-redux';
import store from '@/store/index';

const queryClientOption = {
    defaultOptions: {
        queries: { refetchOnWindowFocus: false, retry: false, staleTime: 1000 * 5 },
    },
};

/*Temporary fix. Material UI having problem with SSR*/
export const ThemeLayout = dynamic(() => import('layout/ThemeLayout'), {
    ssr: false,
});

const MyApp: FC<AppProps> = (props) => {
    const { Component, pageProps } = props;
    const [queryClient] = useState(() => new QueryClient(queryClientOption));
    const getLayout = Component.getLayout || ((page: ReactNode) => page);
    const [tabIndex, setTabIndex] = useState(0);
    const value = { tabIndex, setTabIndex };
    return (
        <>
            <Head>

            </Head>
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <ThemeLayout>
                        <Provider store={store}>
                            <TabContext.Provider value={value}>
                                {getLayout(<Component {...pageProps} />)}
                            </TabContext.Provider>
                        </Provider>
                        <ReactQueryDevtools initialIsOpen={false} />
                    </ThemeLayout>
                </Hydrate>
            </QueryClientProvider>
        </>
    )
}
export default MyApp;