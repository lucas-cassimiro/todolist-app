import { createContext, useContext, useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../styles/theme'

type Theme = 'light' | 'dark'

interface ThemeContextProps {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>('light')

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    const selectedTheme = theme === 'light' ? lightTheme : darkTheme

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <StyledThemeProvider theme={selectedTheme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)
