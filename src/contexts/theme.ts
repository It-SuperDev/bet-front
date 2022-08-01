import { createContext } from 'react';

const initialState: any = {
    mode : 'One'
};

const ThemeContext = createContext(initialState);

export { ThemeContext, initialState };
