import {Dispatch, SetStateAction, createContext} from 'react';

export const AppContext = createContext<AppContextType | null>(null);

export type AppContextType = {
  value: {
    isDarkMode: boolean;
    setIsDarkMode: Dispatch<SetStateAction<boolean>>;
  };
};
