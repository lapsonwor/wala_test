export const __prod__ = process.env.NODE_ENV === 'production';
export const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

export const STORAGE_KEY = {
    token: 'token',
};