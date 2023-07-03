import { useEffect, useCallback } from 'react';
// import { getCookies, COOKIES, setCookies } from '@/lib/cookies';
import { getCredential, getToken, resetCredential as resetAppCredential, setCredential as setAppCredential, setToken as setAppToken } from '@/store/ducks/auth/slice';
import { useAppDispatch, useAppSelector } from './useRedux';
import { ILoginParams } from '@/api/auth';

export const useLogin = () => {
    const dispatch = useAppDispatch();
    const credential = useAppSelector(getCredential);
    const token = useAppSelector(getToken);
    const setCredential = useCallback((credential: ILoginParams) => {
        dispatch(setAppCredential(credential));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const setToken = useCallback((token: string) => {
        dispatch(setAppToken({ token }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const resetCredential = useCallback(() => {
        dispatch(resetAppCredential);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        credential,
        token,
        setCredential,
        setToken,
        resetCredential
    };
};