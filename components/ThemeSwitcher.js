import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import IconSunset from './IconSunset';
import IconMoonset from './IconMoonset';

function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
   
    const [ icon, setIcon ] = useState(<IconMoonset />);

    function changeTheme() {
        if (theme === 'light') {
            setTheme('dark');
            setIcon(<IconSunset />);
        } else {
            setTheme('light');
            setIcon(<IconMoonset />);
        }
    };

    useEffect(() => {
        const t = document.documentElement.getAttribute('data-theme');
        setIcon(t === 'light' ? <IconMoonset /> : <IconSunset />);
    }, []);

    return (
        <button
          className='theme-switch'
          id='theme-switch'
          title='Toggles light & dark'
          aria-label={'Change to ' + (theme === 'light' ? 'dark' : 'light') + ' theme'}
          onClick={() => changeTheme()}>
            {icon}
        </button>
    )
}

export default ThemeSwitcher;