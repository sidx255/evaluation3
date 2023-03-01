import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({} as any);

interface ThemeProviderProps {
  children: JSX.Element;
}

export const ThemeContextProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<any>({});
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
