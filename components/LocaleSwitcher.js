import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';

function LocaleSwitcher() {
    const router = useRouter();
    const { t } = useTranslation('locale-switcher');

    const { pathname, asPath, query } = router;
    /**
     * Change just the locale and maintain all other route information including href's query
     */
    function changeLocale() {
        const nextLocale = 
            router.locale === 'en' ? 'ru' : 'en';
        router.push({ pathname, query }, asPath, { locale: nextLocale });
    };
      
    return (
        <div className='locale-switcher'>
            <span className='locale-switcher__label'>{t('lang')}</span>
            <button aria-label={
                        router.locale === 'en'
                            ? 'English, change to russian'
                            : 'Russian, change to english'}
                    id='locale-switch' 
                    className={'locale-switcher__switch' + (router.locale === 'en' ? '' : ' locale-ru')}
                    onClick={() => changeLocale()} />
        </div> 
    )
}

export default LocaleSwitcher;