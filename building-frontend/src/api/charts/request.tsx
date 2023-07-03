import { request } from 'api/axios';
import { IAverageEuiTypes, IBuilding } from './types';

export const getAverageEuiRequest = async (): Promise<IAverageEuiTypes> => {
    const data: any = await request({
        url: `/Buildings/getAverageEui`,
        method: 'GET',
    });
    return data;
};

export const getBuildings = async (): Promise<IBuilding[]> => {
    const data: any = await request({
        url: `/Buildings/getBuildings`,
        method: 'GET',
    });
    return data;
};