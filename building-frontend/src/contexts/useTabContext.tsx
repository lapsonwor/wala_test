import { useContext, createContext } from 'react';

export const TabContext = createContext(
    {
        tabIndex: 0,
        setTabIndex: (index: number) => { }
    }
);

export function useTabContext() {
    const context = useContext(TabContext);
    return context;
}