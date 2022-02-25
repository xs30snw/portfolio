import { useTheme } from 'next-themes';

import { WiMoonrise as IconMoon,
         WiSunrise  as IconSun } from 'react-icons/wi';

function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    function changeTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button
          className='theme-switch'
          id='theme-switch'
          title='Toggles light & dark'
          aria-label={'Change to ' + (theme === 'light' ? 'dark' : 'light') + ' theme'}
          onClick={() => changeTheme()}>
            <IconMoon />
        </button>
    )
}

export default ThemeSwitcher;