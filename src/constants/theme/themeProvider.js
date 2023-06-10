import { createContext, useState } from "react";
import { lightTheme, darkTheme } from "./theme";
import { ThemeProvider as StyledProvider } from 'styled-components';

export const ThemeContext = createContext({});

const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false);
    const themeObject = isDark ? darkTheme: lightTheme;

    return (
        <ThemeContext.Provider value = {{ isDark, setIsDark }} >
            <StyledProvider theme={themeObject}>{children}</StyledProvider>
        </ThemeContext.Provider>
    )
}

export { ThemeProvider };

