/* eslint-disable no-undef */
import type { NextPage, NextComponentType } from 'next';

declare module 'next/app' {
    export declare type AppProps = Pick<
        'Component' | 'err'
    > & Record<string, any> & {
        Component: {
            getLayout?: (page: JSX.Element) => JSX.Element;
        };
    };
}
declare module 'next' {
    export declare type PageComponent<P = unknown, IP = P> = NextPage<P, IP> & {
        getLayout: (component: NextComponentType) => JSX.Element;
    };
}
