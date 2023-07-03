import { request } from 'api/axios';
import { ILoginParams, ILoginResponse } from './types';

export const loginRequest = async (params: ILoginParams): Promise<any> => {
    const data = await request({
        url: `/user/login`,
        method: 'POST',
        data: params,
    });
    return data;
};