import IconSun from '/icon-sun.svg'
import IconMoon from '/icon-moon.svg'
import { useTheme } from '../../contexts/ThemeContext'

export const Header = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div>
            <h1>TODO</h1>
            <button type='button' onClick={toggleTheme}>
                <img
                    src={theme === 'light' ? IconMoon : IconSun}
                    alt='Toggle Theme'
                />
            </button>
        </div>
    )
}
