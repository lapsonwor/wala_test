import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_URL } from 'lib/constants';
import { getCookies, removeCookies } from '@/lib/cookies';
import { capitalizeFirstLetter } from 'lib/utils';
import toast from 'react-hot-toast';
// import Router from 'next/router';

export const request = axios.create({
    baseURL: API_URL,
});

const handleError = (err: AxiosError) => {
    console.log(err);
    const data: any = err?.response?.data;

    // Logout
    //   if (data?.message?.statusCode === 401) {
    //     removeCookies(COOKIES.token);
    //     removeCookies(COOKIES.user);
    //     if (!isServer && err.config.url !== '/auth/login-external-wallet') {
    //       location.href = '/';
    //       toast.error('Session expired !');
    //     }
    //   }

    const message = data?.meta?.message;
    if (!!message && err?.config?.method?.toUpperCase() !== 'GET') {
        toast.error(capitalizeFirstLetter(typeof message === 'string' ? message : message[0]));
    }
    return Promise.reject(data);
};

const handleSuccess = (res: AxiosResponse) => {
    return res.data;
};

request.interceptors.response.use(handleSuccess, handleError);

// request.interceptors.request.use(
//     async (config: AxiosRequestConfig) => {
//         const token = getCookies(COOKIES.token);

//         if (token) {
//             config = {
//                 ...config,
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             };
//         }

//         return config;
//     },
//     (error) => Promise.reject(error)
// );
