import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { ILoginParams } from '@/api/auth';

export interface IAuthenticateStore {
    credential?: ILoginParams;
    token?: string;
}

const initialState: IAuthenticateStore = {
    credential: undefined,
    token: undefined,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredential: (state, { payload: { username, password } }: PayloadAction<ILoginParams>) => {
            const credential = { username, password };
            return {
                ...state,
                credential,
            };
        },
        setToken: (state, { payload: { token } }: PayloadAction<{ token: string }>) => {
            return {
                ...state,
                token,
            };
        },
        resetCredential: (state) => {
            return {
                ...state,
                credential: undefined,
                token: undefined,
            };
        },
    },
});

export const {
    setCredential,
    setToken,
    resetCredential
} = authSlice.actions;

export const getCredential = (state: RootState) => state.auth.credential;
export const getToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;
