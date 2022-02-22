import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import LocaleSwitcher from './LocaleSwitcher';
import { IoShapesSharp as IconMenu } from 'react-icons/io5';

function Header() {
    const { t } = useTranslation('header');

    function preventClosing(e) {
        if (e.target.nodeName !== 'INPUT') return;
        console.info(e.target.innerText);
    };

    return (<>
        <header className='header'>
            <div className='container'>
                <nav className='header__nav'>
                    <Link href='/' passHref>
                        <a aria-label='xs30snw'>
                            <span role='img' className='link'>xs30snw</span>
                        </a>
                    </Link>
                    <a href='https://github.com/xs30snw' className='link' target='_blank' rel="noreferrer">{t('projects')}</a>
                </nav>

                <span className='mobile-popup-btn'
                      aria-haspopup='true' 
                      aria-expanded='false' 
                      title='Miscellaneous settings'
                      tabIndex={-1}
                      onClick={(e)=>preventClosing(e)}>
                    <IconMenu />
                    <ul className='mobile-popup shadow'>
                        <li><LocaleSwitcher /></li>
                    </ul>
                </span>

                <div className='header__misc'>
                    <LocaleSwitcher />
                </div> 
            </div>                       
        </header>
    </>)
};

export default Header;