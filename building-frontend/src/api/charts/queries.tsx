import { useQuery, UseQueryOptions } from 'react-query';
import { IAverageEuiTypes, IBuilding } from './types';
import { getAverageEuiRequest, getBuildings } from './request';

export const useAverageEuis = (option?: UseQueryOptions<IAverageEuiTypes, Error>) => {
    return useQuery<IAverageEuiTypes, Error>(`/getAverageEui`, getAverageEuiRequest, option);
};

export const useBuildings = (option?: UseQueryOptions<IBuilding[], Error>) => {
    return useQuery<IBuilding[], Error>(`/getBuildings`, getBuildings, option);
};