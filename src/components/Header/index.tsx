import { useTheme } from '../../contexts/ThemeContext'
import './styles.css'

const icons = {
    sun: '/icon-sun.svg',
    moon: '/icon-moon.svg'
} as const

export const Header = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className="header-container">
            <h1 className="title">Lista de Tarefas</h1>
            <button 
                className="theme-button"
                type="button" 
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
                <img
                    src={theme === 'light' ? icons.moon : icons.sun}
                    alt={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                />
            </button>
        </div>
    )
}