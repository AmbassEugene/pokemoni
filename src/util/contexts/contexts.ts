import {createContext} from 'react';

export const AppContext = createContext<AppContextType | null>(null);

type AppContextType = {
  value: {
    isDarkmode: boolean;
    setIsDarkmode: () => {};
  } | null;
};
